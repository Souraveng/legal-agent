"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getDashboardData } from "@/app/actions";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("analyzer");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]"><div className="h-20 w-full px-gutter-desktop max-w-[1440px] mx-auto flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-shrink-0"><Link className="flex items-center gap-space-sm" data-path="overview" href="/"><Image alt="NyayaGen AI brand logo" width={32} height={32} className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Xd3lMClB_LFNRnEx-M8uiuQECR43vMXVQ2mnEpaShofpp2gnszd9BON6ZyP-CXgof1CehIv8fPsg-6wYRWF6t1jHEjKhC04SUGQywyu5pS2VMs1-cUhfWh-aQ3oIp1sJkutHSp85Qa2acpqiChbLPZoIvPNaRPrswqDWdfUP1r1YqZKbfkAiAoJ9Hw6tDhPlB3j--nFuqW0Qe6zNFTtXvEJonXuTXN_HV8v0oDv41yQSAYNFQv4IP0fi0" /><div className="flex flex-col"><div className="flex items-center gap-space-xs"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">NyayaGen<span className="text-primary">.ai</span></span></div><div className="flex items-center gap-space-xs"></div></div></Link></div><div className="flex items-center gap-space-md">
  {data?.user ? (
    <Link className="inline-flex items-center px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-primary bg-primary-container hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_20px_rgba(128,131,255,0.35)]" data-path="get-started" href="/hub">Welcome back, {data.user.name}</Link>
  ) : (
    <>
      <Link className="hidden sm:inline-flex items-center px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="sign-in" href="/hub">Sign In</Link>
      <Link className="inline-flex items-center px-space-md py-space-xs rounded-lg font-body-sm text-body-sm text-on-primary bg-primary-container hover:bg-primary hover:text-on-primary transition-all shadow-[0_0_20px_rgba(128,131,255,0.35)]" data-path="get-started" href="/hub">Get Started Free</Link>
    </>
  )}
</div></div></header><main className="w-full pt-20 bg-surface-container-lowest"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-primary-container/20 rounded-full blur-[140px] pointer-events-none"></div>
<div className="absolute top-96 -left-48 w-[420px] h-[420px] bg-secondary-container/15 rounded-full blur-[120px] pointer-events-none"></div>

<section className="relative w-full px-gutter-desktop max-w-[1440px] mx-auto pt-12 pb-20 flex flex-col items-center text-center">



<h1 className="font-display text-display text-on-surface max-w-4xl tracking-tight leading-tight">
        Democratizing Bharat’s Legal Complexity with <span className="text-primary italic">Statutory AI</span>.
      </h1>

<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-md leading-relaxed">
        Autonomous contract teardowns under ICA 1872, bilateral redline conflict benchmarks, statutory tenancy dispute workflows, and senior advocate consultation dossiers — powered by India’s first sovereign legal reasoning engine.
      </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mt-space-xl w-full sm:w-auto">
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg font-headline-sm text-body-md text-on-primary bg-primary-container hover:bg-primary shadow-[0_0_24px_rgba(128,131,255,0.4)] transition-all transform hover:-translate-y-0.5" href="/hub">
<span className="">Start Free Legal Intake</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg font-headline-sm text-body-md text-on-surface bg-surface-container hover:bg-surface-container-high transition-all shadow-sm" href="#interactive-showcase">
<span className="material-symbols-outlined text-secondary text-[20px]">play_circle</span>
<span className="">Explore Live Interactive Demo</span>
</Link>
</div>
<div className="mt-space-md flex flex-wrap items-center justify-center gap-x-space-md gap-y-1 text-on-surface-variant font-label-mono text-label-mono">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-tertiary">check_circle</span> No credit card required</span>
<span className="">•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-secondary">gavel</span> Bar Council of India Rule 36 Compliant</span>


