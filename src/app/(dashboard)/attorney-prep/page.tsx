"use client";

import { useState, useEffect } from "react";
import { getDashboardData } from "@/app/actions";

export default function AttorneyPrep() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <div className="flex flex-col w-full pb-16 space-y-6">
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-on-surface mb-2">Attorney Preparation</h1>
        <p className="text-on-surface-variant">Select a document or dispute to generate a consultation brief for your lawyer.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data?.documents && data.documents.length > 0 ? (
          data.documents.map((doc: any) => (
            <div key={doc.id} className="bg-surface-container-low p-6 rounded-xl shadow flex flex-col justify-between border-t-4 border-t-primary">
              <div>
                <h3 className="font-bold text-lg text-on-surface mb-2">{doc.title}</h3>
                <p className="text-xs text-outline font-mono">ID: {doc.id.substring(0,8)}</p>
              </div>
              <button className="mt-6 w-full py-2 bg-primary text-on-primary text-sm font-bold rounded-lg hover:brightness-110 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">print</span>
                Generate Brief
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full p-12 text-center bg-surface-container-low rounded-xl border border-dashed border-outline">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">description</span>
            <p className="text-on-surface-variant">Upload a document to prepare an attorney brief.</p>
          </div>
        )}
      </div>
    </div>
  );
}
