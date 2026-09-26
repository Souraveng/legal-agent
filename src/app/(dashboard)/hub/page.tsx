"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function IntelligenceHub() {
  const [activeTab, setActiveTab] = useState("analyzer");

  return (
    <>
      <div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden px-margin sm:px-margin-tablet lg:px-margin-desktop py-space-lg">

<div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-3xl"></div>
<div className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl"></div>

<div className="relative flex flex-col gap-space-lg">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div className="space-y-space-xs max-w-3xl">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-tertiary font-label-mono text-label-mono flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-tertiary animate-pulse"></span>
              BHARAT STATUTORY REASONING ENGINE v4.2
            </span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-outline font-label-mono text-label-mono">
              AP-SOUTH-1 VAULT
            </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-display tracking-tight">
            Bharat Legal Operations &amp; AI Intelligence Hub
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            Unified statutory comprehension, bilateral contract redlining, dispute trajectory modeling, and advocate briefing dossier engine mapped strictly to the Supreme Court of India, BNS 2023, and High Court precedents.
          </p>
</div>

<div className="flex flex-wrap items-center gap-space-xs shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-badge-label text-badge-label transition-all shadow-sm group" id="btn-quick-audit">
<span className="material-symbols-outlined text-sm text-secondary group-hover:scale-110 transition-transform">bolt</span>
<span className="">Quick Contract Audit</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-badge-label text-badge-label transition-all shadow-sm group" id="btn-model-dispute">
<span className="material-symbols-outlined text-sm text-tertiary group-hover:scale-110 transition-transform">balance</span>
<span className="">Model Dispute</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-badge-label text-badge-label transition-all shadow-md group" id="btn-counsel-brief">
<span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">description</span>
<span className="">Counsel Briefing PDF</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-outline hover:text-on-surface font-badge-label text-badge-label shadow-sm">
<span className="material-symbols-outlined text-sm">cloud_upload</span>
<span className="hidden sm:inline">Upload e-Stamp / Doc</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm bg-surface-container-low p-space-sm rounded-xl shadow-lg">

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined">folder_open</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">4 Matters</span>
<span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>
</div>
<p className="font-label-mono text-label-mono text-outline truncate">Active Tracked Proceedings</p>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-error shrink-0">
<span className="material-symbols-outlined">currency_rupee</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">₹42,85,000</span>
<span className="font-label-mono text-label-mono text-error">EXPOSURE</span>
</div>
<p className="font-label-mono text-label-mono text-outline truncate">Total Financial Exposure</p>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined">hourglass_top</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">12 Days Rem.</span>
</div>
<p className="font-label-mono text-label-mono text-secondary truncate">Sec 12A Mediation Notice Reply</p>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined">verified</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">99.4%</span>
<span className="font-label-mono text-label-mono text-tertiary">BENCHMARK</span>
</div>
<p className="font-label-mono text-label-mono text-outline truncate">SC &amp; Bare Act Citation Accuracy</p>
</div>
</div>
</div>
</div>

<div className="mt-space-lg grid grid-cols-1 xl:grid-cols-2 gap-space-lg">

<div className="flex flex-col bg-surface-container-low rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
<span className="font-label-mono text-label-mono text-outline font-semibold">DOC-2024-8849A-IN</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate max-w-xs">
              Cloud Master Service Agreement (Tata Tech / CloudCore)
            </span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-error font-bold">
              Risk: 68/100 • Severe
            </span>
</div>
</div>

<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                Flagged Clause: 7.2 &amp; 14.1 Unilateral Indemnity &amp; Trapdoor Cap
              </span>
<span className="font-label-mono text-label-mono text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-xs">tune</span>
                Sec. 73/74 Act 1872
              </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest text-on-surface-variant text-body-sm font-statute-quote italic relative pl-4 shadow-inner">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error rounded-l"></div>
              “CloudCore’s aggregate liability for all statutory damages, systemic data breaches, or tort under Indian Law shall in no event exceed INR 35,000 or the invoice fee paid in the prior month, notwithstanding Customer’s uncapped indemnity for third-party cyber liabilities...”
            </div>

<div className="pt-space-xs flex items-center justify-between">
<span className="font-badge-label text-badge-label text-outline uppercase">Deconstruction Lens:</span>
<div className="flex items-center gap-1 bg-surface-container p-0.5 rounded-lg text-badge-label font-badge-label">
<button className="px-2 py-1 rounded bg-primary-container text-on-primary-container font-semibold transition-all" id="lens-legal" >Plain-Legal</button>
<button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface transition-all" id="lens-eli5" >ELI5 Simplified</button>
<button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface transition-all" id="lens-cfo" >CFO Balance Sheet</button>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container-high/80 text-on-surface text-body-sm space-y-space-xs transition-all" id="lens-content">
<div className="flex items-center gap-1.5 text-secondary font-label-mono text-label-mono font-bold">
<span className="material-symbols-outlined text-sm">psychology</span>
<span className="">Plain-Language Synthesis</span>
</div>
<p className="leading-relaxed" id="lens-text">
<strong className="text-error">What it means:</strong> The vendor caps their entire data breach liability to a mere <strong>₹35,000 INR</strong> while demanding totally uncapped financial indemnity from you. Under <strong>Sections 73 &amp; 74 of the Indian Contract Act, 1872</strong>, such one-sided liquidated caps can be declared unconscionable penalties in High Court proceedings.
              </p>
</div>

<div className="flex flex-wrap items-center gap-space-xs pt-1">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-xs">link</span>
                ONGC v. Saw Pipes Ltd. (2003) 5 SCC 705
              </span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline">
                Doctrine of Unilateral Imbalance
              </span>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-1 text-outline hover:text-primary cursor-pointer font-label-mono text-label-mono">
<span className="material-symbols-outlined text-sm">chat_bubble_outline</span>
<span className="">Ask NyayaGen: “Can this trigger Sec 12A mediation?”</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-badge-label text-badge-label hover:bg-secondary-fixed transition-all flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-sm">edit_document</span>
              Generate Redline Counter-Clause
            </button>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-low rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-mono text-label-mono text-outline font-semibold">DIFF-INBOUND-09</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
              Standard Baseline vs Vendor Redline (14 Deviations)
            </span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-bold">
            2 Fatal Statutory Conflicts
          </span>
</div>

<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">

<div className="p-space-md rounded-lg bg-surface-container-high/90 space-y-space-xs shadow-md">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label text-on-surface font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-error text-base">gpp_bad</span>
                  Clause 8.1: Pan-India Post-Term Non-Compete (24 Months)
                </span>
<span className="font-label-mono text-label-mono text-error font-bold px-1.5 py-0.5 rounded bg-error-container">
                  VOID AB INITIO
                </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs text-code-inline font-code-inline text-on-surface-variant text-xs pt-1">
<div className="p-2 rounded bg-surface-container-lowest">
<span className="text-outline block text-label-mono mb-1">Baseline Standard (Firm Draft):</span>
                  “Standard non-solicitation of dedicated key engineers for 6 months restricted to Bangalore jurisdiction.”
                </div>
<div className="p-2 rounded bg-error-container/20 text-error">
<span className="text-error block text-label-mono mb-1">Vendor Inbound Mutation:</span>
                  “Shall not provide competitive software services across the Republic of India for 2 years post expiration.”
                </div>
</div>
<div className="p-space-xs rounded bg-surface-container-lowest flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5">verified</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong className="text-secondary">Statutory Clash:</strong> Section 27, Indian Contract Act 1872 rejects post-contract restraint. Supreme Court in <em className="text-on-surface">Percept D’Mark v. Zaheer Khan (2006) 4 SCC 227</em> strictly held reasonableness test inapplicable to Indian restraint of trade covenants.
                </p>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-error text-sm shrink-0">timer_off</span>
<div className="truncate">
<span className="font-body-sm text-body-sm font-semibold text-on-surface block truncate">Payment Term Shifted to Net 75 Days</span>
<span className="font-label-mono text-label-mono text-outline">MSMED Act 2006 (§15 &amp; §16 Violation: Max allowed 45 Days with 3x RBI compound interest)</span>
</div>
</div>
<button className="shrink-0 px-2 py-1 rounded bg-surface-container hover:bg-surface-bright text-tertiary font-label-mono text-label-mono">
                Auto-Restore 45D
              </button>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-xs">
<span className="font-label-mono text-label-mono text-outline">Track Changes Engine: BNS / ICA 1872 Linked</span>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-badge-label text-badge-label transition-colors">
                Export .DOCX Redline
              </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-badge-label text-badge-label hover:bg-primary-fixed transition-all flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-sm">check_circle</span>
                Apply SC Precedent Strikeout
              </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-low rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-mono text-label-mono text-outline font-semibold">MATTER #TEN-BLR-2024</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
              Koramangala Commercial Lease • Security Deposit Withholding
            </span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-bold">
            ₹2,40,000 INR Claim
          </span>
</div>

<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">

<div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between gap-space-sm shadow-inner">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-lg">alarm_on</span>
</div>
<div>
<div className="font-badge-label text-badge-label text-on-surface font-bold">
                    Statutory Cure Period: 14 Days Overdue
                  </div>
<div className="font-label-mono text-label-mono text-outline">
                    Interest accruing at 18% p.a. + mental harassment compensation claim active
                  </div>
</div>
</div>
<span className="font-label-mono text-label-mono px-2 py-1 rounded bg-surface-container-high text-error font-bold whitespace-nowrap">
                Clock Ticking
              </span>
</div>

<div className="space-y-space-xs pt-1">
<span className="font-badge-label text-badge-label text-on-surface-variant uppercase tracking-wider block">
                Recommended Procedural Pathways (Karnataka Jurisdiction):
              </span>

<div className="p-space-sm rounded-lg bg-surface-container-high/90 hover:bg-surface-bright transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary font-label-mono text-label-mono flex items-center justify-center font-bold">A</span>
<span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      Legal Demand Notice via India Post Speed Post + AD (§106 TPA)
                    </span>
</div>
<span className="font-label-mono text-label-mono text-tertiary font-bold">82% Recovery Rate</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 pl-7">
                  Mandatory 15-day pre-action demand with official postal tracking barcode integration. Evidentiary proof under Section 27, General Clauses Act.
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 hover:bg-surface-bright transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary font-label-mono text-label-mono flex items-center justify-center font-bold">B</span>
<span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      e-Daakhil Online Filing (DCDRC Bengaluru Urban)
                    </span>
</div>
<span className="font-label-mono text-label-mono text-secondary font-bold">CPA 2019 Deficiency</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 pl-7">
                  Jurisdiction up to ₹50 Lakhs. Paperless petition submission via NIC e-Daakhil gateway.
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 hover:bg-surface-bright transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-outline/20 text-outline font-label-mono text-label-mono flex items-center justify-center font-bold">C</span>
<span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      Model Tenancy Act 2021 / Rent Authority Application (§13)
                    </span>
</div>
<span className="font-label-mono text-label-mono text-outline">Fast-track Adjudication</span>
</div>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-sm">download</span>
              e-Daakhil Complaint Kit (.zip)
            </button>
<button className="px-space-md py-1.5 rounded-lg bg-tertiary-container text-on-tertiary-container font-badge-label text-badge-label hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-sm">mark_email_read</span>
              Dispatch Verified Speed Post Notice
            </button>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-low rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-mono text-label-mono text-outline font-semibold">DOSSIER #BKN-9921</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
              Senior Advocate Brief • Gurugram DLF CyberCity CAM Controversy
            </span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-primary font-bold">
            ₹36,50,000 Dispute
          </span>
</div>

<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">

<div className="p-space-sm rounded-lg bg-primary-container/20 flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-xl">savings</span>
<div>
<div className="font-badge-label text-badge-label text-primary-fixed font-bold">
                    2.5 Senior Counsel Billable Hours Conserved
                  </div>
<div className="font-label-mono text-label-mono text-on-surface-variant">
                    Est. ₹35,000 INR saved in preliminary fact-finding conferences
                  </div>
</div>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-bold">
                READY-TO-ARGUE
              </span>
</div>

<div className="space-y-space-xs pt-1">
<span className="font-badge-label text-badge-label text-on-surface-variant uppercase tracking-wider block">
                Pre-Formulated Questions for Senior Advocate:
              </span>
<div className="p-space-sm rounded-lg bg-surface-container-high/80 space-y-1">
<div className="flex items-start gap-2">
<span className="font-label-mono text-label-mono text-primary font-bold mt-0.5">Q1:</span>
<p className="font-body-sm text-body-sm text-on-surface">
                    Can we seek immediate <strong>Section 9 interim relief</strong> (under Arbitration &amp; Conciliation Act 1996) at Delhi High Court before exhausting Section 12A Commercial Courts mediation?
                  </p>
</div>
<div className="pl-6 font-label-mono text-label-mono text-outline">
                  Key Citation: <em>Patil Automation LLP v. Rakheja Engineers (2022) 10 SCC 1</em> (Urgent interim relief exception)
                </div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-high/80 space-y-1">
<div className="flex items-start gap-2">
<span className="font-label-mono text-label-mono text-primary font-bold mt-0.5">Q2:</span>
<p className="font-body-sm text-body-sm text-on-surface">
                    Escrow deposit strategy at DIAC (Delhi International Arbitration Centre) to halt unilateral utility and power disconnection.
                  </p>
</div>
</div>
</div>

<div className="p-space-xs bg-surface-container-lowest rounded-lg">
<div className="flex items-center justify-between text-label-mono font-label-mono px-2 py-1 text-outline">
<span className="">Dossier Exhibits:</span>
<span className="">3 / 3 Verified</span>
</div>
<div className="grid grid-cols-3 gap-1 text-center font-label-mono text-label-mono text-xs">
<div className="p-1 rounded bg-surface-container text-tertiary truncate">✓ Haryana Stamp Deed</div>
<div className="p-1 rounded bg-surface-container text-tertiary truncate">✓ CA Reconciliation</div>
<div className="p-1 rounded bg-surface-container text-tertiary truncate">✓ Consignment Receipt</div>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-sm">link</span>
                Counsel Access Link
              </button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface font-badge-label text-badge-label flex items-center gap-1">
<span className="material-symbols-outlined text-sm">print</span>
                Binder
              </button>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-badge-label text-badge-label hover:bg-primary-fixed transition-all flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-sm">picture_as_pdf</span>
              Download Encrypted 2-Page Brief
            </button>
</div>
</div>
</div>
</div>

<div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md shadow-lg">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/30 flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-base">radar</span>
</div>
<div>
<span className="font-badge-label text-badge-label text-on-surface font-semibold block">
            National Precedent Graph &amp; High Court Concordance
          </span>
<span className="font-label-mono text-label-mono text-outline">
            Continuous indexing across Delhi, Bombay, Karnataka &amp; Allahabad High Courts
          </span>
</div>
</div>

<div className="flex items-center gap-space-lg w-full lg:w-auto justify-between">
<div className="flex items-center gap-space-sm">
<svg className="h-6 w-36 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 144 24">
<path d="M1 18l24-6 24 8 24-14 24 6 24-10 22 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="text-right">
<span className="font-label-mono text-label-mono text-tertiary block font-bold">142,910 Precedents</span>
<span className="font-label-mono text-label-mono text-outline text-xs">Updated Today (e-Courts API)</span>
</div>
</div>
<button className="px-space-sm py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface text-badge-label font-badge-label">
          View Gazettes
        </button>
</div>
</div>

<div className="mt-space-lg p-space-sm rounded-xl bg-surface-container-highest shadow-2xl">
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
<div className="flex items-center pl-space-sm text-primary">
<span className="material-symbols-outlined text-2xl animate-pulse">auto_awesome</span>
</div>
<div className="flex-1 relative">
<input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-md font-body-md px-space-md py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-primary transition-all" id="copilot-input" placeholder="Ask NyayaGen across your 4 active matters (e.g., 'Draft notice under Sec 138 NI Act' or 'Check stamp duty in Maharashtra')..." type="text" />
</div>
<div className="flex items-center gap-space-xs shrink-0 justify-end">
<span className="hidden md:flex font-label-mono text-label-mono px-2 py-1 rounded bg-surface-container text-outline items-center gap-1">
<span className="">LLM: JurisDense 70B (Union Law)</span>
</span>
<button className="px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-badge-label text-badge-label flex items-center gap-1.5 shadow-md transition-all" id="btn-copilot-send">
<span className="">Execute</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
