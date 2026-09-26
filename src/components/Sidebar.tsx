"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      path: "/hub",
      icon: "grid_view",
      badge: "Home",
      badgeClass: "bg-primary text-[#0d0096] font-bold",
      iconActiveColor: "text-primary",
    },
    {
      name: "Simplify Documents",
      path: "/doc-analyzer",
      icon: "gavel",
      badge: "Beta",
      badgeClass: "bg-slate-800 text-slate-400",
      iconActiveColor: "text-primary",
    },
    {
      name: "Compare Contracts",
      path: "/contract-diff",
      icon: "difference",
      badge: "New",
      badgeClass: "bg-red-950/60 text-red-400 border border-red-800/40",
      iconActiveColor: "text-secondary",
    },
    {
      name: "Understand Options",
      path: "/dispute-navigator",
      icon: "route",
      badge: "Guide",
      badgeClass: "bg-slate-800 text-slate-400",
      iconActiveColor: "text-tertiary",
    },
    {
      name: "Prepare for Lawyer",
      path: "/attorney-prep",
      icon: "description",
      badge: "Checklist",
      badgeClass: "bg-slate-800 text-slate-400",
      iconActiveColor: "text-primary",
    },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-[#0c101b] border-r border-slate-800/80 flex flex-col justify-between p-4 h-full z-40 select-none">
      <div className="flex flex-col gap-5 overflow-y-auto">
        <div className="flex items-center gap-3 px-1">
          <Image
            alt="NyayaGen AI Logo"
            className="h-8 w-auto object-contain"
            width={32}
            height={32}
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wb2XyOPUEPDQxc3mTjz0X17fjGiN7BSPZKnL7xjfnLJV5ik440Rmm5GxKc_UZ4cS0DCxjvY8MiCZwEOwu83_e_veQa5IsRNVzls3JcpkZAHV8WDU4rdwpLmFWpgel4MWaSdiwylg4zhJzPJ1C1Pf3-ocmHKzgLo1Hq_kZe0Cr8Cq0KS-ou0OVBdgITBfwU07Z3PvAQ65n5SsfUjFVUGCURJXi81m8fY9Y62M6_5lwMTVLc10l41wfcEqU"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-base text-primary font-bold tracking-tight leading-none">
              NyayaGen.ai
            </span>
            <span className="font-label-mono text-[10px] text-tertiary font-semibold tracking-wider uppercase mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Personal Legal Assistant
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[11px] font-label-mono uppercase tracking-wider text-slate-400 font-semibold px-2 mb-1">
            Legal Tools
          </div>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded-lg font-medium text-sm transition-colors group",
                  isActive
                    ? "bg-indigo-600/20 text-primary border border-indigo-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "material-symbols-outlined text-lg",
                      isActive
                        ? item.iconActiveColor
                        : `text-slate-400 group-hover:${item.iconActiveColor}`
                    )}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
                <span
                  className={cn(
                    "text-[10px] font-label-mono px-1.5 py-0.5 rounded",
                    item.badgeClass
                  )}
                >
                  {item.badge}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[11px] font-label-mono uppercase tracking-wider text-slate-400 font-semibold px-2 mb-1">
            Resources
          </div>
          <Link
            href="#"
            className="flex items-center justify-between px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-sm transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-slate-400">
                menu_book
              </span>
              <span>Basic Legal Guides</span>
            </div>
            <span className="text-[10px] font-label-mono text-slate-400">
              Read
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-sm transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-slate-400">
                balance
              </span>
              <span>Legal Terminology</span>
            </div>
            <span className="text-[10px] font-label-mono text-tertiary">
              Learn
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-sm transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-slate-400">
                sync
              </span>
              <span>Find a Lawyer</span>
            </div>
            <span className="text-[10px] font-label-mono text-secondary">
              Search
            </span>
          </Link>
        </div>
      </div>
      <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
        <div className="flex items-center justify-between px-1 text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-tertiary">
              verified_user
            </span>
            <span className="font-label-mono text-[10px] uppercase tracking-wider">
              Data Protected • Private
            </span>
          </div>
          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800/60">
          <div className="flex items-center gap-2.5 min-w-0">
            <Image
              alt="User Profile"
              className="w-8 h-8 rounded-full object-cover shrink-0"
              width={32}
              height={32}
              src="https://lh3.googleusercontent.com/aida/AEtjO1Vk9Slk-TbsSwTL1THey3LSQhKL7D7hgBfTJM_U_C6Wb2nL7dWjEN-Xp4eqlcFZqwFDR4aiVFhhqwEHkUGE8Sg25V9PiDmVQLVtzTXNkzfNR6_E6ylr_RLnPSnRtLPlQLzfZJWiMNx9gU0oo3miJlpAU6VB4IGYmpx5dkpdf-EhNxYn3lwua0dWLJVn23S3SBeV08gSYwy3fIQArDxgdixAkJKQHJPwePCGez42rHhrlm14piud_voIZQU"
            />
            <div className="flex flex-col truncate">
              <span className="text-xs font-semibold text-slate-200 truncate leading-tight">
                Guest User
              </span>
              <span className="text-[10px] text-slate-400 font-label-mono truncate leading-tight">
                Free Plan
              </span>
            </div>
          </div>
          <button aria-label="Settings" className="text-slate-400 hover:text-white p-1">
            <span className="material-symbols-outlined text-base">
              settings
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
