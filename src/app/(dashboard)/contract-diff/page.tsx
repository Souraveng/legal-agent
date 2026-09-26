"use client";

import { useState, useEffect } from "react";
import { getDashboardData } from "@/app/actions";

export default function ContractDiff() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <div className="flex flex-col w-full pb-16 space-y-6">
      <div className="bg-surface-container-lowest p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-on-surface mb-2">Compare Documents</h1>
        <p className="text-on-surface-variant">Select two documents to compare clauses side-by-side.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface-container-low p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4">Select Baseline Document</h2>
          <select className="w-full p-3 rounded-lg bg-surface-container text-on-surface border border-surface-container-highest focus:ring-1 focus:ring-primary outline-none">
            <option value="">-- Select a document --</option>
            {data?.documents?.map((doc: any) => (
              <option key={doc.id} value={doc.id}>{doc.title}</option>
            ))}
          </select>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold mb-4">Select Document to Compare</h2>
          <select className="w-full p-3 rounded-lg bg-surface-container text-on-surface border border-surface-container-highest focus:ring-1 focus:ring-primary outline-none">
            <option value="">-- Select a document --</option>
            {data?.documents?.map((doc: any) => (
              <option key={doc.id} value={doc.id}>{doc.title}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="w-full p-12 text-center bg-surface-container-low rounded-xl border border-dashed border-outline">
        <span className="material-symbols-outlined text-4xl text-outline mb-2">difference</span>
        <p className="text-on-surface-variant">Select two documents above to view the differences.</p>
      </div>
    </div>
  );
}
