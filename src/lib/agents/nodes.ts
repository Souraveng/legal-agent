import { LegalAgentState } from "./state";
import { ChatVertexAI } from "@langchain/google-vertexai";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";

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
  const prompt = `You are a routing agent for a legal assistant. 
  Based on the conversation history, classify the user's LATEST intent as EXACTLY ONE of the following words: 
  'summarize', 'compare', 'qa', 'draft', or 'unknown'.`;

  const response = await geminiFlash.invoke([new SystemMessage(prompt), ...state.messages]);
  const intent = response.content.toString().trim().toLowerCase() as LegalAgentState["userIntent"];

  // Fallback if the model outputs a sentence instead of one word
  let finalIntent = "unknown" as LegalAgentState["userIntent"];
  for (const keyword of ["summarize", "compare", "qa", "draft"]) {
    if (intent.includes(keyword)) {
      finalIntent = keyword as LegalAgentState["userIntent"];
      break;
    }
  }

  // If still unknown, and there are messages, just default to qa
  if (finalIntent === "unknown" && state.messages.length > 0) {
      finalIntent = "qa";
  }

  return { userIntent: finalIntent };
}

export async function simplifierNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const textToSummarize = state.extractedText || "Please provide the text you would like me to summarize.";
  
  const response = await gemini31Pro.invoke([
    new SystemMessage(`You are an expert legal simplifier. Summarize the provided legal text based on the user's instructions. If no specific instructions, summarize it at a 10th-grade reading level, highlighting key obligations and risks.\n\nLegal Text:\n${textToSummarize}`),
    ...state.messages
  ]);

  return { 
    finalOutput: response.content.toString(),
    messages: [...state.messages, new AIMessage(response.content.toString())]
  };
}

export async function qaNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const context = state.retrievedContext?.join("\n") || state.extractedText || "No context documents provided. Answer based on general legal knowledge, but include a disclaimer that you are an AI assistant and this is not legal advice.";

  const response = await gemini31Pro.invoke([
    new SystemMessage(`You are a legal assistant. Answer the user's question. If context is provided, base your answer primarily on it.\n\nContext: ${context}`),
    ...state.messages
  ]);

  return {
    finalOutput: response.content.toString(),
    messages: [...state.messages, new AIMessage(response.content.toString())]
  };
}

export async function drafterNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const systemPrompt = `You are an expert legal drafting assistant. 
  Generate a professional, structured draft of the document or text the user requested based on their instructions and the conversation history.
  INCLUDE A DISCLAIMER at the top stating this is an AI-generated draft, not professional legal advice.`;

  const response = await gemini31Pro.invoke([
    new SystemMessage(systemPrompt),
    ...state.messages
  ]);

  return { 
    finalOutput: response.content.toString(),
    messages: [...state.messages, new AIMessage(response.content.toString())]
  };
}
