"use client";

import { useState, useEffect } from "react";
import { getDashboardData } from "@/app/actions";

export default function DocAnalyzer() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <div className="flex flex-col w-full pb-16 space-y-6">
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-on-surface mb-2">Document Analyzer</h1>
        <p className="text-on-surface-variant">Select a document from your vault to deeply analyze its clauses, risks, and obligations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.documents && data.documents.length > 0 ? (
          data.documents.map((doc: any) => (
            <div key={doc.id} className="bg-surface-container-low p-6 rounded-xl shadow flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-on-surface mb-2">{doc.title}</h3>
                <p className="text-sm text-outline mb-4 line-clamp-3">
                  {doc.extractedText ? doc.extractedText.substring(0, 150) + "..." : "No text extracted yet."}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-container">
                <span className="text-xs font-mono text-tertiary px-2 py-1 bg-tertiary-container rounded">{doc.status}</span>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:brightness-110">
                  Analyze <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full p-12 text-center bg-surface-container-low rounded-xl border border-dashed border-outline">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">note_stack</span>
            <p className="text-on-surface-variant">Your vault is empty. Upload a document to start analyzing.</p>
          </div>
        )}
      </div>
    </div>
  );
}