</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md w-full max-w-5xl mt-16 bg-surface-container-low/60 backdrop-blur-xl border border-surface-container-highest/60 p-space-md rounded-2xl shadow-xl"><div className="flex flex-col items-center md:items-start p-space-sm bg-surface-container-lowest/50 rounded-xl border border-surface-container-highest/30 transition-all hover:bg-surface-container-lowest/80"><div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary uppercase tracking-wider"><span className="material-symbols-outlined text-[14px] text-secondary">account_balance_wallet</span><span className="">Recoveries &amp; Disputes</span></div><span className="font-headline-lg text-headline-lg text-primary font-bold mt-1 tracking-tight">₹{data?.exposure?.total ? (data.exposure.total / 10000000).toFixed(1) + ' Cr+' : '4.8 Cr+'}</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Indexed across active matters</span></div><div className="flex flex-col items-center md:items-start p-space-sm bg-surface-container-lowest/50 rounded-xl border border-surface-container-highest/30 transition-all hover:bg-surface-container-lowest/80"><div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary uppercase tracking-wider"><span className="material-symbols-outlined text-[14px] text-tertiary">verified</span><span className="">Precedent Accuracy</span></div><span className="font-headline-lg text-headline-lg text-tertiary font-bold mt-1 tracking-tight">99.4%</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">BNS &amp; SCI citation verification</span></div><div className="flex flex-col items-center md:items-start p-space-sm bg-surface-container-lowest/50 rounded-xl border border-surface-container-highest/30 transition-all hover:bg-surface-container-lowest/80"><div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary uppercase tracking-wider"><span className="material-symbols-outlined text-[14px] text-primary">timer</span><span className="">Briefing Velocity</span></div><span className="font-headline-lg text-headline-lg text-primary font-bold mt-1 tracking-tight">3.2 Hrs</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Conserved per advocate dossier</span></div><div className="flex flex-col items-center md:items-start p-space-sm bg-surface-container-lowest/50 rounded-xl border border-surface-container-highest/30 transition-all hover:bg-surface-container-lowest/80"><div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary uppercase tracking-wider"><span className="material-symbols-outlined text-[14px] text-tertiary">schedule</span><span className="">MSMED Stat. Clocks</span></div><span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1 tracking-tight">45 Days</span><span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Compounded penal interest tracker</span></div></div>
</section>

<section className="w-full px-gutter-desktop max-w-[1440px] mx-auto py-16" id="interactive-showcase">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
<div>
<div className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-primary uppercase tracking-widest mb-1">
<span className="material-symbols-outlined text-[16px]">terminal</span> Sovereign Judicial Copilot
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Experience the 4 Core Intelligence Engines</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Inspect live statutory redlines, penal interest matrices, and judicial authority validations computed in sub-50ms latency.
        </span>
</div>

<div className="bg-surface-container rounded-xl shadow-xl overflow-hidden flex flex-col">

<div className="bg-surface-container-high px-space-md py-space-sm flex flex-wrap items-center justify-between gap-space-sm">

<div className="flex items-center gap-space-xs overflow-x-auto" id="engine-tabs">
<button className="tab-btn px-space-sm py-1.5 rounded font-body-sm text-body-sm bg-primary-container text-on-primary flex items-center gap-1.5 transition-all" id="tab-analyzer" >
<span className="material-symbols-outlined text-[16px]">description</span>
<span className="">1. Clause Teardown (§73/74 ICA)</span>
</button>
<button className="tab-btn px-space-sm py-1.5 rounded font-body-sm text-body-sm bg-surface-container-highest text-on-surface hover:text-primary flex items-center gap-1.5 transition-all" id="tab-diff" >
<span className="material-symbols-outlined text-[16px]">compare_arrows</span>
<span className="">2. Diff &amp; Voids (§27 ICA)</span>
</button>
<button className="tab-btn px-space-sm py-1.5 rounded font-body-sm text-body-sm bg-surface-container-highest text-on-surface hover:text-primary flex items-center gap-1.5 transition-all" id="tab-dispute" >
<span className="material-symbols-outlined text-[16px]">balance</span>
<span className="">3. Tenancy &amp; e-Daakhil</span>
</button>
<button className="tab-btn px-space-sm py-1.5 rounded font-body-sm text-body-sm bg-surface-container-highest text-on-surface hover:text-primary flex items-center gap-1.5 transition-all" id="tab-prep" >
<span className="material-symbols-outlined text-[16px]">folder_special</span>
<span className="">4. Advocate Dossier (DIAC)</span>
</button>
</div>
<div className="hidden lg:flex items-center gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary"></span> Engine: Active</span>
<span className="bg-surface-container-lowest px-2 py-0.5 rounded text-secondary font-code-inline text-code-inline">MUM-1 • 42ms</span>
</div>
</div>

<div className="engine-panel grid grid-cols-1 lg:grid-cols-12 p-space-lg gap-space-lg" id="panel-analyzer">

<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-secondary uppercase">Draft Source Clause • MSA-2024-EX-04</span>
<span className="inline-flex items-center gap-1 text-error bg-error-container/20 px-2 py-0.5 rounded font-badge-label text-badge-label">
<span className="material-symbols-outlined text-[14px]">warning</span> Unenforceable Penalty Detected
              </span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg font-statute-quote text-statute-quote text-on-surface leading-relaxed shadow-sm">
              “Clause 14.3 (Liquidated Damages): In the event of any Service Outage exceeding four (4) contiguous hours, the Vendor shall unconditionally forfeit 100% of the entire Quarterly SLA Retainer and remit a flat punitive liquidated sum of <span className="bg-error-container text-on-error-container px-1 py-0.5 rounded">₹25,00,000 without requirement of proof of actual loss</span>, regardless of mitigating telecommunication carrier force majeure.”
            </div>

