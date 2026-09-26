import { StateGraph, END, START } from "@langchain/langgraph";
import { LegalAgentState } from "./state";
import { supervisorNode, simplifierNode, qaNode, drafterNode, compareNode } from "./nodes";

const workflow = new StateGraph<LegalAgentState>({
  channels: {
    messages: { value: (x, y) => x.concat(y), default: () => [] },
    currentDocumentId: null,
    extractedText: null,
    retrievedContext: null,
    userIntent: null,
    finalOutput: null,
  }
})
  .addNode("supervisor", supervisorNode)
  .addNode("simplifier", simplifierNode)
  .addNode("qa", qaNode)
  .addNode("drafter", drafterNode)
  .addNode("compare", compareNode)
  .addEdge(START, "supervisor")
  .addConditionalEdges(
    "supervisor",
    (state: LegalAgentState) => state.userIntent,
    {
      summarize: "simplifier",
      qa: "qa",
      draft: "drafter",
      compare: "compare",
      unknown: END,
    }
  )
  .addEdge("simplifier", END)
  .addEdge("qa", END)
  .addEdge("drafter", END)
  .addEdge("compare", END);

export const legalAgentGraph = workflow.compile();
