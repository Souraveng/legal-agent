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
            Document Reference
          </span>
<span className="font-label-mono text-label-mono text-outline font-medium">{data?.documents?.[0]?.id || "DOC-RENTAL-24"}</span>
<span className="text-outline-variant">•</span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-tertiary font-label-mono text-label-mono font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
            OCR v2.9 Verified (Sha-256 Valid)
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight truncate">
          {data?.documents?.[0]?.title || "Apartment Rental Agreement"}
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
<span>Parties: <strong className="text-on-surface font-medium">{data?.user?.name || "You"}</strong> (Tenant) vs <strong className="text-on-surface font-medium">CloudCore Apartments</strong> (Landlord)</span>
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
<span className="font-label-mono text-label-mono uppercase text-outline font-semibold">Major Risk</span>
<span className="font-badge-label text-badge-label text-error font-semibold">Unfair Late Fee Trap</span>
</div>
</div>
<button className="h-10 px-4 bg-primary-container text-on-primary-container font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 hover:brightness-110 transition-all shadow-md">
<span className="material-symbols-outlined text-base">file_download</span>
<span>Export Summary</span>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-2 pt-3 bg-surface-container-low px-4 py-3 rounded-lg">
<div className="flex items-center gap-1.5 font-label-mono text-label-mono text-outline">
<span className="material-symbols-outlined text-sm text-primary">gavel</span>
<span>LOCATION:</span>
<span className="text-on-surface font-semibold">India • Consumer Court</span>
</div>
<span className="text-outline-variant px-1">•</span>
<div className="flex items-center gap-1.5 font-label-mono text-label-mono text-outline">
<span className="material-symbols-outlined text-sm text-tertiary">verified</span>
<span>LAWS CHECKED:</span>
<span className="text-on-surface">Consumer Protection Act 2019</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-outline-variant font-medium">Rent Control Act</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-outline-variant font-medium">Model Tenancy Act</span>
</div>
<span className="text-outline-variant px-1">•</span>
<div className="flex items-center gap-1.5 font-label-mono text-label-mono text-outline ml-auto">
<span className="text-secondary font-medium">Eligible for Consumer Court</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

<div className="xl:col-span-7 flex flex-col bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">

<div className="h-14 px-5 bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl">description</span>
<div className="flex flex-col">
<span className="font-headline-sm text-xs font-semibold text-on-surface">Rental_Agreement_Executed.pdf</span>
<span className="font-label-mono text-label-mono text-outline">Page 14 of 48 • Digitally Signed</span>
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
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">SECTION VII: MAINTENANCE AND LATE FEES</span>
<span className="font-label-mono text-label-mono text-primary font-medium">DOC ID: DL-884931-E</span>
</div>

<div className="relative group p-4 rounded-lg bg-surface-container/40 hover:bg-surface-container-high/40 transition-all">
<div className="absolute -left-2 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error text-surface-dim font-label-mono text-label-mono font-bold shadow-md cursor-pointer animate-pulse">
<span className="material-symbols-outlined text-xs font-black">priority_high</span>
<span>PIN #1</span>
</div>
<div className="pl-14">
<p className="font-semibold text-on-surface mb-2 font-body-md">Clause 7.2 — Maintenance Obligations</p>
<p className="text-on-surface-variant">
              "The Tenant (<span className="text-secondary font-medium">You</span>) shall be responsible for all repairs, maintenance, and damages to the property regardless of cause. The Tenant agrees to pay for any and all repairs <mark className="bg-error/30 text-error font-medium px-1 rounded">without questioning the cost, immediately upon receiving the bill</mark> from the Landlord."
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
<p className="font-semibold text-error font-body-md">Clause 14.1 — Late Fees &amp; Eviction</p>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error/20 text-error font-bold">UNFAIR TERM</span>
</div>
<p className="text-on-surface-variant">
              "If the rent is delayed by even one day, the Landlord (<span className="text-on-surface font-medium">CloudCore Apartments</span>) reserves the right to evict the tenant without prior notice. Additionally, the tenant shall be liable to pay <mark className="bg-error/40 text-on-error-container font-semibold px-1 rounded">a late fee of ₹5,000 INR per day</mark> until the property is vacated."
            </p>
</div>
</div>

<div className="relative group p-4 rounded-lg bg-surface-container/40 hover:bg-surface-container-high/40 transition-all">
<div className="absolute -left-2 top-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-tertiary text-surface-dim font-label-mono text-label-mono font-bold shadow-md cursor-pointer">
<span className="material-symbols-outlined text-xs font-black">info</span>
<span>PIN #3</span>
</div>
<div className="pl-14">
<p className="font-semibold text-on-surface mb-2 font-body-md">Clause 11.4 — Notice Period</p>
<p className="text-on-surface-variant">
              "The Tenant must provide <mark className="bg-primary-container/20 text-primary font-medium px-1 rounded">a minimum of 90 days notice</mark> before vacating the property. If the Tenant leaves before this period, the entire security deposit will be forfeited, regardless of whether a new tenant is found."
            </p>
</div>
</div>

<div className="flex items-center justify-between pt-6 text-outline font-label-mono text-label-mono">
<span>Your Personal Archive</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-tertiary">lock</span>
            Securely Stored
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
<span className="font-label-mono text-label-mono text-tertiary font-medium">NyayaGen AI Active</span>
</div>

<div className="grid grid-cols-3 gap-1 bg-surface-container-low p-1 rounded-lg" id="perspective-tabs">
<button className="perspective-btn active py-2 rounded font-label-mono text-label-mono font-semibold transition-all bg-primary-container text-on-primary-container text-center shadow" data-target="plain-legal">
            Plain-Legal
          </button>