<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm">
<div className="flex items-center gap-space-md">
<span className="font-label-mono text-label-mono uppercase text-primary">Synthesis Lens:</span>
<span className="font-badge-label text-badge-label text-on-surface bg-surface-container-highest px-2 py-0.5 rounded">CFO Balance-Sheet Risk</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Direct balance sheet hazard. Clause operates as an in terrorem penalty rather than genuine pre-estimate of loss under Indian jurisprudence. Under <span className="text-secondary font-semibold">Kailash Nath Associates v. DDA (2015 4 SCC 136)</span>, actual loss must be demonstrated unless impossible to calculate.
              </p>
</div>
</div>

<div className="lg:col-span-5 bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-md justify-between">
<div>
<div className="flex items-center gap-space-xs text-tertiary mb-space-xs font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-[20px]">verified</span>
<span className="">NyayaGen Recommended Redline</span>
</div>
<div className="font-code-inline text-code-inline bg-surface-container-lowest p-space-md rounded text-on-surface leading-relaxed">
                “...Vendor shall remit a service credit capped at <span className="text-tertiary font-bold">15% of the prorated monthly fee</span>, representing the genuine and reasonable pre-estimate of direct commercial loss pursuant to Section 74 of the Indian Contract Act, 1872.”
              </div>
</div>
<div className="bg-surface-container p-space-sm rounded flex flex-col gap-1">
<div className="flex justify-between font-label-mono text-label-mono text-on-surface-variant">
<span className="">Supreme Court Doctrine:</span>
<span className="text-secondary font-medium">Fateh Chand (AIR 1963 SC 1405)</span>
</div>
<div className="flex justify-between font-label-mono text-label-mono text-on-surface-variant">
<span className="">Enforceability Index:</span>
<span className="text-tertiary font-bold">96% Defensible in Indian Arbitrations</span>
</div>
</div>
</div>
</div>

<div className="engine-panel hidden grid grid-cols-1 lg:grid-cols-12 p-space-lg gap-space-lg" id="panel-diff">
<div className="lg:col-span-7 flex flex-col gap-space-md">
<span className="font-label-mono text-label-mono text-secondary uppercase">Bilateral Counter-Party Redline Comparison</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm bg-surface-container-lowest p-space-md rounded-lg font-body-sm text-body-sm">
<div className="flex flex-col gap-1">
<span className="text-error font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">cancel</span> Counter-Party Clause (Void)</span>
<p className="text-on-surface-variant italic">“Employee shall not solicit, join, or operate any direct competitor anywhere in India for 24 months post-cessation of employment.”</p>
</div>
<div className="flex flex-col gap-1">
<span className="text-tertiary font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> NyayaGen Statutory Strike</span>
<p className="text-on-surface">“Restraint on post-employment professional practice is <span className="text-error font-bold underline">void ab initio</span> under Section 27, ICA 1872. Limited strictly to non-disclosure of proprietary trade secrets.”</p>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg">
<span className="font-headline-sm text-headline-sm text-on-surface block mb-1">Binding Apex Precedent Authority</span>
<p className="font-statute-quote text-statute-quote text-on-surface-variant italic">
                “Under Section 27, an agreement restraining any lawful profession, trade, or business is void to that extent. Indian law admits no test of reasonableness for post-termination non-compete covenants.”
              </p>
<div className="mt-2 font-label-mono text-label-mono text-primary font-medium">
                • Percept D'Mark (India) (P) Ltd. v. Zaheer Khan &amp; Anr. (2006) 4 SCC 227
              </div>
</div>
</div>
<div className="lg:col-span-5 bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<span className="font-label-mono text-label-mono text-secondary uppercase">MSMED Statutory Redline Guard</span>
<div className="p-space-sm bg-surface-container rounded font-body-sm text-body-sm text-on-surface">
<div className="flex justify-between items-center mb-1">
<span className="font-semibold text-tertiary">MSMED Act 2006 • Sec 15 &amp; 16</span>
<span className="bg-tertiary-container/30 text-tertiary px-1.5 py-0.5 rounded text-[11px]">Automatic Override</span>
</div>
                Payment period contracted as “90 days NET” is automatically truncated to <span className="text-primary font-bold">45 statutory days maximum</span> with compound interest at 3x RBI Bank Rate.
              </div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded font-label-mono text-label-mono text-on-surface-variant">
<span className="">Arbitral Venue Defense: </span>
<span className="text-on-surface font-semibold">New Delhi Seat • Exclusive High Court Oversight</span>
</div>
</div>
</div>

