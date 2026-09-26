"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContractDiff() {
  const [activeTab, setActiveTab] = useState("analyzer");

  return (
    <>
      <div className="flex flex-col w-full pb-16 space-y-8">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl">
<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold tracking-wider uppercase">High Statutory Conflict</span>
<span className="font-label-mono text-label-mono text-outline">DIFF-INBOUND-09</span>
<span className="text-outline-variant">•</span>
<span className="font-label-mono text-label-mono text-primary font-medium">Standard Master Baseline v3.1 ⟷ Apex Tech Redline Rev-2</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Contract Diff &amp; Statutory Conflict Engine</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Automated cross-examination of inbound vendor modifications against Indian statutes, mandatory statutory ceilings, and Supreme Court precedent invalidations.
        </p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
<button className="h-9 px-space-md bg-surface-container text-on-surface hover:bg-surface-container-high font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 shadow-sm transition-all" id="recheck-btn">
<span className="material-symbols-outlined text-base">sync</span>
<span>Re-run BNS/ICA Check</span>
</button>
<button className="h-9 px-space-md bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 shadow-md hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-base">download</span>
<span>Redline (.docx)</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Total Clause Drift</span>
<span className="material-symbols-outlined text-primary text-xl">difference</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-display text-display font-bold text-on-surface">14</span>
<span className="font-body-md text-body-md text-outline">/ 24 clauses altered</span>
</div>
<div className="mt-3 w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-error">Statutory Redlines</span>
<span className="material-symbols-outlined text-error text-xl">gavel</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-display text-display font-bold text-error">2</span>
<span className="font-body-md text-body-md text-error">Fatal Conflicts (Void)</span>
</div>
<div className="mt-3 flex items-center gap-1.5">
<span className="font-label-mono text-label-mono text-error font-medium">Sec 27 ICA • MSMED §15</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Commercial Exposure</span>
<span className="material-symbols-outlined text-secondary text-xl">trending_up</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-display text-display font-bold text-secondary">+38%</span>
<span className="font-body-md text-body-md text-outline">Liability &amp; Pen. Risk</span>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="font-label-mono text-label-mono text-secondary-fixed bg-surface-container-lowest px-1.5 py-0.5 rounded">₹18.4L Uncapped Exposure</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex items-center justify-between group hover:bg-surface-container-high transition-all">
<div className="flex flex-col justify-between h-full">
<div>
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Safety Health Index</span>
<div className="mt-1">
<span className="font-headline-lg text-headline-lg text-error font-bold">44</span>
<span className="font-label-mono text-label-mono text-outline">/ 100</span>
</div>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold w-fit">Unacceptable Draft</span>
</div>

<div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
<svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-lowest stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3.5"></path>
<path className="text-error stroke-current stroke-dasharray-44" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="44, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-mono text-label-mono text-on-surface font-semibold">44%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-8 flex flex-col space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary">flaky</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Substantive Clause Variations (3 Highlighted of 14)</h2>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono text-outline">Filter:</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-medium cursor-pointer">Statutory Violations (2)</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline cursor-pointer hover:text-on-surface">Commercial (7)</span>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">

<div className="flex flex-wrap items-center justify-between gap-2 pb-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-error"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Clause 8.1 — Post-Termination Restrictive Covenant &amp; Non-Compete</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">CRITICAL VOID</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-medium">Sec 27 Indian Contract Act</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Standard Firm Baseline</span>
<span className="material-symbols-outlined text-outline text-base">check_circle</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface-variant italic">
              "During the active term and for a period of <span className="text-tertiary font-semibold not-italic">6 months</span> immediately following termination, contractor agrees not to solicit key technical staff within the municipal limits of <span className="text-tertiary font-semibold not-italic">Bengaluru Urban</span>."
            </p>
<span className="font-label-mono text-label-mono text-tertiary block">Permissible non-solicitation scope</span>
</div>

<div className="rounded-lg bg-surface-container-lowest p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-error">Inbound Vendor Redline</span>
<span className="material-symbols-outlined text-error text-base">cancel</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface italic">
              "For a period of <span className="bg-error-container/40 text-error font-semibold not-italic px-1 rounded">24 months post-termination</span>, contractor and affiliates shall not directly or indirectly engage in or solicit any competitive entity across <span className="bg-error-container/40 text-error font-semibold not-italic px-1 rounded">the entirety of India</span>."
            </p>
<span className="font-label-mono text-label-mono text-error block">Absolute restraint of lawful profession</span>
</div>
</div>

<div className="rounded-lg bg-surface-container-high p-space-md space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">balance</span>
<span className="font-label-mono text-label-mono text-primary font-semibold uppercase tracking-wider">Statutory Precedent Breakdown • Supreme Court of India</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Under <strong className="text-on-surface">Section 27 of the Indian Contract Act, 1872</strong>, any agreement restraining anyone from exercising a lawful profession, trade, or business is <span className="text-error font-semibold">void ab initio</span>. The Supreme Court in <strong className="text-secondary">Percept D'Mark (India) Pvt. Ltd. v. Zaheer Khan (2006) 4 SCC 227</strong> and <strong className="text-secondary">Superintendence Co. of India (P) Ltd. v. Krishan Murgai (1981) 2 SCC 246</strong> firmly laid down that the doctrine of reasonable restraint has no application post-termination under Indian jurisprudence.
          </p>
<div className="pt-2 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline">Risk: Unenforceable + Costs Exposure</span>
</div>
<button className="h-8 px-space-md bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-mono text-label-mono font-semibold rounded flex items-center gap-1.5 shadow hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-sm">edit_note</span>
<span>Apply Supreme Court Precedent Strikeout</span>
</button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">

<div className="flex flex-wrap items-center justify-between gap-2 pb-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Clause 4.3 — Invoice Clearance Cycle &amp; Credit Window</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">STATUTORY CEILING CLASH</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-secondary font-medium">MSMED Act 2006 (§15/16)</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Standard Firm Baseline</span>
<span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface-variant italic">
              "Payment shall be discharged within <span className="text-tertiary font-semibold not-italic">30 days</span> from the date of submission of valid Tax Invoice accompanied by acceptance certification."
            </p>
<span className="font-label-mono text-label-mono text-tertiary block">Fully compliant with Micro &amp; Small Enterprises provisions</span>
</div>

<div className="rounded-lg bg-surface-container-lowest p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">Inbound Vendor Redline</span>
<span className="material-symbols-outlined text-secondary text-base">warning</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface italic">
              "Customer shall remit payment within <span className="bg-secondary-container/40 text-secondary font-semibold not-italic px-1 rounded">Net 75 days</span> following final QA acceptance, with no interest accrual on delayed intervals."
            </p>
<span className="font-label-mono text-label-mono text-secondary block">Exceeds 45-day statutory maximum ceiling</span>
</div>
</div>

<div className="rounded-lg bg-surface-container-high p-space-md space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">alarm_on</span>
<span className="font-label-mono text-label-mono text-secondary font-semibold uppercase tracking-wider">Mandatory MSMED Section 15 &amp; Section 16 Violation</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Under <strong className="text-on-surface">Section 15 of the MSMED Act, 2006</strong>, the agreed credit period between parties can in no circumstance exceed <strong className="text-tertiary">45 days</strong>. Any clause attempting to contract out of this is overridden by law. Under <strong className="text-on-surface">Section 16</strong>, default attracts mandatory compound interest at <strong className="text-error">3x the RBI Bank Rate</strong> with monthly rests, which is non-waivable.
          </p>
<div className="pt-2 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline">Liability: 3x Compound Interest Auto-Trigger</span>
</div>
<button className="h-8 px-space-md bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold rounded flex items-center gap-1.5 shadow hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-sm">auto_fix_high</span>
<span>Auto-Restore 45-Day Statutory Cap</span>
</button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">
<div className="flex flex-wrap items-center justify-between gap-2 pb-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-tertiary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Clause 12.2 — Intellectual Property &amp; Custom Work Product Assignment</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-semibold">REVERSIBLE RISK</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-medium">Sec 19(5) Copyright Act</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Standard Firm Baseline</span>
<p className="font-statute-quote text-statute-quote text-on-surface-variant italic">
              "Vendor unconditionally assigns all worldwide rights in perpetuity, explicitly waiving Section 19(4) &amp; Section 19(5) reversionary triggers under the Indian Copyright Act, 1957."
            </p>
</div>
<div className="rounded-lg bg-surface-container-lowest p-space-md space-y-2">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Inbound Vendor Redline</span>
<p className="font-statute-quote text-statute-quote text-on-surface italic">
              "Vendor grants Customer an exclusive license for deliverables. All perpetual assignment language struck, omitting statutory waiver clauses."
            </p>
</div>
</div>
<div className="rounded-lg bg-surface-container-high p-space-md space-y-2">
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Omission of explicit waiver triggers statutory reversion under <strong className="text-on-surface">Section 19(5) of the Copyright Act, 1957</strong>: if the assignee does not exercise rights within 1 year, assignment lapses back to the original author/vendor.
          </p>
<div className="pt-1 flex justify-end">
<button className="h-8 px-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-mono text-label-mono rounded flex items-center gap-1.5 transition-all">
<span className="material-symbols-outlined text-sm">rebase</span>
<span>Insert Mandatory Sec 19 Waiver Rider</span>
</button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col space-y-6">

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">account_tree</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Statutory Conflict Heatmap</h3>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-low text-tertiary">Real-time</span>
</div>

<div className="rounded-lg bg-surface-container-lowest p-space-md flex flex-col items-center justify-center relative">
<svg className="w-full h-40" fill="none" viewBox="0 0 280 140">

<circle cx="140" cy="70" fill="#31353f" r="24" stroke="none"></circle>
<text fill="#dfe2ef" font-family="Inter" font-size="9" font-weight="600" text-anchor="middle" x="140" y="73">Draft v2</text>

<line stroke="#ffb4ab" stroke-dasharray="3 3" strokeWidth="2" x1="140" x2="40" y1="70" y2="35"></line>
<line stroke="#adc6ff" strokeWidth="2" x1="140" x2="240" y1="70" y2="35"></line>
<line stroke="#4edea3" strokeWidth="2" x1="140" x2="140" y1="70" y2="125"></line>

<circle cx="40" cy="35" fill="#93000a" r="18"></circle>
<text fill="#ffdad6" font-family="JetBrains Mono" font-size="8" font-weight="700" text-anchor="middle" x="40" y="38">ICA §27</text>

<circle cx="240" cy="35" fill="#0566d9" r="18"></circle>
<text fill="#e6ecff" font-family="JetBrains Mono" font-size="8" font-weight="700" text-anchor="middle" x="240" y="38">MSME</text>

<circle cx="140" cy="125" fill="#00885d" r="14"></circle>
<text fill="#dfe2ef" font-family="JetBrains Mono" font-size="7" font-weight="600" text-anchor="middle" x="140" y="128">© §19</text>
</svg>
<div className="w-full flex items-center justify-between text-center pt-2">
<span className="font-label-mono text-label-mono text-error">1 Fatal Invalidation</span>
<span className="font-label-mono text-label-mono text-secondary">1 Overriding Ceiling</span>
<span className="font-label-mono text-label-mono text-tertiary">1 Remediable</span>
</div>
</div>
<div className="space-y-3 pt-2">
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant font-body-sm">Indian Contract Act, 1872 Alignment</span>
<span className="font-label-mono text-error font-semibold">22% (Critical)</span>
</div>
<div className="w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-error h-full rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant font-body-sm">Commercial Courts Act (Sec 12A PMM)</span>
<span className="font-label-mono text-tertiary font-semibold">100% Compliant</span>
</div>
<div className="w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant font-body-sm">Arbitration &amp; Conciliation Act, 1996</span>
<span className="font-label-mono text-secondary font-semibold">68% Medium</span>
</div>
<div className="w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" ></div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Binding Precedent Authority</span>
<span className="material-symbols-outlined text-outline text-lg">local_library</span>
</div>

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-xs font-semibold text-on-surface">Percept D'Mark v. Zaheer Khan</span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-semibold">Good Law</span>
</div>
<p className="font-label-mono text-label-mono text-primary">(2006) 4 SCC 227</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Under Section 27, any covenant operating post-termination is void. No rule of reasonableness applies.
          </p>
</div>

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-xs font-semibold text-on-surface">Silpi Industries v. KSRTC</span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">Overriding</span>
</div>
<p className="font-label-mono text-label-mono text-primary">2021 SCC OnLine SC 439</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            MSMED provisions override general contract clauses under Section 24 non-obstante clause.
          </p>
</div>

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-xs font-semibold text-on-surface">Niranjan Shankar Golikari</span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-surface-container text-outline font-semibold">Distinguished</span>
</div>
<p className="font-label-mono text-label-mono text-primary">AIR 1967 SC 1098</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Restraint during employment term is valid; post-employment covenants remain strictly barred.
          </p>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-md space-y-3">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
            AT
          </div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface text-sm truncate">Apex Tech Enterprises LLP</span>
<span className="font-label-mono text-label-mono text-outline truncate">CIN/LLPIN: AAE-9482 • Bengaluru, KA</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between font-label-mono text-label-mono text-outline">
<span>Enterprise MSME Status:</span>
<span className="text-tertiary font-medium">Registered (UDYAM-KR-03-0021)</span>
</div>
<div className="flex items-center justify-between font-label-mono text-label-mono text-outline">
<span>Standard Deviation Rate:</span>
<span className="text-error font-medium">58.3% Higher than Median</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-lg shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined">bolt</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-sm">Batch Inbound Playbook Remediation</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Auto-substitute void provisions with High Court-tested fallback language before negotiation dispatch.
        </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0 w-full md:w-auto justify-end">
<button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-base text-outline">assignment_ind</span>
<span>Escalate to Senior Partner</span>
</button>
<button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-base text-primary">menu_book</span>
<span>Negotiation Playbook (.pdf)</span>
</button>
<button className="h-9 px-space-md bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 shadow-md hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-base">send</span>
<span>Dispatch Redline Package</span>
</button>
</div>
</div>
</div>

    </>
  );
}
