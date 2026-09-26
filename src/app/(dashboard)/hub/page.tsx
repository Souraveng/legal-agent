"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getDashboardData } from "@/app/actions";

export default function IntelligenceHub() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <div className="flex flex-col w-full pb-16">
      <div className="relative w-full overflow-hidden px-4 py-8">
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h1 className="font-headline-lg text-3xl text-on-surface font-display tracking-tight">
              Welcome back, {data?.user?.name || "Guest"}
            </h1>
            <p className="font-body-md text-on-surface-variant max-w-2xl">
              Your Personal Legal Hub. Easily understand documents, compare agreements, and prepare for legal consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-surface-container-low p-4 rounded-xl shadow">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container/60">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">folder</span>
              </div>
              <div>
                <span className="font-bold text-xl text-on-surface">{data?.documents?.length || 0}</span>
                <p className="text-xs text-outline uppercase tracking-wider">Documents</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container/60">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <div>
                <span className="font-bold text-xl text-on-surface">{data?.chatSessions?.length || 0}</span>
                <p className="text-xs text-outline uppercase tracking-wider">Conversations</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container/60">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">edit_document</span>
              </div>
              <div>
                <span className="font-bold text-xl text-on-surface">{data?.generatedDrafts?.length || 0}</span>
                <p className="text-xs text-outline uppercase tracking-wider">Drafts</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-surface-container/60">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-error">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <div>
                <span className="font-bold text-xl text-on-surface">{data?.mattersCount || 0}</span>
                <p className="text-xs text-outline uppercase tracking-wider">Active Matters</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary">description</span>
                Recent Documents
              </h2>
              {data?.documents && data.documents.length > 0 ? (
                <div className="space-y-4">
                  {data.documents.map((doc: any) => (
                    <div key={doc.id} className="p-4 bg-surface-container-low rounded-xl shadow border border-surface-container flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-on-surface">{doc.title}</h3>
                        <p className="text-xs text-outline font-mono mt-1">ID: {doc.id.substring(0,8)} • Status: {doc.status}</p>
                      </div>
                      <Link href={`/doc-analyzer?id=${doc.id}`} className="px-4 py-2 bg-primary text-on-primary text-sm rounded-lg hover:brightness-110">
                        Analyze
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 bg-surface-container-low rounded-xl border border-surface-container text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl opacity-50 mb-2">upload_file</span>
                  <p>No documents uploaded yet.</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-secondary">forum</span>
                Recent Conversations
              </h2>
              {data?.chatSessions && data.chatSessions.length > 0 ? (
                <div className="space-y-4">
                  {data.chatSessions.map((session: any) => (
                    <div key={session.id} className="p-4 bg-surface-container-low rounded-xl shadow border border-surface-container">
                      <h3 className="font-bold text-on-surface">{session.title || "New Conversation"}</h3>
                      <p className="text-xs text-outline font-mono mt-1">Started: {new Date(session.createdAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 bg-surface-container-low rounded-xl border border-surface-container text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl opacity-50 mb-2">chat_bubble</span>
                  <p>No conversations started yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
