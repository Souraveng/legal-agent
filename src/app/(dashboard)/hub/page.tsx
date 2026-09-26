"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getDashboardData } from "@/app/actions";

export default function IntelligenceHub() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

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
              NYAYAGEN ASSISTANT v1.0
            </span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-outline font-label-mono text-label-mono">
              SECURE VAULT
            </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-display tracking-tight">
            Welcome back, {data?.user?.name || "User"}
          </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            Your Personal Legal Hub. Easily understand documents, compare agreements, explore your options, and prepare for legal consultations.
          </p>
</div>

<div className="flex flex-wrap items-center gap-space-xs shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-badge-label text-badge-label transition-all shadow-sm group" id="btn-quick-audit">
<span className="material-symbols-outlined text-sm text-secondary group-hover:scale-110 transition-transform">bolt</span>
<span className="">Quick Document Review</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-badge-label text-badge-label transition-all shadow-sm group" id="btn-model-dispute">
<span className="material-symbols-outlined text-sm text-tertiary group-hover:scale-110 transition-transform">balance</span>
<span className="">Explore Options</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-badge-label text-badge-label transition-all shadow-md group" id="btn-counsel-brief">
<span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">description</span>
<span className="">Prepare for Lawyer PDF</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-outline hover:text-on-surface font-badge-label text-badge-label shadow-sm">
<span className="material-symbols-outlined text-sm">cloud_upload</span>
<span className="hidden sm:inline">Upload Document</span>
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
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">{data?.mattersCount || 0} Matters</span>
<span className="h-1.5 w-1.5 rounded-full bg-tertiary"></span>
</div>
<p className="font-label-mono text-label-mono text-outline truncate">Active Legal Matters</p>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container transition-colors">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-error shrink-0">
<span className="material-symbols-outlined">currency_rupee</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">{data?.exposure || "₹0"}</span>
<span className="font-label-mono text-label-mono text-error">EXPOSURE</span>
</div>
<p className="font-label-mono text-label-mono text-outline truncate">Total Potential Risk</p>
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
<p className="font-label-mono text-label-mono text-secondary truncate">Deadline for Action</p>
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
<p className="font-label-mono text-label-mono text-outline truncate">Accuracy of Guidance</p>
</div>
</div>
</div>
</div>

<div className="mt-space-lg grid grid-cols-1 xl:grid-cols-2 gap-space-lg">

<div className="flex flex-col bg-surface-container-low rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
<span className="font-label-mono text-label-mono text-outline font-semibold">{data?.documents?.[0]?.id || "DOC-RENTAL-24"}</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate max-w-xs">
              {data?.documents?.[0]?.title || "Apartment Rental Agreement"}
            </span>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-error font-bold">
              Status: {data?.documents?.[0]?.status || "Severe"}
            </span>
</div>
</div>

<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                Flagged Clause: Unfair Late Fee and Eviction Terms
              </span>
<span className="font-label-mono text-label-mono text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-xs">tune</span>
                Consumer Protection
              </span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest text-on-surface-variant text-body-sm font-statute-quote italic relative pl-4 shadow-inner">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error rounded-l"></div>
              “The Landlord may evict the Tenant immediately without notice if rent is delayed by one day, and the Tenant must pay a penalty of ₹5000 per day until evicted...”
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
<strong className="text-error">What it means:</strong> The landlord is trying to impose an unfair penalty of ₹5000 per day for late rent and claims the right to evict you without notice. Under the law, landlords must give proper notice before eviction, and courts usually do not allow excessively high late fees as they are considered unfair penalties.
              </p>
</div>

<div className="flex flex-wrap items-center gap-space-xs pt-1">
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-xs">link</span>
                Unfair Penalty Law
              </span>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container text-outline">
                Protection against unfair terms
              </span>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-1 text-outline hover:text-primary cursor-pointer font-label-mono text-label-mono">
<span className="material-symbols-outlined text-sm">chat_bubble_outline</span>
<span className="">Ask NyayaGen: “Can they legally evict me this quickly?”</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-badge-label text-badge-label hover:bg-secondary-fixed transition-all flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-sm">edit_document</span>
              Generate Fairer Clause
            </button>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-low rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-mono text-label-mono text-outline font-semibold">DIFF-LEASE-09</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
              Standard Lease vs Your New Lease (3 Changes)
            </span>
</div>
<span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-bold">
            2 Major Legal Concerns
          </span>
</div>

<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">

<div className="p-space-md rounded-lg bg-surface-container-high/90 space-y-space-xs shadow-md">
<div className="flex items-center justify-between">
<span className="font-badge-label text-badge-label text-on-surface font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-error text-base">gpp_bad</span>
                  Clause 8.1: Unfair Security Deposit Withholding
                </span>
