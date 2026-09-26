import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 w-full flex-shrink-0 border-b border-slate-800/80 bg-[#0c101b]/95 backdrop-blur-md px-6 flex items-center justify-between gap-4 z-30 select-none">
      <div className="flex items-center gap-4 text-xs font-label-mono">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-400">MATTER RUNTIME:</span>
          <span className="text-slate-200 font-semibold">4 Active Pinned</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
          <span className="text-slate-400">EXPOSURE:</span>
          <span className="text-amber-400 font-semibold">₹42,85,000 INR</span>
        </div>
      </div>
      <div className="flex-1 max-w-md hidden md:flex items-center">
        <div className="w-full flex items-center bg-slate-900/90 border border-slate-800/80 px-3 py-1.5 rounded-lg text-slate-400 hover:border-slate-700 transition-colors">
          <span className="material-symbols-outlined text-base text-slate-400 mr-2">
            search
          </span>
          <span className="font-code-inline text-xs text-slate-400 flex-1 truncate">
            Search BNS 2023, SCC precedents, clauses...
          </span>
          <span className="text-[10px] font-label-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
            ⌘K
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-sm shadow-indigo-950">
          <span className="material-symbols-outlined text-sm">add</span>
          <span>New Matter Intake</span>
        </button>
        <button aria-label="Notifications" className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors">
          <span className="material-symbols-outlined text-xl">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-slate-900"></span>
        </button>
        <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
          <Image
            alt="User avatar"
            className="w-7 h-7 rounded-full object-cover"
            width={28}
            height={28}
            src="https://lh3.googleusercontent.com/aida/AEtjO1Vk9Slk-TbsSwTL1THey3LSQhKL7D7hgBfTJM_U_C6Wb2nL7dWjEN-Xp4eqlcFZqwFDR4aiVFhhqwEHkUGE8Sg25V9PiDmVQLVtzTXNkzfNR6_E6ylr_RLnPSnRtLPlQLzfZJWiMNx9gU0oo3miJlpAU6VB4IGYmpx5dkpdf-EhNxYn3lwua0dWLJVn23S3SBeV08gSYwy3fIQArDxgdixAkJKQHJPwePCGez42rHhrlm14piud_voIZQU"
          />
        </div>
      </div>
    </header>
  );
}
