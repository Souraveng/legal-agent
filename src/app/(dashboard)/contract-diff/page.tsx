"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDashboardData } from "@/app/actions";

export default function ContractDiff() {
  const [activeTab, setActiveTab] = useState("analyzer");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full pb-16 space-y-8">

<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl">
<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
<div className="space-y-1.5">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold tracking-wider uppercase">High Risk Changes</span>
<span className="font-label-mono text-label-mono text-outline">{data?.documents?.[0]?.id || "DIFF-LEASE-09"}</span>
<span className="text-outline-variant">•</span>
<span className="font-label-mono text-label-mono text-primary font-medium">{data?.documents?.[0]?.title || "Standard Lease ⟷ Your New Lease"}</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Document Comparison Engine</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Easily compare what changed between a standard agreement and the one you were asked to sign. We highlight unfair terms and hidden legal risks.
        </p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
<button className="h-9 px-space-md bg-surface-container text-on-surface hover:bg-surface-container-high font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 shadow-sm transition-all" id="recheck-btn">
<span className="material-symbols-outlined text-base">sync</span>
<span>Re-run Risk Check</span>
</button>
<button className="h-9 px-space-md bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 shadow-md hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-base">download</span>
<span>Export Changes</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Total Changes</span>
<span className="material-symbols-outlined text-primary text-xl">difference</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-display text-display font-bold text-on-surface">3</span>
<span className="font-body-md text-body-md text-outline">/ 24 clauses altered</span>
</div>
<div className="mt-3 w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" ></div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-error">Legal Concerns</span>
<span className="material-symbols-outlined text-error text-xl">gavel</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-display text-display font-bold text-error">2</span>
<span className="font-body-md text-body-md text-error">Major Concerns</span>
</div>
<div className="mt-3 flex items-center gap-1.5">
<span className="font-label-mono text-label-mono text-error font-medium">Rent Control Act • Consumer Law</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between group hover:bg-surface-container-high transition-all">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Financial Risk</span>
<span className="material-symbols-outlined text-secondary text-xl">trending_up</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-display text-display font-bold text-secondary">HIGH</span>
<span className="font-body-md text-body-md text-outline">Liability &amp; Penalty Risk</span>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="font-label-mono text-label-mono text-secondary-fixed bg-surface-container-lowest px-1.5 py-0.5 rounded">Uncapped Exposure</span>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container p-space-md shadow-md flex items-center justify-between group hover:bg-surface-container-high transition-all">
<div className="flex flex-col justify-between h-full">
<div>
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Document Safety Score</span>
<div className="mt-1">
<span className="font-headline-lg text-headline-lg text-error font-bold">44</span>
<span className="font-label-mono text-label-mono text-outline">/ 100</span>
</div>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold w-fit">Unsafe Document</span>
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
<h2 className="font-headline-sm text-headline-sm text-on-surface">Substantive Clause Variations (3 Highlighted of 3)</h2>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono text-outline">Filter by:</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-medium cursor-pointer">Legal Concerns (2)</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline cursor-pointer hover:text-on-surface">Financial (1)</span>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">

<div className="flex flex-wrap items-center justify-between gap-2 pb-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-error"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Clause 8.1 — Unfair Security Deposit Withholding</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">UNFAIR</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-medium">Consumer Protection</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Standard Lease Terms</span>
<span className="material-symbols-outlined text-outline text-base">check_circle</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface-variant italic">
              "Landlord will return the security deposit within <span className="text-tertiary font-semibold not-italic">30 days</span> of moving out, minus reasonable deductions for actual damage."
            </p>
<span className="font-label-mono text-label-mono text-tertiary block">Fair return terms</span>
</div>

<div className="rounded-lg bg-surface-container-lowest p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-error">Your New Lease</span>
<span className="material-symbols-outlined text-error text-base">cancel</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface italic">
              "Landlord may keep the entire security deposit for <span className="bg-error-container/40 text-error font-semibold not-italic px-1 rounded">normal wear and tear or repainting</span> without providing receipts."
            </p>
<span className="font-label-mono text-label-mono text-error block">Unfair deduction of deposit</span>
</div>
</div>

<div className="rounded-lg bg-surface-container-high p-space-md space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">balance</span>
<span className="font-label-mono text-label-mono text-primary font-semibold uppercase tracking-wider">Legal Breakdown</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Generally, the law does not allow landlords to deduct from the security deposit for normal wear and tear. You are only responsible for actual damage beyond normal use. If the landlord wishes to deduct money for repairs, they typically must provide proof of the actual cost.
          </p>
<div className="pt-2 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline">Risk: Financial Loss</span>
</div>
<button className="h-8 px-space-md bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-mono text-label-mono font-semibold rounded flex items-center gap-1.5 shadow hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-sm">edit_note</span>
<span>Apply Fair Standard Term</span>
</button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">

<div className="flex flex-wrap items-center justify-between gap-2 pb-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Clause 4.3 — Notice Period</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">UNFAIR TERM</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-secondary font-medium">Standard Custom</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Standard Lease Terms</span>
<span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface-variant italic">
              "The Tenant must provide <span className="text-tertiary font-semibold not-italic">30 days</span> notice before vacating the property."
            </p>
<span className="font-label-mono text-label-mono text-tertiary block">Standard notice period</span>
</div>

<div className="rounded-lg bg-surface-container-lowest p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">Your New Lease</span>
<span className="material-symbols-outlined text-secondary text-base">warning</span>
</div>
<p className="font-statute-quote text-statute-quote text-on-surface italic">
              "The Tenant must provide <span className="bg-secondary-container/40 text-secondary font-semibold not-italic px-1 rounded">90 days</span> notice before vacating the property or forfeit the deposit."
            </p>
<span className="font-label-mono text-label-mono text-secondary block">Unusually long notice period</span>
</div>
</div>

<div className="rounded-lg bg-surface-container-high p-space-md space-y-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">alarm_on</span>
<span className="font-label-mono text-label-mono text-secondary font-semibold uppercase tracking-wider">Unfair Penalty Warning</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            A 90-day notice period is highly unusual for a standard apartment lease and severely restricts your ability to move. Furthermore, automatically forfeiting the entire deposit for breaking this rule is likely an unfair penalty that courts may not enforce.
          </p>
<div className="pt-2 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline">Liability: Loss of Deposit</span>
</div>
<button className="h-8 px-space-md bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold rounded flex items-center gap-1.5 shadow hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-sm">auto_fix_high</span>
<span>Suggest 30-Day Notice Period</span>
</button>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">
<div className="flex flex-wrap items-center justify-between gap-2 pb-2">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-tertiary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Clause 12.2 — Property Maintenance</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-semibold">MAINTENANCE RISK</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-medium">Maintenance Duties</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Standard Lease Terms</span>
<p className="font-statute-quote text-statute-quote text-on-surface-variant italic">
              "Landlord is responsible for all major structural repairs, plumbing, and electrical issues not caused by tenant negligence."
            </p>
</div>
<div className="rounded-lg bg-surface-container-lowest p-space-md space-y-2">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Your New Lease</span>
<p className="font-statute-quote text-statute-quote text-on-surface italic">
              "Tenant is responsible for all repairs, maintenance, and damages to the property regardless of cause."
            </p>
</div>
</div>
<div className="rounded-lg bg-surface-container-high p-space-md space-y-2">
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            This clause attempts to shift all maintenance responsibilities to you, even for things like a burst pipe or a broken water heater that should be the landlord's responsibility.
          </p>
<div className="pt-1 flex justify-end">
<button className="h-8 px-space-md bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-mono text-label-mono rounded flex items-center gap-1.5 transition-all">
<span className="material-symbols-outlined text-sm">rebase</span>
<span>Insert Standard Maintenance Clause</span>
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
<svg className="w-full h-40" fill="none" viewBox="0 0 280 30">

<circle cx="30" cy="70" fill="#31353f" r="24" stroke="none"></circle>
<text fill="#dfe2ef" font-family="Inter" font-size="9" font-weight="600" text-anchor="middle" x="30" y="73">Draft v2</text>

<line stroke="#ffb4ab" stroke-dasharray="3 3" strokeWidth="2" x1="30" x2="40" y1="70" y2="35"></line>
<line stroke="#adc6ff" strokeWidth="2" x1="30" x2="240" y1="70" y2="35"></line>
<line stroke="#4edea3" strokeWidth="2" x1="30" x2="30" y1="70" y2="125"></line>

<circle cx="40" cy="35" fill="#93000a" r="18"></circle>
<text fill="#ffdad6" font-family="JetBrains Mono" font-size="8" font-weight="700" text-anchor="middle" x="40" y="38">ICA §27</text>

<circle cx="240" cy="35" fill="#0566d9" r="18"></circle>
<text fill="#e6ecff" font-family="JetBrains Mono" font-size="8" font-weight="700" text-anchor="middle" x="240" y="38">MSME</text>

<circle cx="30" cy="125" fill="#00885d" r="3"></circle>
<text fill="#dfe2ef" font-family="JetBrains Mono" font-size="7" font-weight="600" text-anchor="middle" x="30" y="128">© §19</text>
</svg>
<div className="w-full flex items-center justify-between text-center pt-2">
<span className="font-label-mono text-label-mono text-error">1 Fatal Invalidation</span>
<span className="font-label-mono text-label-mono text-secondary">1 Overriding Ceiling</span>
<span className="font-label-mono text-label-mono text-tertiary">1 Remediable</span>
</div>
</div>
<div className="space-y-3 pt-2">
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant font-body-sm">Fairness Alignment</span>
<span className="font-label-mono text-error font-semibold">22% (Critical)</span>
</div>
<div className="w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-error h-full rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant font-body-sm">Consumer Protection</span>
<span className="font-label-mono text-tertiary font-semibold">100% Compliant</span>
</div>
<div className="w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-tertiary h-full rounded-full" ></div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant font-body-sm">Rent Control Rules</span>
<span className="font-label-mono text-secondary font-semibold">68% Medium</span>
</div>
<div className="w-full bg-surface-container-lowest rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" ></div>
</div>
</div>
</div>

<div className="rounded-xl bg-surface-container p-space-lg shadow-md space-y-4">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono uppercase tracking-wider text-outline">Related Legal Rules</span>
<span className="material-symbols-outlined text-outline text-lg">local_library</span>
</div>

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-xs font-semibold text-on-surface">Unfair Deductions</span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-semibold">Good Law</span>
</div>
<p className="font-label-mono text-label-mono text-primary">Consumer Court Rules</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Landlords cannot make arbitrary deductions from the security deposit without providing valid proof of expenses.
          </p>
</div>

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-xs font-semibold text-on-surface">Late Fees as Penalties</span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">Overriding</span>
</div>
<p className="font-label-mono text-label-mono text-primary">Indian Contract Act</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Late fees must be a reasonable estimate of actual loss, not a punitive measure to force compliance.
          </p>
</div>

<div className="rounded-lg bg-surface-container-low p-space-md space-y-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-xs font-semibold text-on-surface">Eviction Notices</span>
<span className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-surface-container text-outline font-semibold">Distinguished</span>
</div>
<p className="font-label-mono text-label-mono text-primary">Rent Control Rules</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            A landlord cannot evict a tenant without serving a proper legal notice giving them time to respond or vacate.
          </p>
</div>
</div>

<div className="rounded-xl bg-surface-container-low p-space-md shadow-md space-y-3">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary font-bold">
            {data?.user?.name ? data.user.name.substring(0, 2).toUpperCase() : "AT"}
          </div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface text-sm truncate">{data?.user?.name || "User"}</span>
<span className="font-label-mono text-label-mono text-outline truncate">{data?.user?.email || "user@example.com"}</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between font-label-mono text-label-mono text-outline">
<span>User Verification:</span>
<span className="text-tertiary font-medium">Verified Email</span>
</div>
<div className="flex items-center justify-between font-label-mono text-label-mono text-outline">
<span>Document Deviation:</span>
<span className="text-error font-medium">Unusually High</span>
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
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold text-sm">Suggest Fairer Terms</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Automatically replace unfair terms with standard, fair language that protects your rights.
        </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0 w-full md:w-auto justify-end">
<button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-base text-outline">assignment_ind</span>
<span>Consult a Lawyer</span>
</button>
<button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 transition-all">
<span className="material-symbols-outlined text-base text-primary">menu_book</span>
<span>Download Fair Lease (.pdf)</span>
</button>
<button className="h-9 px-space-md bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-headline-sm text-xs font-semibold rounded-lg flex items-center gap-2 shadow-md hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-base">send</span>
<span>Send Suggestions to Landlord</span>
</button>
</div>
</div>
</div>

    </>
  );
}