<div className="engine-panel hidden grid grid-cols-1 lg:grid-cols-12 p-space-lg gap-space-lg" id="panel-dispute">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-secondary uppercase">Tenancy &amp; Consumer Remedy Pipeline</span>
<span className="font-label-mono text-label-mono text-tertiary bg-surface-container-high px-2 py-0.5 rounded">Jurisdiction: Bengaluru Urban / Karnataka</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-secondary">Step 1 • Day 0</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Legal Notice</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated Registered Post AD demand under Model Tenancy Act.</p>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-secondary">Step 2 • Day 15</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Rent Authority</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Summary petition before the designated Rent Court / Rent Controller.</p>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-secondary">Step 3 • Day 45</span>
<span className="font-headline-sm text-headline-sm text-on-surface">e-Daakhil Claim</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">District Commission consumer filing for compensation up to ₹50,00,000.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-primary uppercase font-bold">Automatic Statutory Clock Active</span>
<span className="">15-Day Cure period expires on <strong>April 22, 2025</strong>. Non-compliance triggers ₹5,000/day statutory withholding damages.</span>
</div>
</div>
<div className="lg:col-span-4 bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div>
<span className="font-label-mono text-label-mono text-secondary uppercase block mb-2">Automated Filing Artefacts</span>
<div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
<div className="flex items-center justify-between p-1.5 bg-surface-container rounded">
<span className="flex items-center gap-1 text-on-surface"><span className="material-symbols-outlined text-[16px] text-primary">draft</span> Speed Post AD Notice.pdf</span>
<span className="text-tertiary font-label-mono text-label-mono">Ready</span>
</div>
<div className="flex items-center justify-between p-1.5 bg-surface-container rounded">
<span className="flex items-center gap-1 text-on-surface"><span className="material-symbols-outlined text-[16px] text-primary">draft</span> Form-D Rent Filing.docx</span>
<span className="text-tertiary font-label-mono text-label-mono">Ready</span>
</div>
<div className="flex items-center justify-between p-1.5 bg-surface-container rounded">
<span className="flex items-center gap-1 text-on-surface"><span className="material-symbols-outlined text-[16px] text-primary">draft</span> Postal Tracker Hash.sha256</span>
<span className="text-tertiary font-label-mono text-label-mono">Verified</span>
</div>
</div>
</div>
<button className="w-full mt-space-md py-2 bg-primary text-on-primary font-headline-sm text-body-sm rounded shadow">
              Export Complete Dispute Docket
            </button>
</div>
</div>

<div className="engine-panel hidden grid grid-cols-1 lg:grid-cols-12 p-space-lg gap-space-lg" id="panel-prep">
<div className="lg:col-span-7 flex flex-col gap-space-md">
<span className="font-label-mono text-label-mono text-secondary uppercase">Chambers Strategy Dossier • Commercial CAM Surcharge</span>
<div className="bg-surface-container-lowest p-space-md rounded-lg flex flex-col gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Brief for Senior Counsel Consultation</span>
<p className="font-body-md text-body-md text-on-surface-variant">
                Arbitration claim under Delhi International Arbitration Centre (DIAC) rules regarding retrospective common area maintenance (CAM) tariff escalation of ₹1.42 Cr by Developer.
              </p>
<div className="bg-surface-container p-space-sm rounded font-label-mono text-label-mono text-secondary">
                Pre-Institution Mediation Trigger: Section 12A, Commercial Courts Act 2015 status completed via DLSA.
              </div>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg">
<span className="font-label-mono text-label-mono text-primary uppercase font-bold block mb-1">Pre-Formulated Cross-Exam Questions</span>
<ol className="list-decimal list-inside space-y-1 font-body-sm text-body-sm text-on-surface">
<li className="">Whether unilateral electricity tariff surcharges violate the express indexation formula in Schedule 4?</li>
<li className="">Absence of audited utility meters under Central Electricity Authority regulations.</li>
</ol>
</div>
</div>
<div className="lg:col-span-5 bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<span className="font-label-mono text-label-mono text-secondary uppercase">Evidentiary Chain of Custody</span>
<div className="p-space-sm bg-surface-container rounded flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-tertiary">Evidence Exhibit A-1</span>
<span className="font-body-sm text-body-sm text-on-surface">65B Indian Evidence Act Certificate (BSA 2023 Sec 63 Equivalent) generated with cryptographic timestamp.</span>
</div>
<div className="p-space-sm bg-surface-container rounded flex flex-col gap-1">
<span className="font-label-mono text-label-mono text-secondary">DIAC Fast-Track Eligibility</span>
<span className="font-body-sm text-body-sm text-on-surface">Arbitral Tribunal sole arbitrator notice issued; hearing window 180 days.</span>
</div>
</div>
<div className="pt-space-sm font-label-mono text-label-mono text-on-surface-variant flex items-center justify-between">
<span className="">Billable Hours Conserved:</span>
<span className="text-tertiary font-bold text-body-md">2.75 Hours</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-gutter-desktop max-w-[1440px] mx-auto py-16">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Built for In-House Counsels &amp; Law Chambers</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">Precision-Engineered for the Indian Bar</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
          Unlike generic global language models that hallucinate US or UK case law, NyayaGen is grounded exclusively in the Constitution of India, High Court benches, and Bare Acts.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<div className="bg-surface-container-low p-space-xl rounded-xl shadow-md flex flex-col justify-between hover:bg-surface-container transition-all">
