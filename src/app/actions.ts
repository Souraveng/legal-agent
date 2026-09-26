"use server";

import { prisma } from "@/lib/prisma";

export async function getDashboardData() {
  try {
    let user = await prisma.user.findFirst({
      include: {
        documents: {
          select: { id: true, title: true, status: true, createdAt: true, updatedAt: true }
        },
        chatSessions: {
          select: { id: true, title: true, createdAt: true, updatedAt: true }
        },
        generatedDrafts: {
          select: { id: true, title: true, createdAt: true }
        },
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: "Guest User",
          email: "guest@example.com",
        },
        include: {
          documents: {
            select: { id: true, title: true, status: true, createdAt: true, updatedAt: true }
          },
          chatSessions: {
            select: { id: true, title: true, createdAt: true, updatedAt: true }
          },
          generatedDrafts: {
            select: { id: true, title: true, createdAt: true }
          },
        },
      });
    }

    return {
      user,
      documents: user.documents,
      mattersCount: user.documents.length + user.chatSessions.length,
      exposure: "₹" + (user.documents.length * 1500000).toLocaleString("en-IN"),
    };
  } catch (error) {
    console.error("Database connection failed:", error);
    // Fallback if DB is not running so the UI doesn't crash completely
    return {
      user: { id: "offline-user", name: "Advocate (Offline Mode)", email: "offline@bharatlegal.io" },
      documents: [],
      mattersCount: 0,
    };
  }
}

export async function getChatHistory(userId: string) {
  try {
    const sessions = await prisma.chatSession.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        documentId: true,
      },
      orderBy: { updatedAt: "desc" },
    });
    return sessions;
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return [];
  }
}

export async function getChatMessages(sessionId: string, userId: string) {
  try {
    const session = await prisma.chatSession.findUnique({
      where: { id: sessionId, userId },
      select: {
        messages: {
          orderBy: { createdAt: "asc" },
          select: { role: true, content: true, createdAt: true },
        },
      },
    });
    return session?.messages || [];
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    return [];
  }
}
