import { BaseMessage } from "@langchain/core/messages";

export interface LegalAgentState {
  messages: BaseMessage[];
  currentDocumentId?: string;
  extractedText?: string;
  retrievedContext?: string[];
  userIntent: "summarize" | "compare" | "qa" | "draft" | "unknown";
  finalOutput?: string;
}

export const initialLegalState: LegalAgentState = {
  messages: [],
  userIntent: "unknown",
};