<button className="perspective-btn py-2 rounded font-label-mono text-label-mono font-semibold text-outline hover:text-on-surface hover:bg-surface-container text-center transition-all" data-target="eli5">
            ELI5 Simplified
          </button>
<button className="perspective-btn py-2 rounded font-label-mono text-label-mono font-semibold text-outline hover:text-on-surface hover:bg-surface-container text-center transition-all" data-target="cfo-risk">
            Financial Impact
          </button>
</div>

<div className="space-y-4" id="deck-plain-legal">

<div className="bg-surface-container p-4 rounded-lg relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary"></div>
<div className="pl-2 space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-semibold">YOUR RIGHTS</span>
<span className="font-label-mono text-label-mono text-outline">Consumer Law</span>
</div>
<h2 className="font-headline-md text-sm font-bold text-on-surface">
                Unfair Penalties are Invalid
              </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Under Indian law, landlords cannot charge excessively high late fees that act as a punishment rather than covering actual losses. A fee of ₹5000 per day is considered unreasonable and unfair. Furthermore, landlords cannot evict a tenant without giving proper written notice, as mandated by the Rent Control Act.
              </p>
<div className="flex items-center gap-2 pt-1 font-label-mono text-label-mono text-secondary">
<span className="material-symbols-outlined text-sm">bookmark</span>
<span>Standard Consumer Court Rulings</span>
</div>
</div>
</div>

<div className="bg-surface-container p-4 rounded-lg space-y-2">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label uppercase text-primary font-semibold tracking-wider flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm">translate</span>
                Decoded: Clause 14.1 &amp; 7.2
              </span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-error/20 text-error font-semibold">Unfair Terms</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="text-on-surface">What it actually means:</strong> The cloud vendor limits their liability to a trivial ZERO even if their negligence destroys your enterprise database or leaks client information under the Rent Control Act. Meanwhile, they require <em className="text-secondary">Tata Tech Ltd</em> to shoulder 100% uncapped indemnification for any third-party claims.
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
              Imagine a landlord saying: <em>"If you are 1 day late on rent, I will charge you an extra ₹5000 every single day, and I can throw your stuff out on the street tomorrow without warning."</em>
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
<span className="font-headline-sm text-sm font-semibold">Your Wallet Impact</span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 bg-error/20 rounded font-bold">HIGH COST RISK</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-surface-container-low p-3 rounded">
<span className="font-label-mono text-label-mono text-outline block">LANDLORD RISK</span>
<span className="font-headline-md text-sm font-bold text-tertiary">ZERO</span>
</div>
<div className="bg-surface-container-low p-3 rounded">
<span className="font-label-mono text-label-mono text-outline block">YOUR EXPOSURE</span>
<span className="font-headline-md text-sm font-bold text-error">UNLIMITED</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Rent Control Act §33 penalizes fiduciary data breaches up to ₹250 Crores. Clause 7.2 attempts to pass 100% of this regulatory levy onto Tata Tech's balance sheet without mutual vendor indemnity.
            </p>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-5 rounded-xl shadow-xl space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-lg">edit_note</span>
<span className="font-headline-sm text-xs font-semibold uppercase text-on-surface tracking-wider">Automated Fair Suggestion</span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-tertiary font-medium">Legally Fair</span>
</div>

<div className="bg-surface-container-low p-4 rounded-lg font-code-inline text-code-inline space-y-2">
<div className="flex items-center justify-between text-outline text-xs">
<span>FAIR REPLACEMENT • CLAUSE 14.1</span>
<button className="hover:text-on-surface flex items-center gap-1" >
<span className="material-symbols-outlined text-xs">content_copy</span>
<span>Copy</span>
</button>
</div>
<div className="text-error line-through opacity-60">
            - strictly limited to a maximum total sum of ZERO...
          </div>
<div className="text-tertiary">
            + If the rent is delayed, the tenant shall be liable to pay a reasonable late fee of ₹500 INR per week. The landlord must provide a minimum of 30 days written notice before initiating eviction proceedings for non-payment of rent.
          </div>
<div className="text-secondary pt-1">
            + Provided that neither party shall be excused from liability arising from willful default, gross negligence, or breach of statutory confidentiality under the Rent Control Act.
          </div>
</div>

<div className="flex items-center gap-3 pt-1">
<button className="flex-1 h-10 px-4 bg-primary-container text-on-primary-container font-headline-sm text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md">
<span className="material-symbols-outlined text-base">difference</span>
<span>Apply Fair Notice and Fee Terms</span>
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
<span className="text-outline-variant">Context: DOC-RENTAL-24</span>
</div>
<div className="relative flex items-center">
<input className="w-full h-10 pl-3 pr-24 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-inner" placeholder="Ask what this clause means or how to negotiate it..." type="text"/>
<button className="absolute right-1.5 h-7 px-3 bg-primary text-on-primary font-headline-sm text-xs font-bold rounded flex items-center gap-1 hover:brightness-110 transition-all">
<span>Execute</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>

<div className="flex flex-wrap items-center gap-1.5 pt-1">
<button className="px-2 py-1 rounded bg-surface-container text-outline hover:text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">
            Check Tenant Rights
          </button>
<button className="px-2 py-1 rounded bg-surface-container text-outline hover:text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">
            Rules on Security Deposits
          </button>
<button className="px-2 py-1 rounded bg-surface-container text-outline hover:text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">
            Eviction Notice Rules
          </button>
</div>
</div>
</div>
</div>


</div>
    </>
  );
}