<span className="font-label-mono text-label-mono text-error font-bold px-1.5 py-0.5 rounded bg-error-container">
                  VOID AB INITIO
                </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs text-code-inline font-code-inline text-on-surface-variant text-xs pt-1">
<div className="p-2 rounded bg-surface-container-lowest">
<span className="text-outline block text-label-mono mb-1">Baseline Standard (Firm Draft):</span>
                  “Landlord will return the security deposit within 30 days of moving out, minus reasonable deductions for actual damage.”
                </div>
<div className="p-2 rounded bg-error-container/20 text-error">
<span className="text-error block text-label-mono mb-1">Vendor Inbound Mutation:</span>
                  “Landlord may keep the entire security deposit for normal wear and tear or repainting.”
                </div>
</div>
<div className="p-space-xs rounded bg-surface-container-lowest flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-sm shrink-0 mt-0.5">verified</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
<strong className="text-secondary">Statutory Clash:</strong> Generally, the law does not allow landlords to deduct from the security deposit for normal wear and tear. You are only responsible for actual damage beyond normal use.
                </p>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-error text-sm shrink-0">timer_off</span>
<div className="truncate">
<span className="font-body-sm text-body-sm font-semibold text-on-surface block truncate">Notice Period Changed to 60 Days</span>
<span className="font-label-mono text-label-mono text-outline">Standard notice period is usually 30 days.</span>
</div>
</div>
<button className="shrink-0 px-2 py-1 rounded bg-surface-container hover:bg-surface-bright text-tertiary font-label-mono text-label-mono">
                Suggest 30 Days
              </button>
</div>
</div>

<div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-xs">
<span className="font-label-mono text-label-mono text-outline">Document Comparison Engine</span>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-badge-label text-badge-label transition-colors">
                Export Changes
              </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-badge-label text-badge-label hover:bg-primary-fixed transition-all flex items-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-sm">check_circle</span>
                Apply Fair Standard Terms
              </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-surface-container-low rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">

<div className="p-space-md bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="font-label-mono text-label-mono text-outline font-semibold">ISSUE #DEP-BLR-2024</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
              Koramangala Apartment Lease • Security Deposit Not Returned
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
                Recommended Next Steps:
              </span>

<div className="p-space-sm rounded-lg bg-surface-container-high/90 hover:bg-surface-bright transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary font-label-mono text-label-mono flex items-center justify-center font-bold">A</span>
<span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      Send a Formal Legal Notice via Speed Post
                    </span>
</div>
<span className="font-label-mono text-label-mono text-tertiary font-bold">82% Recovery Rate</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 pl-7">
                  Send a formal demand letter giving them 15 days to return the deposit before you take further action.
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 hover:bg-surface-bright transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary font-label-mono text-label-mono flex items-center justify-center font-bold">B</span>
<span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      File a Consumer Complaint Online
                    </span>
</div>
<span className="font-label-mono text-label-mono text-secondary font-bold">CPA 2019 Deficiency</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 pl-7">
                  You can easily file a complaint online through the consumer court portal without needing to visit in person.
                </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 hover:bg-surface-bright transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-outline/20 text-outline font-label-mono text-label-mono flex items-center justify-center font-bold">C</span>
<span className="font-body-sm text-body-sm font-semibold text-on-surface">
                      File a complaint with the Rent Authority
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
<span className="font-label-mono text-label-mono text-outline font-semibold">LAWYER-PREP #9921</span>
<span className="text-outline">/</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
              Preparation for Lawyer • Gurugram Apartment Maintenance Dispute
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
                    Time & Money Saved on Lawyer Fees
                  </div>
<div className="font-label-mono text-label-mono text-on-surface-variant">
                    Estimated ₹10,000 saved by preparing questions and facts in advance
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
                    What is the quickest way to get my maintenance charges refunded? Should we send a legal notice first or go straight to consumer court?
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
                    Can the association legally cut off my electricity and water because I am disputing the extra maintenance charges?
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
            Legal Rules Database
          </span>
<span className="font-label-mono text-label-mono text-outline">
            Continuously updated with the latest consumer and rental rules
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
<input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-md font-body-md px-space-md py-2.5 rounded-lg outline-none focus:ring-1 focus:ring-primary transition-all" id="copilot-input" placeholder="Ask NyayaGen for help (e.g., 'Draft a letter to my landlord asking for my deposit back' or 'What are my rights if my flight was cancelled?')..." type="text" />
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
