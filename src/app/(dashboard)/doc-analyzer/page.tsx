"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDashboardData } from "@/app/actions";

export default function DocAnalyzer() {
  const [activeTab, setActiveTab] = useState("analyzer");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full pb-16 space-y-6">

<section className="flex flex-col gap-4 bg-surface-container-lowest p-6 rounded-xl shadow-xl">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold">
            Matter Reference
          </span>
<span className="font-label-mono text-label-mono text-outline font-medium">{data?.documents?.[0]?.id || "DOC-2024-8849A-IN"}</span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-mono text-label-mono font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
            OCR v2.9 Verified (Sha-256 Valid)
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight truncate">
          {data?.documents?.[0]?.title || "Master Cloud Services Agreement"}
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
<span>Parties: <strong className="text-on-surface font-medium">{data?.user?.name || "Tata Tech Ltd"}</strong> (Client) vs <strong className="text-on-surface font-medium">CloudCore India Pvt Ltd</strong> (Vendor)</span>
</p>
</div>

<div className="flex items-center gap-4">

<div className="flex items-center gap-3 bg-surface-container px-4 py-2.5 rounded-xl">
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-error" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="68, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-headline-sm text-headline-sm font-bold text-error">68</span>
</div>
<div className="flex flex-col">
<span className="font-label-mono text-label-mono uppercase text-outline font-semibold">Liquidated Risk</span>
<span className="font-badge-label text-badge-label text-error font-semibold">Severe Liquidated Trap</span>
</div>
</div>
<button className="h-10 px-4 bg-primary-container text-on-primary-container font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 hover:brightness-110 transition-all shadow-md">
<span className="material-symbols-outlined text-base">file_download</span>
<span>Export Teardown Dossier</span>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-2 pt-3 bg-surface-container-low px-4 py-3 rounded-lg">
<div className="flex items-center gap-1.5 font-label-mono text-label-mono text-outline">
<span className="material-symbols-outlined text-sm text-primary">gavel</span>
<span>JURISDICTION:</span>
<span className="text-on-surface font-semibold">India (Union) • High Court of Delhi</span>
</div>
<span className="text-outline-variant px-1">•</span>
<div className="flex items-center gap-1.5 font-label-mono text-label-mono text-outline">
<span className="material-symbols-outlined text-sm text-tertiary">verified</span>
<span>STATUTORY CHECKS:</span>
<span className="text-on-surface">Indian Contract Act 1872 (§73/§74)</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-outline-variant font-medium">DPDP Act 2023</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-outline-variant font-medium">IT Act 2000 (§43A)</span>
</div>
<span className="text-outline-variant px-1">•</span>
<div className="flex items-center gap-1.5 font-label-mono text-label-mono text-outline ml-auto">
<span className="text-secondary font-medium">Commercial Division Bench Viable</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

<div className="xl:col-span-7 flex flex-col bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">

<div className="h-14 px-5 bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">description</span>
<div className="flex flex-col">
<span className="font-headline-sm text-xs font-semibold text-on-surface">MCSA_Executed_TataTech_Final_Executed.pdf</span>
<span className="font-label-mono text-label-mono text-outline">Page 14 of 48 • Stamped &amp; Notarized Bangalore</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center bg-surface-container-low rounded-lg p-0.5">
<button className="w-7 h-7 flex items-center justify-center text-outline hover:text-on-surface rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">zoom_out</span>
</button>
<span className="px-2 font-label-mono text-label-mono text-on-surface-variant font-medium">100%</span>
<button className="w-7 h-7 flex items-center justify-center text-outline hover:text-on-surface rounded hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm">zoom_in</span>
</button>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-low text-outline hover:text-on-surface">
<span className="material-symbols-outlined text-sm">vertical_align_bottom</span>
</button>
</div>
</div>

<div className="p-8 font-statute-quote text-statute-quote space-y-8 leading-relaxed text-on-surface bg-surface-container-lowest select-text relative">

<div className="flex items-center justify-between pb-3 bg-surface-container-low/40 px-3 py-1.5 rounded">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">SECTION VII: INDEMNIFICATION, COVENANTS &amp; RESTRICTIONS</span>
<span className="font-label-mono text-label-mono text-primary font-medium">STAMP REG NO: DL-884931-E</span>
</div>

<div className="relative group p-4 rounded-lg bg-surface-container/40 hover:bg-surface-container-high/40 transition-all">
<div className="absolute -left-2 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error text-surface-dim font-label-mono text-label-mono font-bold shadow-md cursor-pointer animate-pulse">
<span className="material-symbols-outlined text-xs font-black">priority_high</span>
<span>PIN #1</span>
</div>
<div className="pl-14">
<p className="font-semibold text-on-surface mb-2 font-body-md">Clause 7.2 — Indemnification Obligations</p>
<p className="text-on-surface-variant">
              "Customer (<span className="text-secondary font-medium">Tata Tech Ltd</span>) shall defend, indemnify, and hold harmless CloudCore India Pvt Ltd, its affiliates, directors, officers, and employees against any third-party claim, action, damage, loss, or expense arising out of or related to Customer Data, system downtime, regulatory inquiries, or breach of data confidentiality laws. Customer agrees that such indemnification shall be <mark className="bg-error/30 text-error font-medium px-1 rounded">wholly uncapped and payable forthwith upon first legal notice</mark> without demur or right of set-off."
            </p>
</div>
</div>

<div className="relative group p-4 rounded-lg bg-error-container/20 hover:bg-error-container/30 transition-all">
<div className="absolute -left-2 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error text-surface-dim font-label-mono text-label-mono font-bold shadow-md cursor-pointer">
<span className="material-symbols-outlined text-xs font-black">warning</span>
<span>PIN #2</span>
</div>
<div className="pl-14">
<div className="flex items-center justify-between mb-2">
<p className="font-semibold text-error font-body-md">Clause 14.1 — Limitation of Vendor Liability &amp; Absolute Bar</p>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error/20 text-error font-bold">CRITICAL DEFECT (§74 ICA)</span>
</div>
<p className="text-on-surface-variant">
              "Notwithstanding anything to the contrary in this Agreement, the aggregate and cumulative liability of Vendor (<span className="text-on-surface font-medium">CloudCore India Pvt Ltd</span>) arising under or in connection with this Agreement, whether in contract, tort (including negligence), statutory breach, or under data protection directives, shall be <mark className="bg-error/40 text-on-error-container font-semibold px-1 rounded">strictly limited to a maximum total sum of ₹35,000 INR (Rupees Thirty-Five Thousand Only)</mark>, regardless of the actual damages suffered or proven by Customer."
            </p>
</div>
</div>

<div className="relative group p-4 rounded-lg bg-surface-container/40 hover:bg-surface-container-high/40 transition-all">
<div className="absolute -left-2 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary text-surface-dim font-label-mono text-label-mono font-bold shadow-md cursor-pointer">
<span className="material-symbols-outlined text-xs font-black">info</span>
<span>PIN #3</span>
</div>
<div className="pl-14">
<p className="font-semibold text-on-surface mb-2 font-body-md">Clause 11.4 — Automatic Lock-in &amp; Renewal Mechanics</p>
<p className="text-on-surface-variant">
              "This Agreement shall automatically renew for successive 36-month periods at an annual 18% indexed price hike unless Customer delivers written notice of non-renewal exactly <mark className="bg-primary-container/20 text-primary font-medium px-1 rounded">between the 15th and 10th day preceding the expiry date</mark> exclusively via Physical Indian Speed Post delivered to the Vendor's registered office in Gurugram, Haryana. Notice served via Electronic Mail (Email) is expressly deemed void and inadmissible."
            </p>
</div>
</div>

<div className="flex items-center justify-between pt-6 text-outline font-label-mono text-label-mono">
<span>Tata Tech Digital Archive • Internal Confidential</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-tertiary">lock</span>
            256-Bit TLS Client Ingestion Hash: 0x9bf8...3b8a
          </span>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-5">

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-xl space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">psychology</span>
<span className="font-headline-sm text-xs font-semibold uppercase text-on-surface tracking-wider">AI Translation Lens</span>
</div>
<span className="font-label-mono text-label-mono text-tertiary font-medium">NyayaDense-70B Active</span>
</div>

<div className="grid grid-cols-3 gap-1 bg-surface-container-low p-1 rounded-lg" id="perspective-tabs">
<button className="perspective-btn active py-2 rounded font-label-mono text-label-mono font-semibold transition-all bg-primary-container text-on-primary-container text-center shadow" data-target="plain-legal">
            Plain-Legal
          </button>
<button className="perspective-btn py-2 rounded font-label-mono text-label-mono font-semibold text-outline hover:text-on-surface hover:bg-surface-container text-center transition-all" data-target="eli5">
            ELI5 Simplified
          </button>
<button className="perspective-btn py-2 rounded font-label-mono text-label-mono font-semibold text-outline hover:text-on-surface hover:bg-surface-container text-center transition-all" data-target="cfo-risk">
            CFO Exposure
          </button>
</div>

<div className="space-y-4" id="deck-plain-legal">

<div className="bg-surface-container p-4 rounded-lg relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
<div className="pl-2 space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-semibold">GOOD LAW • BINDING BENCH</span>
<span className="font-label-mono text-label-mono text-outline">SC Appeal No. 7419/2001</span>
</div>
<h2 className="font-headline-md text-sm font-bold text-on-surface">
                ONGC v. Saw Pipes Ltd. (2003) 5 SCC 705
              </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                The Supreme Court of India held that liquidated penalties or liability limitations must reflect a <span className="text-on-surface font-medium">"genuine pre-estimate of damages"</span>. Under Sections 73 and 74 of the Indian Contract Act 1872, illusory or unconscionable liability caps (e.g. ₹35,000 for high-value enterprise IT operations) operate as unenforceable penalty waivers void ab initio against public policy.
              </p>
<div className="flex items-center gap-2 pt-1 font-label-mono text-label-mono text-secondary">
<span className="material-symbols-outlined text-sm">bookmark</span>
<span>Followed in: Kailash Nath Associates v. DDA (2015) 4 SCC 136</span>
</div>
</div>
</div>

<div className="bg-surface-container p-4 rounded-lg space-y-2">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label uppercase text-primary font-semibold tracking-wider flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">translate</span>
                Decoded Teardown: Clause 14.1 &amp; 7.2
              </span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-error/20 text-error font-semibold">100:1 Risk Imbalance</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="text-on-surface">What it actually means:</strong> The cloud vendor limits their liability to a trivial ₹35,000 INR even if their negligence destroys your enterprise database or leaks client information under the DPDP Act 2023. Meanwhile, they require <em className="text-secondary">Tata Tech Ltd</em> to shoulder 100% uncapped indemnification for any third-party claims.
            </p>
</div>
</div>

<div className="space-y-4 hidden" id="deck-eli5">
<div className="bg-surface-container p-4 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-tertiary">
<span className="material-symbols-outlined">child_care</span>
<span className="font-headline-sm text-sm font-semibold">In Simple Everyday Terms</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Imagine renting a safe deposit locker at a premier bank. The bank's agreement states: <em>"If our guard leaves the door open and someone steals your ₹5 Crore gold jewelry, we will only pay you ₹350. But if you scratch our wall paint, you must pay us ₹50 Lakhs immediately."</em>
</p>
<p className="font-body-md text-body-md text-on-surface font-medium">
              Indian courts do not permit vendors to play this trick because contract laws require basic fairness and shared accountability.
            </p>
</div>
</div>

<div className="space-y-4 hidden" id="deck-cfo-risk">
<div className="bg-surface-container p-4 rounded-lg space-y-3">
<div className="flex items-center justify-between text-error">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="font-headline-sm text-sm font-semibold">Balance Sheet Impact</span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 bg-error/20 rounded font-bold">HIGH AUDIT EXPOSURE</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-surface-container-low p-3 rounded">
<span className="font-label-mono text-label-mono text-outline block">VENDOR MAX CAP</span>
<span className="font-headline-md text-sm font-bold text-tertiary">₹35,000 INR</span>
</div>
<div className="bg-surface-container-low p-3 rounded">
<span className="font-label-mono text-label-mono text-outline block">TATA TECH EXPOSURE</span>
<span className="font-headline-md text-sm font-bold text-error">UNCAPPED (₹25 Cr+)</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              DPDP Act 2023 §33 penalizes fiduciary data breaches up to ₹250 Crores. Clause 7.2 attempts to pass 100% of this regulatory levy onto Tata Tech's balance sheet without mutual vendor indemnity.
            </p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-xl space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-lg">edit_note</span>
<span className="font-headline-sm text-xs font-semibold uppercase text-on-surface tracking-wider">Automated Counter-Draft Redline</span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-tertiary font-medium">BNS &amp; ICA Compliant</span>
</div>

<div className="bg-surface-container-low p-4 rounded-lg font-code-inline text-code-inline space-y-2">
<div className="flex items-center justify-between text-outline text-xs">
<span>PROPOSED REPLACEMENT • CLAUSE 14.1</span>
<button className="hover:text-on-surface flex items-center gap-1" >
<span className="material-symbols-outlined text-xs">content_copy</span>
<span>Copy</span>
</button>
</div>
<div className="text-error line-through opacity-60">
            - strictly limited to a maximum total sum of ₹35,000 INR...
          </div>
<div className="text-tertiary">
            + Each party's aggregate and cumulative liability arising under or in relation to this Agreement shall be strictly limited to the total fees paid or payable by Customer to Vendor during the twelve (12) consecutive months immediately preceding the date of the claim.
          </div>
<div className="text-secondary pt-1">
            + Provided that neither party shall be excused from liability arising from willful default, gross negligence, or breach of statutory confidentiality under the DPDP Act 2023.
          </div>
</div>

<div className="flex items-center gap-3 pt-1">
<button className="flex-1 h-10 px-4 bg-primary-container text-on-primary-container font-headline-sm text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md">
<span className="material-symbols-outlined text-base">difference</span>
<span>Apply Mutual Statutory Cap @ 12-Month Fees</span>
</button>
<button className="h-10 px-3 bg-surface-container text-on-surface font-headline-sm text-xs rounded-lg hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-base">history_edu</span>
<span>Annexure</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-4 rounded-xl shadow-xl space-y-3">
<div className="flex items-center justify-between text-xs font-label-mono text-outline">
<span className="flex items-center gap-1.5 text-primary">
<span className="material-symbols-outlined text-sm">smart_toy</span>
            Ask NyayaGen Co-Counsel
          </span>
<span className="text-outline-variant">Context: DOC-2024-8849A-IN</span>
</div>
<div className="relative flex items-center">
<input className="w-full h-10 pl-3 pr-24 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="Draft Section 12A notice for this clause or ask enforceability..." type="text"/>
<button className="absolute right-1.5 h-7 px-3 bg-primary text-on-primary font-headline-sm text-xs font-bold rounded flex items-center gap-1 hover:brightness-110 transition-all">
<span>Execute</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>

<div className="flex flex-wrap items-center gap-1.5 pt-1">
<button className="px-2 py-1 rounded bg-surface-container text-outline hover:text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">
            Check Section 12A Mandate
          </button>
<button className="px-2 py-1 rounded bg-surface-container text-outline hover:text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">
            Speed Post vs IT Act Sec 66A
          </button>
<button className="px-2 py-1 rounded bg-surface-container text-outline hover:text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">
            Delhi HC Commercial Bench Rulings
          </button>
</div>
</div>
</div>
</div>


</div>
    </>
  );
}
