import { LegalAgentState } from "./state";
import { ChatVertexAI } from "@langchain/google-vertexai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// Use Gemini 3.1 Pro (Preview) for heavy drafting and summarizing
const gemini31Pro = new ChatVertexAI({
  model: "gemini-3.1-pro-preview",
  temperature: 0.2,
});

// Use Gemini 3.7 Flash for rapid routing (Supervisor)
const geminiFlash = new ChatVertexAI({
  model: "gemini-3.7-flash",
  temperature: 0,
});

export async function supervisorNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const lastMessage = state.messages[state.messages.length - 1];
  
  const prompt = `You are a routing agent for a legal assistant. 
  Based on the user's message, classify their intent as EXACTLY ONE of the following words: 
  'summarize', 'compare', 'qa', 'draft', or 'unknown'.
  User message: ${lastMessage.content}`;

  const response = await geminiFlash.invoke([new HumanMessage(prompt)]);
  const intent = response.content.toString().trim().toLowerCase() as LegalAgentState["userIntent"];

  return { userIntent: intent };
}

export async function simplifierNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  if (!state.extractedText) throw new Error("No document text found.");

  const response = await gemini31Pro.invoke([
    new SystemMessage("You are an expert legal simplifier. Summarize the following legal text at a 10th-grade reading level, highlighting key obligations and risks."),
    new HumanMessage(state.extractedText)
  ]);

  return { 
    finalOutput: response.content.toString(),
    messages: [...state.messages, new SystemMessage(response.content.toString())]
  };
}

export async function qaNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const lastMessage = state.messages[state.messages.length - 1];
  const context = state.retrievedContext?.join("\n") || state.extractedText;

  const response = await gemini31Pro.invoke([
    new SystemMessage(`You are a legal assistant. Answer the user's question based ONLY on the provided context. If the answer is not in the context, say so.\n\nContext: ${context}`),
    lastMessage
  ]);

  return {
    finalOutput: response.content.toString(),
    messages: [...state.messages, new SystemMessage(response.content.toString())]
  };
}

export async function drafterNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const lastMessage = state.messages[state.messages.length - 1];
  
  const systemPrompt = `You are an expert legal drafting assistant. 
  Generate a professional, structured draft of the document the user requested.
  INCLUDE A DISCLAIMER at the top stating this is an AI-generated draft, not professional legal advice.`;

  const response = await gemini31Pro.invoke([
    new SystemMessage(systemPrompt),
    lastMessage
  ]);

  return { 
    finalOutput: response.content.toString(),
    messages: [...state.messages, new SystemMessage(response.content.toString())]
  };
}
