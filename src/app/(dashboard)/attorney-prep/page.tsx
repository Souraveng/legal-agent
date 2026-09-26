"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AttorneyPrep() {
  const [activeTab, setActiveTab] = useState("analyzer");

  return (
    <>
      <div className="flex flex-col w-full pb-16">

<div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-2">
<div className="flex items-center gap-2 flex-wrap">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container-high">
<span className="material-symbols-outlined text-xs text-primary">folder_open</span>
<span className="font-label-mono text-label-mono text-on-surface">COMMERCIAL LITIGATION</span>
</div>
<span className="text-outline-variant font-label-mono text-xs">/</span>
<span className="font-label-mono text-label-mono text-outline">P&amp;H-HC / GURUGRAM BENCH</span>
<span className="text-outline-variant font-label-mono text-xs">/</span>
<span className="font-label-mono text-label-mono text-tertiary font-semibold flex items-center gap-1">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-tertiary"></span>
</span>
        READY FOR COUNSEL TABLE
      </span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
<span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
<span>SHA-256: 8f42..c9b0 [VERIFIED TAMPER-PROOF]</span>
</div>
<div className="px-2.5 py-1 rounded-lg bg-surface-container-low text-outline font-label-mono text-label-mono">
        BCI COMPLIANT DOCKET
      </div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low p-6 mb-6 shadow-xl">

<div className="absolute -right-16 -top-16 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute right-96 -bottom-20 w-64 h-64 bg-tertiary/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div className="space-y-2 max-w-3xl">
<div className="flex items-center gap-3">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-primary text-on-primary font-bold tracking-wider">
            DOSSIER #BKN-9921
          </span>
<span className="font-label-mono text-label-mono text-outline">UPDATED 14 MINS AGO BY AI SENIOR CITATOR</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Commercial Lease CAM Escalation &amp; Surcharge Controversy
        </h1>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base text-outline">apartment</span>
<span>Counterparty: <strong className="text-on-surface font-medium">DLF CyberCity Commercial Holdings Ltd (Gurugram, HR)</strong></span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base text-error">gavel</span>
<span>Disputed Amount: <strong className="text-error font-medium">₹36,50,000 INR</strong></span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-base text-tertiary">balance</span>
<span>Designated Forum: <strong className="text-on-surface font-medium">DIAC (Delhi International Arbitration Centre)</strong></span>
</div>
</div>
</div>

<div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0">
<button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-headline-sm text-xs font-semibold shadow-[0_0_20px_rgba(128,131,255,0.35)] hover:brightness-110 flex items-center justify-center gap-2 transition-all" id="downloadBriefBtn">
<span className="material-symbols-outlined text-base">picture_as_pdf</span>
<span>Download 2-Page Brief (PDF)</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface font-headline-sm text-xs hover:bg-surface-bright flex items-center justify-center gap-2 transition-colors" id="shareLinkBtn">
<span className="material-symbols-outlined text-base text-primary">link</span>
<span>One-Time Link to Advocate</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 bg-surface-container-lowest/60 backdrop-blur-md rounded-lg p-4">
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Counsel Readiness Score</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-tertiary font-bold">96%</span>
<span className="font-label-mono text-label-mono text-tertiary flex items-center">
<span className="material-symbols-outlined text-xs">arrow_upward</span>+8%
          </span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full" ></div>
</div>
</div>
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Advocate Hours Conserved</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary font-bold">2.5 Hrs</span>
<span className="font-label-mono text-label-mono text-outline-variant">Billable time</span>
</div>
<p className="font-label-mono text-label-mono text-tertiary">~₹35,000 INR Client Savings</p>
</div>
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Precedent Alignment</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-secondary font-bold">High (3/3)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">P&amp;H High Court &amp; Supreme Court</p>
</div>
<div className="space-y-1">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Impending Deadlines</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-error font-bold">04 Days</span>
<span className="font-label-mono text-label-mono text-error">Critical</span>
</div>
<p className="font-body-sm text-body-sm text-outline truncate">Sec 12A Mediation Cutoff: 28 Oct</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-6">

<section className="rounded-xl bg-surface-container p-6 shadow-md relative">
<div className="flex items-center justify-between pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">timeline</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Executive Case Fact Sheet &amp; Chronology</h2>
<span className="font-label-mono text-label-mono text-outline">CERTIFIED FACT MATRIX • DISPUTED EXPENSES (CAM) AUDIT</span>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-tertiary font-label-mono text-label-mono font-medium">
            5 Events Indexed
          </span>
</div>
<div className="text-on-surface-variant font-body-md text-body-md mb-6 leading-relaxed">
          The Lessee entered into a 5-year Registered Commercial Lease Deed for Suite #704, DLF CyberCity Tower-B. In Q3 2023, the Lessor unilaterally levied an extra-contractual Common Area Maintenance (CAM) differential surcharge totaling <span className="text-on-surface font-semibold">₹36,50,000 INR</span> retroactively citing inflated HVAC utility tariffs, in direct contravention of Section 73 of the Indian Contract Act 1872 and Clause 14.2 of the registered lease.
        </div>

<div className="space-y-4 relative pl-4">
<div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-surface-variant"></div>

<div className="relative pl-6">
<div className="absolute -left-1 top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container"></div>
<div className="flex flex-wrap items-baseline justify-between gap-2">
<span className="font-label-mono text-label-mono text-primary font-bold">15 JAN 2021</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-low text-outline">EXHIBIT A-1</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Execution &amp; Registration of Commercial Lease Deed</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Registered at Sub-Registrar Office, Wazirabad, Gurugram. Base rent fixed at ₹4,10,000/month with CAM capped at ₹18.50/sq.ft. with mandatory prior mutual audit consent before escalation.
            </p>
</div>

<div className="relative pl-6">
<div className="absolute -left-1 top-1.5 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-surface-container"></div>
<div className="flex flex-wrap items-baseline justify-between gap-2">
<span className="font-label-mono text-label-mono text-outline font-bold">12 AUG 2023</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-low text-outline">EXHIBIT B-4</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Unilateral Demand Notice for HVAC &amp; Common Utilities</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Lessor issues supplementary invoice demanding ₹36,50,000 INR retroactively for 18 months without providing audited electricity ledger or building management expense breakdown.
            </p>
</div>

<div className="relative pl-6">
<div className="absolute -left-1 top-1.5 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-surface-container"></div>
<div className="flex flex-wrap items-baseline justify-between gap-2">
<span className="font-label-mono text-label-mono text-outline font-bold">29 SEP 2023</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-low text-outline">EXHIBIT C-2</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Formal Objection &amp; Independent CA Audit Invocation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Lessee served legal objection through Adv. Roy, tendering base rent while withholding disputed surcharge pending joint chartered accountant reconciliation under Clause 14.3.
            </p>
</div>

<div className="relative pl-6">
<div className="absolute -left-1 top-1.5 w-3.5 h-3.5 rounded-full bg-error ring-4 ring-surface-container"></div>
<div className="flex flex-wrap items-baseline justify-between gap-2">
<span className="font-label-mono text-label-mono text-error font-bold">04 OCT 2023</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-low text-error">THREAT OF DISCONNECTION</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Disconnection Threat Notice Issued</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Lessor threatened imminent disconnection of centralized HVAC, freight elevator access, and essential utilities within 7 working days unless full disputed arrears are deposited.
            </p>
</div>

<div className="relative pl-6">
<div className="absolute -left-1 top-1.5 w-3.5 h-3.5 rounded-full bg-tertiary ring-4 ring-surface-container"></div>
<div className="flex flex-wrap items-baseline justify-between gap-2">
<span className="font-label-mono text-label-mono text-tertiary font-bold">18 OCT 2023 (CURRENT STAGE)</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-low text-tertiary">PRE-INSTITUTION NOTICE</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Section 12A Commercial Courts Act Notice Dispatched</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Pre-institution mediation notice registered with Gurugram DLSA. Section 9 Petition for urgent interim injunction against essential utility disconnection concurrently finalized for Senior Advocate sign-off.
            </p>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container p-6 shadow-md">
<div className="flex items-center justify-between pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-secondary-container/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-lg">psychology</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Pre-Formulated Tactical Questions for Senior Advocate</h2>
<span className="font-label-mono text-label-mono text-outline">STRATEGIC COUNSEL AGENDA • HIGH COURT BENCH TESTED</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-label-mono text-label-mono">
            3 Primary Queries
          </span>
</div>
<div className="space-y-4">

<div className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-start gap-3">
<span className="px-2 py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary font-bold shrink-0">
                Q1 • URGENT RELIEF
              </span>
<div className="space-y-2 flex-1">
<p className="font-headline-sm text-headline-sm text-on-surface">
                  Can we seek urgent Section 9 interim protection before exhausting mandatory Section 12A pre-institution mediation of the Commercial Courts Act 2015?
                </p>
<div className="p-3 rounded bg-surface-container text-on-surface-variant text-body-sm font-statute-quote italic">
                  “Section 12A is mandatory, save and except where the applicant contemplates urgent interim relief under this Act...”
                </div>
<div className="flex flex-wrap items-center gap-2 pt-1">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-tertiary">
                    Patil Automation LLP v. Rakheja Engineers (2022) 10 SCC 1
                  </span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-outline">
                    Yamini Manohar v. T.K.D. Keerthi (2023) SC
                  </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong>Recommended Counsel Stance:</strong> Plead immediate threat of business shutdown due to impending HVAC/power cut to satisfy the threshold of bona fide urgent interim relief under Section 12A(1) proviso.
                </p>
</div>
</div>
</div>

<div className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-start gap-3">
<span className="px-2 py-1 rounded bg-surface-container font-label-mono text-label-mono text-secondary font-bold shrink-0">
                Q2 • ESCROW / STAY
              </span>
<div className="space-y-2 flex-1">
<p className="font-headline-sm text-headline-sm text-on-surface">
                  Is an offer to deposit 50% of the disputed CAM surcharge into a DIAC escrow account optimal to secure unconditional status quo against eviction or disconnection?
                </p>
<div className="flex flex-wrap items-center gap-2 pt-1">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-secondary">
                    Arunachal Photovoltaics v. DLF Ltd (2021) Del HC
                  </span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-outline">
                    Sec 9(1)(ii)(b) &amp; (e) Arb &amp; Conc Act 1996
                  </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong>Recommended Counsel Stance:</strong> Offer ready deposit of ₹18,25,000 with the Registrar of the Court or DIAC to demonstrate clean hands and protect commercial continuity without admitting liability.
                </p>
</div>
</div>
</div>

<div className="p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors">
<div className="flex items-start gap-3">
<span className="px-2 py-1 rounded bg-surface-container font-label-mono text-label-mono text-error font-bold shrink-0">
                Q3 • CONTRACT BREACH
              </span>
<div className="space-y-2 flex-1">
<p className="font-headline-sm text-headline-sm text-on-surface">
                  Does unilateral CAM revision without third-party auditor ledger access constitute an unliquidated penalty and fundamental breach under Section 73 Indian Contract Act?
                </p>
<div className="flex flex-wrap items-center gap-2 pt-1">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-tertiary">
                    Kailash Nath Associates v. DDA (2015) 4 SCC 136
                  </span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-outline">
                    Section 73 &amp; 74 ICA 1872
                  </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong>Recommended Counsel Stance:</strong> Unilateral cost allocations without underlying utility sub-meter proof constitute arbitrary exactions that fail the test of actual loss or contracted variance formulas.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-xl bg-surface-container p-6 shadow-md">
<div className="flex items-center justify-between pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/30 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-lg">inventory_2</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Evidentiary Exhibit Vault &amp; Chain of Custody</h2>
<span className="font-label-mono text-label-mono text-outline">SECTION 65B INDIAN EVIDENCE ACT / BSA-2023 READY</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-tertiary">shield</span>
<span className="font-label-mono text-label-mono text-tertiary">3 Certified Exhibits</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-4 rounded-lg bg-surface-container-low flex flex-col justify-between gap-3 hover:bg-surface-container-high transition-colors">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-mono text-label-mono text-primary font-semibold">EXHIBIT A-1</span>
<span className="material-symbols-outlined text-sm text-tertiary">verified</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface text-sm font-semibold">Registered Haryana Stamp Duty Lease Deed</h3>
<p className="font-body-sm text-body-sm text-outline mt-1">Book No. 1, Vol 412, Sub-Registrar Gurugram. 58 Pages with Clause 14 annexures.</p>
</div>
<div className="pt-2">
<div className="text-xs font-label-mono text-outline truncate">SHA-256: 4b29..99da</div>
<button className="mt-2 w-full py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono hover:text-on-surface flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-xs">visibility</span>
<span>Inspect PDF</span>
</button>
</div>
</div>

<div className="p-4 rounded-lg bg-surface-container-low flex flex-col justify-between gap-3 hover:bg-surface-container-high transition-colors">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-mono text-label-mono text-secondary font-semibold">EXHIBIT B-2</span>
<span className="material-symbols-outlined text-sm text-tertiary">verified</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface text-sm font-semibold">Chartered Accountant Certified CAM Audit</h3>
<p className="font-body-sm text-body-sm text-outline mt-1">Report by M/s Khurana &amp; Associates (ICAI Reg #08491N). Detects ₹21.8L overbilling.</p>
</div>
<div className="pt-2">
<div className="text-xs font-label-mono text-outline truncate">UDIN: 23098491BGHY77</div>
<button className="mt-2 w-full py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono hover:text-on-surface flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-xs">visibility</span>
<span>Inspect PDF</span>
</button>
</div>
</div>

<div className="p-4 rounded-lg bg-surface-container-low flex flex-col justify-between gap-3 hover:bg-surface-container-high transition-colors">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-mono text-label-mono text-tertiary font-semibold">EXHIBIT C-1</span>
<span className="material-symbols-outlined text-sm text-tertiary">verified</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface text-sm font-semibold">India Post Consignment &amp; Delivery Log</h3>
<p className="font-body-sm text-body-sm text-outline mt-1">Consignment #EH918239102IN. Served on DLF General Counsel on 14 Oct 2023.</p>
</div>
<div className="pt-2">
<div className="text-xs font-label-mono text-outline truncate">Postal POD: DLF Gate #3</div>
<button className="mt-2 w-full py-1 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono hover:text-on-surface flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-xs">visibility</span>
<span>Track Receipt</span>
</button>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="rounded-xl bg-surface-container p-5 shadow-md">
<div className="flex items-center justify-between pb-3">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Designated Senior Counsel</span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-medium">Brief Confirmed</span>
</div>
<div className="flex items-center gap-3 py-2">
<img className="w-12 h-12 rounded-full object-cover shadow-md" data-alt="Portrait photo of a distinguished Indian senior advocate in white collar band and black judicial blazer against dark law library shelves." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFdLOwZ6coPUUPcySXV_5vQErDdKcx0VMw6wqXuE9O6kNu7QpZAxCLljebKGuVVJWl8Yl2zmjXmTfxdIADwF_qeN49M74SDqOfPUm7nay3_qugNsZeGPUgl7RVPHQlGjt2EnbSw3MwXOkXWSagMOjgu_NwgqWY9unhT-NTlGnyzF1PF1sQRzPBe-fIPcnZLcP4a0r4d2PhEAMKGPnWtM0U425vFdg1_5VRoOpWBGkC_MqzrHszCQIt"/>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface text-base">Senior Adv. Vikramaditya Sen</h3>
<p className="font-body-sm text-body-sm text-outline">Bar Council of Delhi • D/492/1998</p>
<p className="font-label-mono text-label-mono text-primary">Chambers: 14 Lawyers Chambers, SC of India</p>
</div>
</div>
<div className="mt-4 pt-3 space-y-2 bg-surface-container-low p-3 rounded-lg">
<div className="flex justify-between text-body-sm font-body-sm">
<span className="text-outline">Consultation Window:</span>
<span className="text-on-surface font-medium">Tomorrow, 04:30 PM IST</span>
</div>
<div className="flex justify-between text-body-sm font-body-sm">
<span className="text-outline">Retainer Cap:</span>
<span className="text-on-surface font-medium">₹1,25,000 / Conference</span>
</div>
<div className="flex justify-between text-body-sm font-body-sm">
<span className="text-outline">DIAC Experience:</span>
<span className="text-tertiary font-medium">42 Arbitrations Argued</span>
</div>
</div>
</div>

<section className="rounded-xl bg-surface-container p-5 shadow-md space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">edit_note</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface text-base">Counsel Conference Notes</h3>
</div>
<span className="font-label-mono text-label-mono text-outline">AUTO-SAVING</span>
</div>

<div className="space-y-2">
<label className="font-label-mono text-label-mono text-outline" htmlFor="counselNotesArea">CONFERENCE MEMO / OPEN ISSUES</label>
<textarea className="w-full bg-surface-container-low text-on-surface p-3 rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none" id="counselNotesArea" placeholder="Add specific questions for Senior Counsel or dictate action items..." rows={4}>1. Confirm whether single-judge Commercial Court at Gurugram or DIAC sole arbitrator has prior precedence on DLF CAM disputes.
2. Inquire about ad-interim ex-parte injunction probability on day 1 of Section 9 filing.</textarea>
</div>

<div className="space-y-2 pt-2">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Advocate Action Checklist</span>
<div className="space-y-1.5" id="checklistContainer">
<label className="flex items-center gap-2.5 p-2 rounded bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors">
<input defaultChecked className="rounded bg-surface-variant text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Deliver Exhibit A-1 &amp; C-1 with original postal slips</span>
</label>
<label className="flex items-center gap-2.5 p-2 rounded bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors">
<input defaultChecked className="rounded bg-surface-variant text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Re-verify Patil Automation exception pleadings</span>
</label>
<label className="flex items-center gap-2.5 p-2 rounded bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="rounded bg-surface-variant text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Procure signed affidavit under Order XIX CPC</span>
</label>
<label className="flex items-center gap-2.5 p-2 rounded bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors">
<input className="rounded bg-surface-variant text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Formulate escrow draft demand draft for DIAC</span>
</label>
</div>
</div>
<button className="w-full py-1.5 rounded bg-surface-container-high text-outline hover:text-on-surface font-label-mono text-label-mono flex items-center justify-center gap-1 transition-colors" id="addChecklistBtn">
<span className="material-symbols-outlined text-xs">add</span>
<span>Add Checklist Task</span>
</button>
</section>

<div className="rounded-xl bg-surface-container p-5 shadow-md space-y-4">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">Precedent Authority Radar</span>
<span className="material-symbols-outlined text-tertiary text-base">verified</span>
</div>

<div className="relative flex items-center justify-center p-3 bg-surface-container-low rounded-lg">
<svg className="w-48 h-32" fill="none" viewBox="0 0 200 120">

<path d="M 20 100 A 80 80 0 0 1 180 100" stroke="#31353f" strokeLinecap="round" strokeWidth="8"></path>
<path className="text-tertiary" d="M 20 100 A 80 80 0 0 1 165 65" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>

<circle cx="100" cy="100" fill="#c0c1ff" r="6"></circle>
<line stroke="#c0c1ff" strokeLinecap="round" strokeWidth="2.5" x1="100" x2="135" y1="100" y2="45"></line>

<text fill="#dfe2ef" font-family="JetBrains Mono" font-size="11" text-anchor="middle" x="100" y="80">HIGH FAVORABILITY</text>
<text fill="#4edea3" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle" x="100" y="98">88.4%</text>
</svg>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface">Supreme Court Precedents</span>
<span className="font-label-mono text-label-mono text-tertiary font-bold">12 Positive</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface">P&amp;H High Court Rulings</span>
<span className="font-label-mono text-label-mono text-primary font-bold">5 Harmonious</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface">Adverse Distinctions</span>
<span className="font-label-mono text-label-mono text-error font-bold">0 Overruled</span>
</div>
</div>
<button className="w-full py-2 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-xs hover:bg-surface-bright flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined text-sm">menu_book</span>
<span>View Full Citator Dossier</span>
</button>
</div>

<div className="p-4 rounded-xl bg-gradient-to-br from-surface-container-low to-surface-container shadow-md flex items-center justify-between gap-4">
<div className="space-y-1">
<span className="font-headline-sm text-headline-sm text-on-surface text-sm">Physical Courtroom Binder</span>
<p className="font-body-sm text-body-sm text-outline">Pre-formatted for Punjab &amp; Haryana HC green legal sheets with margins.</p>
</div>
<button className="shrink-0 p-3 rounded-lg bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary transition-colors" id="printBinderBtn" title="Print Physical Courtroom Binder">
<span className="material-symbols-outlined text-lg">print</span>
</button>
</div>
</div>
</div>

<div className="sticky bottom-4 z-30 mt-8 rounded-xl bg-surface-container-lowest/90 backdrop-blur-xl p-4 shadow-2xl flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface text-sm">Dossier Locked &amp; Cryptographically Sealed</span>
<p className="font-label-mono text-label-mono text-outline">Ready for conference with Senior Adv. Vikramaditya Sen</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-3.5 py-2 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-xs hover:bg-surface-bright flex items-center gap-1.5 transition-colors" id="sendLinkModalTrigger">
<span className="material-symbols-outlined text-base text-secondary">send</span>
<span>Send Access Link</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-high text-on-surface font-headline-sm text-xs hover:bg-surface-bright flex items-center gap-1.5 transition-colors" id="printCourtroomTrigger">
<span className="material-symbols-outlined text-base text-outline">print</span>
<span>Courtroom Binder</span>
</button>
<button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-xs font-semibold hover:brightness-110 flex items-center gap-2 shadow-[0_0_16px_rgba(192,193,255,0.3)] transition-all" id="exportEncryptedTrigger">
<span className="material-symbols-outlined text-base">lock</span>
<span>Export Encrypted PDF</span>
</button>
</div>
</div>

<div className="fixed bottom-20 right-8 z-50 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-highest text-on-surface shadow-2xl" id="toastNotification">
<span className="material-symbols-outlined text-tertiary" id="toastIcon">check_circle</span>
<span className="font-body-sm text-body-sm font-medium" id="toastMessage">Action completed successfully.</span>
</div>
</div>

    </>
  );
}
