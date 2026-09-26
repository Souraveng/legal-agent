"use server";

import { HumanMessage, AIMessage, BaseMessage } from "@langchain/core/messages";
import { prisma } from "@/lib/prisma";
import { legalAgentGraph } from "./graph";
import { LegalAgentState } from "./state";

export async function invokeAgentWithHistory(userId: string, newMessage: string, sessionId?: string, documentId?: string) {
  let session;
  let history: BaseMessage[] = [];

  if (sessionId) {
    // 1. Fetch the existing chat session and its history
    session = await prisma.chatSession.findUnique({
      where: { id: sessionId, userId },
      include: { messages: { orderBy: { createdAt: "asc" } } },
    });

    if (!session) {
      throw new Error("Session not found or unauthorized");
    }

    // 2. Convert Prisma messages to LangChain messages
    history = session.messages.map((m: {role: string, content: string}) =>
      m.role === "user" ? new HumanMessage(m.content) : new AIMessage(m.content)
    );
  } else {
    // 1. Create a new chat session
    session = await prisma.chatSession.create({
      data: {
        userId,
        documentId: documentId || null,
        title: newMessage.slice(0, 50) + (newMessage.length > 50 ? "..." : ""),
      },
    });
  }

  // 3. Append the new message
  const humanMsg = new HumanMessage(newMessage);
  history.push(humanMsg);

  // 4. Save the user's message to the DB
  await prisma.chatMessage.create({
    data: {
      sessionId: session.id,
      role: "user",
      content: newMessage,
    },
  });

  // 5. Invoke the LangGraph agent
  const initialState: Partial<LegalAgentState> = {
    messages: history,
    currentDocumentId: session.documentId || undefined,
  };

  const finalState = await legalAgentGraph.invoke(initialState) as Partial<LegalAgentState> & { finalOutput?: string };
  
  // 6. Extract the AI's final response
  // We assume the final output is either in `finalOutput` or the last message in `messages`
  let aiResponseContent = finalState.finalOutput || "";
  
  if (!aiResponseContent && finalState.messages && finalState.messages.length > 0) {
    const lastMsg = finalState.messages[finalState.messages.length - 1];
    if (lastMsg.getType() === "ai") {
      aiResponseContent = lastMsg.content.toString();
    }
  }

  if (!aiResponseContent) {
    aiResponseContent = "I could not generate a response. Please try again.";
  }

  // 7. Save the AI's response to the DB
  await prisma.chatMessage.create({
    data: {
      sessionId: session.id,
      role: "assistant",
      content: aiResponseContent,
    },
  });

  return {
    response: aiResponseContent,
    intent: finalState.userIntent,
    sessionId: session.id,
  };
}
