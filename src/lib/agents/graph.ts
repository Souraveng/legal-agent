import { StateGraph, END, START } from "@langchain/langgraph";
import { LegalAgentState } from "./state";
import { supervisorNode, simplifierNode, qaNode, drafterNode } from "./nodes";

const workflow = new StateGraph<LegalAgentState>({
  channels: {
    messages: { value: (x, y) => x.concat(y), default: () => [] },
    currentDocumentId: null,
    extractedText: null,
    retrievedContext: null,
    userIntent: null,
    finalOutput: null,
  }
});

workflow.addNode("supervisor", supervisorNode);
workflow.addNode("simplifier", simplifierNode);
workflow.addNode("qa", qaNode);
workflow.addNode("drafter", drafterNode);

workflow.addEdge(START, "supervisor");

workflow.addConditionalEdges(
  "supervisor",
  (state: LegalAgentState) => state.userIntent,
  {
    summarize: "simplifier",
    qa: "qa",
    draft: "drafter",
    compare: END,
    unknown: END,
  }
);

workflow.addEdge("simplifier", END);
workflow.addEdge("qa", END);
workflow.addEdge("drafter", END);

export const legalAgentGraph = workflow.compile();
