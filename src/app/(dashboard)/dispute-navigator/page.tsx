"use client";

import { useState, useEffect } from "react";
import { getDashboardData } from "@/app/actions";

export default function DisputeNavigator() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <div className="flex flex-col w-full pb-16 space-y-6">
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-on-surface mb-2">Dispute Navigator</h1>
        <p className="text-on-surface-variant">Track your active disputes and explore legal strategies based on your documents.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-on-surface">Active Matters</h2>
          {data?.chatSessions && data.chatSessions.length > 0 ? (
            data.chatSessions.map((chat: any) => (
              <div key={chat.id} className="bg-surface-container-low p-5 rounded-xl shadow border-l-4 border-l-error">
                <h3 className="font-bold text-lg text-on-surface">{chat.title || "Ongoing Dispute"}</h3>
                <p className="text-sm text-outline mt-2">Started on: {new Date(chat.createdAt).toLocaleDateString()}</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high rounded text-sm transition-colors">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center bg-surface-container-low rounded-xl border border-dashed border-outline">
              <p className="text-on-surface-variant">No active disputes being tracked.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
