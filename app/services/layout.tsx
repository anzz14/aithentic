import Link from "next/link";
import type { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,10,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-orange-500/40 hover:bg-white/10"
            href="/#services"
          >
            <span aria-hidden="true">←</span>
            Back to services
          </Link>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            Aithentic Services
          </span>
        </div>
      </nav>
      {children}
    </div>
  );
}