<div>
<div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">search_insights</span>
</div>
<span className="font-label-mono text-label-mono text-secondary uppercase">Engine 01</span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Instant Clause Teardown &amp; Plain-Language Translation</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
              Translates complex Indian legalese into Plain-English, ELI5, and CFO Exposure lenses. Highlights asymmetric indemnification, unilateral termination lock-ins, and hidden courier notice traps that prejudice litigation outcomes.
            </p>
</div>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest/60 p-space-md rounded-lg">
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
<span className="">Section Covered:</span>
<span className="text-on-surface font-semibold">§73 &amp; §74 Indian Contract Act</span>
</div>
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant mt-1">
<span className="">Apex Authority:</span>
<span className="text-tertiary">Kailash Nath Associates (2015)</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-xl rounded-xl shadow-md flex flex-col justify-between hover:bg-surface-container transition-all">
<div>
<div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[28px]">rule_folder</span>
</div>
<span className="font-label-mono text-label-mono text-secondary uppercase">Engine 02</span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Bilateral Contract Diff &amp; Statutory Voids</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
              Automatically flags and strikes down post-termination non-competes under Section 27 ICA (void ab initio per <em>Percept D'Mark v. Zaheer Khan</em>) and enforces non-derogable 45-day MSMED Act payment limits against oppressive vendor contracts.
            </p>
</div>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest/60 p-space-md rounded-lg">
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
<span className="">Void Analysis:</span>
<span className="text-on-surface font-semibold">Restraint of Trade / Section 27</span>
</div>
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant mt-1">
<span className="">Statutory Override:</span>
<span className="text-tertiary">MSMED Act 2006 Compounding</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-xl rounded-xl shadow-md flex flex-col justify-between hover:bg-surface-container transition-all">
<div>
<div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary mb-space-md">
<span className="material-symbols-outlined text-[28px]">timeline</span>
</div>
<span className="font-label-mono text-label-mono text-secondary uppercase">Engine 03</span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Dispute Scenario Navigator &amp; Statutory Clocks</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
              Step-by-step statutory remedies for urban tenancy disputes under state-specific Model Tenancy Acts, Consumer Protection Act claims (e-Daakhil up to ₹50L), and automated registered Speed Post AD notice generation with postal tracker integration.
            </p>
</div>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest/60 p-space-md rounded-lg">
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
<span className="">State Enactments:</span>
<span className="text-on-surface font-semibold">Karnataka, Delhi, Maharashtra</span>
</div>
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant mt-1">
<span className="">Consumer Tribunal:</span>
<span className="text-tertiary">e-Daakhil Direct Integration</span>
</div>
</div>
</div>

<div className="bg-surface-container-low p-space-xl rounded-xl shadow-md flex flex-col justify-between hover:bg-surface-container transition-all">
<div>
<div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">assignment_turned_in</span>
</div>
<span className="font-label-mono text-label-mono text-secondary uppercase">Engine 04</span>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">Attorney Prep Brief &amp; Evidence Chain of Custody</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
              Condenses multi-gigabyte factual chaos into high-yield 2-page advocate dossiers with pre-formulated cross-examination queries under Section 12A Commercial Courts Act and DIAC arbitration rules, saving 2.5+ billable advocate hours every briefing.
            </p>
</div>
<div className="mt-space-lg pt-space-md bg-surface-container-lowest/60 p-space-md rounded-lg">
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
<span className="">Mediation Mandatory:</span>
<span className="text-on-surface font-semibold">Sec 12A CCA 2015</span>
</div>
<div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant mt-1">
<span className="">Certificate Generation:</span>
<span className="text-tertiary">BSA 2023 Sec 63 / 65B Electronic Proof</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-gutter-desktop max-w-[1440px] mx-auto py-16">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
<div>
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">Statutory Ingestion Engine</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Exhaustive Sovereign Legal Corpus</h2>
</div>
<div className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface-variant bg-surface-container px-space-md py-2 rounded-lg">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="">Indexed Daily Against e-Courts &amp; SCI Gazette</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-space-md">

<div className="md:col-span-2 bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="material-symbols-outlined text-primary text-[28px]">account_balance</span>
<span className="font-label-mono text-label-mono text-secondary bg-surface-container-highest px-2 py-0.5 rounded">SCI • 25 High Courts</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Supreme Court &amp; Constitutional Benches</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Complete judicial doctrine records from Delhi, Bombay, Karnataka, Calcutta, and Allahabad High Courts. Precedents are categorized by bench strength (Division vs Constitution) and automatically checked for subsequent negative treatments.
            </p>
</div>
<div className="flex flex-wrap gap-1.5 mt-space-md">
<span className="bg-surface-container-highest text-on-surface font-code-inline text-[12px] px-2 py-0.5 rounded">AIR 1950 - 2025</span>
<span className="bg-surface-container-highest text-on-surface font-code-inline text-[12px] px-2 py-0.5 rounded">SCC Online Cross-Walk</span>
<span className="bg-surface-container-highest text-on-surface font-code-inline text-[12px] px-2 py-0.5 rounded">Curative Petition Tracking</span>
</div>
</div>

<div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="material-symbols-outlined text-tertiary text-[28px]">gavel</span>
<span className="font-label-mono text-label-mono text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded">2023 Enactments</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">BNS &amp; BSA Transition</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Bidirectional cross-mapping between Indian Penal Code (IPC) and Bharatiya Nyaya Sanhita (BNS), and Indian Evidence Act to Bharatiya Sakshya Adhiniyam (BSA).
            </p>
</div>
<span className="font-label-mono text-label-mono text-secondary mt-space-sm">100% Concordance Matrix</span>
</div>

<div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="material-symbols-outlined text-secondary text-[28px]">percent</span>
<span className="font-label-mono text-label-mono text-secondary bg-surface-container-highest px-2 py-0.5 rounded">Sec 15 &amp; 16</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">MSMED Interest Matrix</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Automated 3x RBI compounding interest engine for delayed supplier invoices. Ready-to-file Samadhaan dockets with principal/interest ledger breakdown.
            </p>
</div>
<span className="font-label-mono text-label-mono text-tertiary mt-space-sm">Automated Form-1 Calculation</span>
</div>

<div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="material-symbols-outlined text-primary text-[28px]">corporate_fare</span>
<span className="font-label-mono text-label-mono text-primary bg-primary-container/20 px-2 py-0.5 rounded">CCA 2015</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Commercial Suits &amp; §12A</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Strict mandatory pre-institution mediation protocols (Patil Automation doctrine) and designated Commercial Division pecuniary jurisdiction validation.
            </p>
</div>
<span className="font-label-mono text-label-mono text-secondary mt-space-sm">DLSA / SAMADHAAN Compatible</span>
</div>

<div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="material-symbols-outlined text-secondary text-[28px]">handshake</span>
<span className="font-label-mono text-label-mono text-secondary bg-surface-container-highest px-2 py-0.5 rounded">A&amp;C Act 1996</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Institutional Arbitration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              DIAC, MCIA, and SIAC jurisdictional seat analysis. Fast-track appointment pipelines under §11 and §9 interim relief dossiers.
            </p>
</div>
<span className="font-label-mono text-label-mono text-on-surface-variant mt-space-sm">Sec 29A Timeline Watchdogs</span>
</div>

<div className="md:col-span-2 bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="material-symbols-outlined text-tertiary text-[28px]">real_estate_agent</span>
<span className="font-label-mono text-label-mono text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded">RERA &amp; Tenancy</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Model Tenancy Act &amp; Urban Leases</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Comprehensive state-level compliance checks for security deposit caps (max 2 months residential, 6 months commercial), structural maintenance obligations, and non-judicial Rent Tribunal eviction grounds.
            </p>
</div>
<div className="flex flex-wrap gap-1.5 mt-space-md">
<span className="bg-surface-container-highest text-on-surface font-code-inline text-[12px] px-2 py-0.5 rounded">MTA 2021 Rules</span>
<span className="bg-surface-container-highest text-on-surface font-code-inline text-[12px] px-2 py-0.5 rounded">Consumer Protection (CPA 2019)</span>
<span className="bg-surface-container-highest text-on-surface font-code-inline text-[12px] px-2 py-0.5 rounded">Eviction Stay Guard</span>
</div>
</div>
</div>
</section>

<section className="w-full px-gutter-desktop max-w-[1440px] mx-auto py-16">
<div className="bg-surface-container-low rounded-xl p-space-xl shadow-lg">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-5 flex flex-col gap-space-md">
<span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest">Sovereign Data Governance</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Architected for Advocate-Client Privilege</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Legal documents are sacred. NyayaGen’s architecture ensures complete statutory confidentiality under Section 126 of the Indian Evidence Act (and Section 132 of BSA 2023), backed by strict non-negotiable data isolation.
            </p>
<div className="flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">verified_user</span>
<div>
<span className="font-headline-sm text-body-md text-on-surface font-semibold block">BCI Rule 36 Ethical Compliance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Operates as decision-support technology strictly for enrolled practitioners; never acts as surrogate legal counsel.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">lock_clock</span>
<div>
<span className="font-headline-sm text-body-md text-on-surface font-semibold block">DPDP Act 2023 Sovereign Residency</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Zero cross-border transfers. Isolated database instances hosted in AWS Mumbai (ap-south-1) with zero model training on customer briefs.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">fingerprint</span>
<div>
<span className="font-headline-sm text-body-md text-on-surface font-semibold block">Tamper-Proof SHA-256 Proof of Record</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Cryptographic SHA-256 hashes generated for every redline and analysis docket to satisfy High Court digital evidentiary scrutiny.</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-inner font-code-inline text-code-inline text-on-surface flex flex-col gap-space-md">
<div className="flex items-center justify-between text-on-surface-variant border-b border-surface-container-highest pb-space-sm">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="w-3 h-3 rounded-full bg-tertiary"></span>
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="ml-2 font-label-mono text-label-mono text-on-surface">nyayagen-security-audit --verbose</span>
</div>
<span className="font-label-mono text-label-mono text-secondary">STATUS: PASS (100%)</span>
</div>
<div className="flex flex-col gap-2 text-on-surface-variant text-[13px] leading-relaxed">
<div className="text-tertiary">[2025-04-12 09:14:02 IST] Initializing Sovereign Legal Cryptographic Vault...</div>
<div className="">• Client Partition: In-Chambers Encrypted HSM (FIPS 140-2 Level 3)</div>
<div className="">• Model Fine-Tuning Opt-Out: <span className="text-primary font-bold">HARD_ENFORCED (Retention = 0 Hours)</span></div>
<div className="">• India DPDP Act 2023 Section 8 Compliance: <span className="text-tertiary">VERIFIED</span></div>
<div className="">• Bar Council of India Rule 36 Firewall: <span className="text-tertiary">COMPLIANT (No solicitation vectors)</span></div>
<div className="">• Mutual Legal Assistance Treaty (MLAT) Quarantine: <span className="text-secondary">ENABLED (Mumbai ap-south-1)</span></div>
<div className="text-secondary">[SHA-256 Checksum] e7b809a471011d4e287ff27d2c384e56578ff068d8ef53d9e03</div>
</div>
<div className="bg-surface-container p-space-sm rounded flex items-center justify-between text-on-surface">
<span className="flex items-center gap-2 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-primary text-[18px]">security</span>
<span className="">Download Chambers Security &amp; BCI Whitepaper</span>
</span>
<Link className="px-space-sm py-1 bg-surface-container-high hover:bg-surface-bright rounded text-[12px] font-label-mono text-on-surface transition-colors" href="/">
                PDF (2.4 MB)
              </Link>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-gutter-desktop max-w-[1440px] mx-auto py-20">
<div className="relative overflow-hidden bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low rounded-2xl p-space-xl lg:p-24 shadow-2xl flex flex-col items-center text-center">

<div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
<span className="relative inline-flex items-center gap-1 font-label-mono text-label-mono text-tertiary uppercase tracking-widest mb-space-sm">
<span className="material-symbols-outlined text-[16px]">bolt</span> Modernize Indian Legal Operations
        </span>
<h2 className="relative font-display text-display text-on-surface max-w-3xl leading-tight">
          Equip Your Legal Operations with Sovereign Bharat AI.
        </h2>
<p className="relative font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-md leading-relaxed">
          Join 1,200+ General Counsels, Law Firms, and SMB Founders across India safeguarding contracts, accelerating arbitrations, and resolving tenancy disputes in minutes.
        </p>
<div className="relative flex flex-col sm:flex-row items-center justify-center gap-space-md mt-space-xl w-full sm:w-auto">
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-8 py-3.5 rounded-lg font-headline-sm text-body-md text-on-primary bg-primary-container hover:bg-primary shadow-[0_0_30px_rgba(128,131,255,0.45)] transition-all transform hover:-translate-y-0.5" data-path="get-started" href="/hub">
<span className="">Create Free Account</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
<Link className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-8 py-3.5 rounded-lg font-headline-sm text-body-md text-on-surface bg-surface-container-highest hover:bg-surface-bright transition-all shadow-sm" href="/">
<span className="material-symbols-outlined text-secondary text-[20px]">calendar_month</span>
<span className="">Schedule Chamber Walkthrough</span>
</Link>
</div>
<div className="relative mt-space-lg flex items-center justify-center gap-space-lg text-on-surface-variant font-label-mono text-label-mono">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-tertiary">check</span> Ready to deploy</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-secondary">shield</span> SOC2 Certified Facility</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">speed</span> 14-Day Free Tier</span>
</div>
</div>
</section>
</div>
</div>
</main><footer className="w-full bg-surface-container-lowest text-on-surface-variant py-space-xl"><div className="w-full px-gutter-desktop max-w-[1440px] mx-auto flex flex-col gap-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl"><div className="lg:col-span-2 flex flex-col gap-space-md"><div className="flex items-center gap-space-sm"><img alt="NyayaGen AI brand logo: An ultra-modern, luminous cyber-legal emblem combining the Ashoka Dharma chakra geometry, balanced scales of justice, and a glowing neural AI node in electric indigo (#6366F1) and cyan-blue on deep dark background.. Brand logo. - Primary color: #6366f1
- Font: merriweather
- Mode: dark
- Roundness: rounded-md
" className="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Xd3lMClB_LFNRnEx-M8uiuQECR43vMXVQ2mnEpaShofpp2gnszd9BON6ZyP-CXgof1CehIv8fPsg-6wYRWF6t1jHEjKhC04SUGQywyu5pS2VMs1-cUhfWh-aQ3oIp1sJkutHSp85Qa2acpqiChbLPZoIvPNaRPrswqDWdfUP1r1YqZKbfkAiAoJ9Hw6tDhPlB3j--nFuqW0Qe6zNFTtXvEJonXuTXN_HV8v0oDv41yQSAYNFQv4IP0fi0" /><span className="font-headline-sm text-headline-sm text-on-surface">NyayaGen.ai</span></div><p className="font-body-md text-body-md text-on-surface-variant max-w-sm">High-performance statutory intelligence, bilingual document discovery, and litigation workflow copilot engineered for Indian Advocates, Senior Counsels, and Corporate Legal Teams.</p><div className="flex items-center gap-space-sm text-on-surface-variant font-label-mono text-label-mono"><span className="inline-flex items-center gap-1 bg-surface-container px-space-xs py-0.5 rounded"><span className="material-symbols-outlined text-[14px] text-tertiary">shield</span>DPDP Act 2023 Compliant</span><span className="inline-flex items-center gap-1 bg-surface-container px-space-xs py-0.5 rounded"><span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>ISO/IEC 27001</span></div></div><div className="flex flex-col gap-space-sm"><span className="font-badge-label text-badge-label uppercase text-on-surface">Bare Acts &amp; Codes</span><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="statutory-frameworks" href="/">Bharatiya Nyaya Sanhita (BNS 2023)</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="statutory-frameworks" href="/">Bharatiya Sakshya Adhiniyam (BSA)</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="statutory-frameworks" href="/">Indian Contract Act (ICA 1872)</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="statutory-frameworks" href="/">MSME Development Act 2006</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="statutory-frameworks" href="/">Arbitration &amp; Conciliation Act</Link></div><div className="flex flex-col gap-space-sm"><span className="font-badge-label text-badge-label uppercase text-on-surface">Judicial &amp; Portals</span><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/">e-Courts National Portal</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/">Delhi Int. Arbitration Centre (DIAC)</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/">e-Daakhil Consumer Portal</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/">Supreme Court Precedents (SCI)</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/">High Courts Roster Tracker</Link></div><div className="flex flex-col gap-space-sm"><span className="font-badge-label text-badge-label uppercase text-on-surface">Legal &amp; Chambers</span><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="security-and-bar-compliance" href="/">Bar Council Rule 36 Statement</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="security-and-bar-compliance" href="/">Data Residency (Mumbai/Pune)</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="security-and-bar-compliance" href="/">Advocate-Client Privilege Whitepaper</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/">Terms of Service &amp; SLA</Link><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/">Privacy Policy</Link></div></div><div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs"><span className="font-label-mono text-label-mono uppercase text-secondary">Statutory &amp; Regulatory Disclaimer (Bar Council of India Rule 36)</span><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. NyayaGen.ai is an enterprise software platform and legal intelligence utility designed strictly for accredited legal professionals, corporate counsel, and judicial researchers. The information provided on this platform does not constitute legal advice, counsel representation, or solicitation of legal engagement.</p></div><div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-md"><span className="font-body-sm text-body-sm text-on-surface-variant">© 2025 NyayaGen Intelligence Systems Private Limited. Built with pride for Bharat.</span><div className="flex items-center gap-space-md"><span className="font-label-mono text-label-mono text-secondary">Latency: ~42ms (MUM-1)</span><span className="font-label-mono text-label-mono text-tertiary">Security Grade A+</span></div></div></div></footer>


    </>
  );
}
