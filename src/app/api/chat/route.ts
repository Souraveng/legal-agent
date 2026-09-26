import { NextRequest, NextResponse } from "next/server";
import { invokeAgentWithHistory } from "@/lib/agents/run";

export async function POST(req: NextRequest) {
  try {
    const { userId, message, sessionId, documentId } = await req.json();

    if (!userId || !message) {
      return NextResponse.json({ error: "Missing userId or message" }, { status: 400 });
    }

    if (typeof message !== "string" || message.length > 5000) {
      return NextResponse.json({ error: "Message too long or invalid format" }, { status: 400 });
    }

    const result = await invokeAgentWithHistory(userId, message, sessionId, documentId);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Agent chat error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
