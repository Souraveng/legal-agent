import fs from "fs";
import path from "path";
import { LegalAgentState } from "./state";
import { ChatVertexAI } from "@langchain/google-vertexai";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";

// Helper to load prompt files
function loadPrompt(filename: string): string {
  const filePath = path.join(process.cwd(), "src", "lib", "agents", "prompts", filename);
  return fs.readFileSync(filePath, "utf-8");
}

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
  const prompt = loadPrompt("supervisor.md");
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
  let prompt = loadPrompt("simplifier.md");
  prompt = prompt.replace("{{TEXT}}", textToSummarize);
  
  const response = await gemini31Pro.invoke([
    new SystemMessage(prompt),
    ...state.messages
  ]);

  return { 
    finalOutput: response.content.toString(),
    messages: [...state.messages, new AIMessage(response.content.toString())]
  };
}

export async function qaNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const context = state.retrievedContext?.join("\n") || state.extractedText || "No context documents provided. Answer based on general legal knowledge, but include a disclaimer that you are an AI assistant and this is not legal advice.";
  let prompt = loadPrompt("qa.md");
  prompt = prompt.replace("{{CONTEXT}}", context);

  const response = await gemini31Pro.invoke([
    new SystemMessage(prompt),
    ...state.messages
  ]);

  return {
    finalOutput: response.content.toString(),
    messages: [...state.messages, new AIMessage(response.content.toString())]
  };
}

export async function drafterNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const prompt = loadPrompt("drafter.md");
  const response = await gemini31Pro.invoke([
    new SystemMessage(prompt),
    ...state.messages
  ]);

  return { 
    finalOutput: response.content.toString(),
    messages: [...state.messages, new AIMessage(response.content.toString())]
  };
}

export async function compareNode(state: LegalAgentState): Promise<Partial<LegalAgentState>> {
  const context = state.retrievedContext?.join("\n") || state.extractedText || "No documents provided for comparison.";
  let prompt = loadPrompt("compare.md");
  prompt = prompt.replace("{{CONTEXT}}", context);

  const response = await gemini31Pro.invoke([
    new SystemMessage(prompt),
    ...state.messages
  ]);

  return { 
    finalOutput: response.content.toString(),
    messages: [...state.messages, new AIMessage(response.content.toString())]
  };
}
