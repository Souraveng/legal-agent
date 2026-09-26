"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDashboardData } from "@/app/actions";

export default function DisputeNavigator() {
  const [activeTab, setActiveTab] = useState("analyzer");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <>
      <div className="flex flex-col w-full pb-16 space-y-6">

<div className="relative overflow-hidden bg-surface-container rounded-xl p-space-lg shadow-xl">
<div className="absolute -right-16 -top-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute right-1/4 -bottom-20 w-64 h-64 bg-tertiary/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col space-y-1.5">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-mono text-label-mono px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold tracking-wider uppercase">
            Matter #{data?.documents?.[0]?.id?.substring(0, 8) || "TEN-BLR-2024"}
          </span>
<span className="font-label-mono text-label-mono px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold">
            Unlawful Deposit Retention
          </span>
<span className="font-label-mono text-label-mono text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-xs">location_on</span> Bengaluru Urban Jurisdiction (KA)
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Legal Rights &amp; Dispute Scenario Navigator
        </h1>
<p className="font-statute-quote text-statute-quote text-on-surface-variant max-w-3xl">
          Statutory Framework: Governed under <span className="text-secondary font-medium">Model Tenancy Act, 2021 (§11 &amp; §13)</span>, Karnataka Rent Rules, and the <span className="text-secondary font-medium">Consumer Protection Act, 2019 (§2(11) &amp; §35)</span>.
        </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-center">
<div className="flex flex-col items-end pr-3 border-r-0 lg:border-r-0">
<span className="font-label-mono text-label-mono text-outline">ESTIMATED RECOVERY INDEX</span>
<span className="font-headline-md text-headline-md text-tertiary font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-xl">trending_up</span> 91.4%
          </span>
</div>
<button className="h-10 px-space-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-headline-sm text-xs rounded-lg flex items-center gap-2 transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm text-primary">history_edu</span>
<span>Matter Audit Log</span>
</button>
</div>
</div>

<div className="mt-6 pt-6 grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low transition-all">
<div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary flex-shrink-0 shadow-md">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono text-outline">STEP 01</span>
<span className="font-label-mono text-label-mono text-tertiary">Verified</span>
</div>
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Fact &amp; Document Intake</span>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg bg-surface-bright shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all">
<div className="relative w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary flex-shrink-0">
<span className="font-label-mono text-label-mono font-bold">02</span>
<span className="animate-ping absolute inset-0 rounded-full bg-primary opacity-40"></span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono text-primary font-bold">STEP 02</span>
<span className="font-label-mono text-label-mono px-1.5 py-0.2 bg-primary/20 text-primary rounded font-semibold">Active Assessment</span>
</div>
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Statutory Rights &amp; Penal Damages</span>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low opacity-80 hover:opacity-100 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant flex-shrink-0">
<span className="font-label-mono text-label-mono">03</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-mono text-label-mono text-outline">STEP 03</span>
<span className="font-label-mono text-label-mono text-secondary">Dispatch Ready</span>
</div>
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Procedural Pathway &amp; Execution</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-4 flex flex-col space-y-space-md">

<div className="bg-surface-container-low rounded-xl p-space-md shadow-lg relative overflow-hidden">
<div className="flex items-center justify-between pb-3">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm text-tertiary">monetization_on</span>
            Withholding Calculation
          </span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-semibold">MTA §13 Clause</span>
</div>
<div className="space-y-4 pt-2">
<div className="bg-surface-container p-3.5 rounded-lg flex justify-between items-center">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Principal Withheld (Advance)</span>
<span className="font-label-mono text-label-mono text-outline">10-Month Rental Advance Deposit</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">₹{data?.exposure?.total?.toLocaleString('en-IN') || "2,40,000"}</span>
</div>

<div className="p-3.5 rounded-lg bg-surface-container space-y-2.5">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Notice Expiry Clock</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold animate-pulse">
                14 Days Overdue
              </span>
</div>

<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-secondary-container via-error to-error-container h-full rounded-full" ></div>
</div>
<div className="flex justify-between font-label-mono text-label-mono text-outline">
<span>Vacated: 14 Oct 2024</span>
<span className="text-error font-medium">Statutory Cutoff: 30 Oct 2024</span>
</div>
<div className="text-xs text-on-surface-variant font-body-sm pt-1">
              Statutory interest applied: <span className="text-tertiary font-label-mono text-label-mono">18.0% p.a.</span> compound interest under MTA Section 13(2).
            </div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container shadow-inner">
<div className="flex justify-between items-baseline mb-1">
<span className="font-body-md text-body-md font-semibold text-on-surface">Total Liquidated Claim</span>
<span className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight">₹{data?.exposure?.total ? (data.exposure.total + 43200).toLocaleString('en-IN') : "2,83,200"}</span>
</div>
<div className="space-y-1 font-label-mono text-label-mono text-outline text-xs">
<div className="flex justify-between">
<span>Principal Refund:</span>
<span className="text-on-surface">₹2,40,000</span>
</div>
<div className="flex justify-between">
<span>Accrued Statutory Interest:</span>
<span className="text-tertiary">+ ₹18,200</span>
</div>
<div className="flex justify-between">
<span>Mental Agony &amp; Legal Dispatch Costs:</span>
<span className="text-secondary">+ ₹25,000</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-lg">
<div className="flex items-center justify-between mb-3">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm text-secondary">fact_check</span>
            Evidentiary Vault (Section 65B Ready)
          </span>
<span className="font-label-mono text-label-mono text-tertiary">3 / 3 Authenticated</span>
</div>
<div className="space-y-2.5">

<div className="flex items-start gap-3 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-tertiary text-lg mt-0.5">verified</span>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-body-sm text-body-sm font-semibold text-on-surface truncate">Move-In Joint Handover Checklist</span>
<span className="font-label-mono text-label-mono text-outline truncate">Signed by Lessor • Dated 01 Nov 2023 • SHA-256 Valid</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-base">visibility</span>
</button>
</div>

<div className="flex items-start gap-3 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-tertiary text-lg mt-0.5">verified</span>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-body-sm text-body-sm font-semibold text-on-surface truncate">4K Move-Out Key-Return Video</span>
<span className="font-label-mono text-label-mono text-outline truncate">Geo-tagged Koramangala • Timestamp 14 Oct 2024</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-base">visibility</span>
</button>
</div>

<div className="flex items-start gap-3 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-tertiary text-lg mt-0.5">verified</span>
<div className="flex flex-col min-w-0 flex-1">
<span className="font-body-sm text-body-sm font-semibold text-on-surface truncate">BESCOM Final Meter NOC &amp; Receipt</span>
<span className="font-label-mono text-label-mono text-outline truncate">Zero Balance Cleared • Bill #BLR-99820-2024</span>
</div>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined text-base">visibility</span>
</button>
</div>
</div>

<div className="mt-3.5 p-2.5 rounded-lg bg-surface-container-high flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-secondary">encrypted</span>
<span className="font-label-mono text-label-mono text-on-surface-variant">Indian Evidence Act §65B Hash</span>
</div>
<span className="font-label-mono text-label-mono text-primary bg-surface-container px-2 py-0.5 rounded">e-Sign Certified</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-lg relative overflow-hidden">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0 text-primary">
<span className="material-symbols-outlined text-2xl">balance</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Supreme Court Doctrine</span>
<span className="font-label-mono text-label-mono text-outline">P. Prabhakaran v. P. Jayarajan (Security Deposits)</span>
</div>
</div>
<p className="mt-3 font-statute-quote text-statute-quote text-on-surface-variant">
          "Security deposit is held in a fiduciary capacity by the landlord and cannot be forfeited arbitrarily without itemized proof of structural damages."
        </p>
</div>
</div>

<div className="lg:col-span-8 flex flex-col space-y-space-md">

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">alt_route</span>
              Statutory Resolution Pathways
            </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Comparative litigation matrix trained on 14,200+ Bengaluru Urban residential tenancy disputes.
            </p>
</div>
<span className="font-label-mono text-label-mono text-outline uppercase self-start sm:self-auto">
            Algorithm Confidence: 98.2%
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">

<div className="group relative rounded-xl p-4 bg-surface-container hover:bg-surface-bright transition-all cursor-pointer shadow-md flex flex-col justify-between">
<div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-label-mono text-label-mono rounded-full font-bold shadow-md">
              82% RECOVERY
            </div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary">mark_email_read</span>
<span className="font-headline-sm text-xs font-bold text-on-surface">Pathway 01: Pre-Litigation</span>
</div>
<h3 className="font-headline-sm text-body-lg font-bold text-on-surface mb-1">
                Statutory Notice u/s 106 TPA &amp; MTA §13
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                India Post Speed Post with Acknowledgment Due (AD) + Instant Legal e-Notice via WhatsApp. Mandates 15-day cure window.
              </p>
</div>
<div className="space-y-2 pt-2 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Cure Timeline:</span>
<span className="text-on-surface font-semibold">15 Calendar Days</span>
</div>
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Direct Costs:</span>
<span className="text-tertiary font-semibold">₹185 INR (Postage)</span>
</div>
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Settlement Yield:</span>
<span className="text-primary font-semibold">Fast Settlement</span>
</div>
</div>
</div>

<div className="group relative rounded-xl p-4 bg-surface-container-high/60 hover:bg-surface-container-high transition-all cursor-pointer shadow-sm flex flex-col justify-between">
<div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-surface-container-highest text-secondary font-label-mono text-label-mono rounded-full font-semibold">
              74% RECOVERY
            </div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary">gavel</span>
<span className="font-headline-sm text-xs font-bold text-on-surface">Pathway 02: Consumer Forum</span>
</div>
<h3 className="font-headline-sm text-body-lg font-bold text-on-surface mb-1">
                e-Daakhil DCDRC Bengaluru Urban
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Filing under CPA 2019 for "Deficiency in Service" &amp; "Unfair Trade Practice". Claims punitive damages for mental agony.
              </p>
</div>
<div className="space-y-2 pt-2 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Adjudication:</span>
<span className="text-on-surface font-semibold">45 - 90 Days</span>
</div>
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Court Fee:</span>
<span className="text-tertiary font-semibold">₹500 INR (e-Challan)</span>
</div>
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Tribunal:</span>
<span className="text-secondary font-semibold">Shantinagar Forum</span>
</div>
</div>
</div>

<div className="group relative rounded-xl p-4 bg-surface-container-high/60 hover:bg-surface-container-high transition-all cursor-pointer shadow-sm flex flex-col justify-between">
<div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-surface-container-highest text-outline font-label-mono text-label-mono rounded-full font-semibold">
              65% RECOVERY
            </div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-outline">apartment</span>
<span className="font-headline-sm text-xs font-bold text-on-surface">Pathway 03: Rent Authority</span>
</div>
<h3 className="font-headline-sm text-body-lg font-bold text-on-surface mb-1">
                Karnataka Rent Authority Tribunal
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Summary recovery application before the Assistant Commissioner / Rent Authority under Chapter V of Model Tenancy Act.
              </p>
</div>
<div className="space-y-2 pt-2 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Hearing Cycle:</span>
<span className="text-on-surface font-semibold">60 - 120 Days</span>
</div>
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Statutory Fee:</span>
<span className="text-tertiary font-semibold">₹1,000 Stamp</span>
</div>
<div className="flex justify-between font-label-mono text-label-mono">
<span className="text-outline">Appellate:</span>
<span className="text-outline font-semibold">Rent Court / DJ</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg shadow-lg flex flex-col space-y-4">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-xl">description</span>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Pre-Litigation Statutory Demand Notice
                </h3>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-bold">
                  DRAFT V3.2 FINAL
                </span>
</div>
<span className="font-label-mono text-label-mono text-outline">
                Ref: NYAYA/BLR/2024/NOTICE-106 • Barcode Pre-Assigned: EK492019482IN
              </span>
</div>
</div>

<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-mono text-label-mono flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-sm">edit_note</span>
<span>Customize Paras</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-mono text-label-mono flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-sm">download</span>
<span>PDF / Word</span>
</button>
</div>
</div>

<div className="rounded-lg bg-surface-container-lowest p-6 shadow-inner relative overflow-hidden font-statute-quote text-statute-quote text-on-surface leading-relaxed">
<div className="absolute right-6 top-6 opacity-10 pointer-events-none">
<img className="w-36 h-36 object-contain" data-alt="High-resolution Indian judicial emblem watermark, gold and slate tones with Ashoka Dharma Chakra, subtle and semi-transparent" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDRtsa4Xn2bC4nGuDNX6ekkt75km0TBuW8yyrgLwfoKVfqG0Y_cD_sFptS8wgV94nIht3l5kPTYFxzWbrPmhsORtbBGBwON155ZQG0EaKmpH-iffevg9pHsuMkhEU3wPRWDrx1I9fRc3e5RvNLg1Unc8VNqD_jqu1VyN9dcfbGzpMWjci4TmD6CISs0qZTPSJ7SmF1rErpTBffmgv8HDauji1X74uI1a5CdAcf4MZuFCx5WFrk-o_K"/>
</div>
<div className="space-y-4 max-w-4xl relative z-10">

<div className="text-center pb-4 space-y-1">
<p className="font-label-mono text-label-mono tracking-widest uppercase text-outline">
                REGISTERED SPEED POST WITH ACKNOWLEDGEMENT DUE / LEGAL DEMAND
              </p>
<p className="font-body-md text-body-md font-bold text-on-surface">
                UNDER SECTION 106 OF TRANSFER OF PROPERTY ACT, 1882 READ WITH SECTION 13 OF MODEL TENANCY ACT, 2021
              </p>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant flex flex-col space-y-1">
<div><strong className="text-on-surface">TO:</strong> Sri. Raghavendra Rao (Lessor / Landlord), #402, 5th Main, 7th Cross, Koramangala 4th Block, Bengaluru - 560034.</div>
<div><strong className="text-on-surface">FROM:</strong> Smt. Ananya Roy, Advocate, Chamber #14, High Court Buildings, Bengaluru - 560001 (On behalf of Tenant: {data?.user?.name || "Client ID #4928"}).</div>
<div><strong className="text-on-surface">SUBJECT:</strong> Demand for immediate refund of ₹{data?.exposure?.total?.toLocaleString('en-IN') || "2,40,000"}/- withheld unlawfully towards Security Deposit along with 18% penal interest.</div>
</div>
<div className="font-statute-quote text-body-md text-on-surface-variant space-y-3 pt-2">
<p>
<strong className="text-on-surface font-label-mono text-label-mono">PARA 1:</strong> That our Client lawfully occupied the scheduled demised premises under the Registered Rental Agreement dated 01 November 2023, having dutifully discharged all recurring rental obligations without a singular day of default, while also tendering an aggregate refundable security advance of <span className="text-on-surface font-semibold">₹2,40,000/- (Rupees Two Lakhs Forty Thousand Only)</span>.
              </p>
<p>
<strong className="text-on-surface font-label-mono text-label-mono">PARA 2:</strong> That our Client formally vacated the scheduled premises on 14 October 2024 following the joint walkthrough inspection wherein no structural or tenantable damages were documented, confirmed by the BESCOM Zero Outstanding Clearance NOC Receipt #BLR-99820.
              </p>
<p className="bg-surface-container p-3 rounded-lg text-on-surface">
<strong className="text-primary font-label-mono text-label-mono">PARA 3 (STATUTORY WRIT):</strong> TAKE NOTICE that in terms of <span className="text-secondary font-semibold">Section 13(2) of the Model Tenancy Act</span>, you were legally obligated to refund the security deposit within thirty (30) days of vacating. Your failure to remit the advance constitutes an intentional breach of contract and an unlawful forfeiture. You are hereby called upon to pay <span className="text-tertiary font-semibold">₹2,83,200/-</span> (comprising principal advance + statutory penal interest @ 18% p.a. + legal fees) within <span className="text-error font-semibold">15 (Fifteen) Days</span> from the receipt of this notice, failing which legal proceedings under CPA 2019 and CPC Section 9 shall be instituted before the Hon'ble DCDRC Bengaluru Urban at your sole cost and consequence.
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">

<button className="h-12 px-4 bg-gradient-to-r from-primary-container to-inverse-primary hover:brightness-110 text-on-primary rounded-xl font-headline-sm text-xs font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all">
<span className="material-symbols-outlined text-lg">local_shipping</span>
<span>Dispatch Verified Speed Post</span>
</button>

<button className="h-12 px-4 bg-surface-container hover:bg-surface-bright text-on-surface rounded-xl font-headline-sm text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm">
<span className="material-symbols-outlined text-lg text-secondary">gavel</span>
<span>Export e-Daakhil Ready Petition</span>
</button>

<button className="h-12 px-4 bg-surface-container hover:bg-surface-bright text-on-surface rounded-xl font-headline-sm text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm">
<span className="material-symbols-outlined text-lg text-tertiary">chat</span>
<span>Send WhatsApp Legal Notice</span>
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md shadow-lg">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">insights</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Precedent &amp; Citation Benchmarking
            </h4>
</div>
<span className="font-label-mono text-label-mono text-outline">Real-time Concordance: SCC / Manupatra / e-Courts</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="p-3 bg-surface-container rounded-lg space-y-1.5 hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-tertiary font-bold">Good Law • Binding</span>
<span className="font-label-mono text-label-mono text-outline">2022 SCC OnLine Kar 1402</span>
</div>
<p className="font-body-sm text-body-sm font-semibold text-on-surface">
              M.K. Suresh v. Housing Development Corp
            </p>
<p className="font-statute-quote text-xs text-on-surface-variant line-clamp-2">
              Karnataka High Court ruled that routine repainting and general wear-and-tear cannot be deducted from residential security advances.
            </p>
</div>

<div className="p-3 bg-surface-container rounded-lg space-y-1.5 hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-tertiary font-bold">Good Law • Consumer</span>
<span className="font-label-mono text-label-mono text-outline">NCDRC Rev. Pet. 1109/2021</span>
</div>
<p className="font-body-sm text-body-sm font-semibold text-on-surface">
              Brigade Enclave Tenants Ass'n v. Lessor
            </p>
<p className="font-statute-quote text-xs text-on-surface-variant line-clamp-2">
              National Commission affirmed landlords acting as service providers under CPA 2019 are liable for exemplary damages for bad-faith deposit withholding.
            </p>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
