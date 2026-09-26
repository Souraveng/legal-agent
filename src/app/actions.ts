"use server";

import { prisma } from "@/lib/prisma";

export async function getDashboardData() {
  try {
    const user = await prisma.user.findFirst({
      include: {
        documents: true,
        chatSessions: true,
        generatedDrafts: true,
      },
    });

    if (!user) {
      return {
        user: { name: "Advocate / Counsel", email: "guest@bharatlegal.io" },
        documents: [],
        mattersCount: 0,
        exposure: "₹0",
      };
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
      user: { name: "Advocate (Offline Mode)", email: "offline@bharatlegal.io" },
      documents: [],
      mattersCount: 0,
      exposure: "₹0",
    };
  }
}
