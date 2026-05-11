"use client";

import type { LucideIcon } from "lucide-react";
import { BarChart3, Gauge, Search, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: "AI-First SEO",
    description:
      "Built for Google, ChatGPT, Perplexity, Gemini, and emerging AI discovery platforms.",
    icon: Search,
  },
  {
    title: "Full-Funnel Growth",
    description: "From visibility and traffic to leads and conversion optimization.",
    icon: BarChart3,
  },
  {
    title: "Performance-Focused Execution",
    description: "Every strategy is tied to measurable business outcomes.",
    icon: Gauge,
  },
  {
    title: "Long-Term Brand Equity",
    description: "Sustainable growth systems instead of short-term hacks.",
    icon: ShieldCheck,
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  icon: LucideIcon;
}>;

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="why-us"
      className="relative overflow-hidden px-5 py-14 sm:px-8 lg:px-12 lg:py-16 bg-[radial-gradient(circle_at_18%_0%,rgba(249,115,22,0.14),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.06),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(circle_at_center,black,transparent_88%)]" />

      <motion.div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-4xl border border-white/10 bg-transparent p-0 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-0 lg:p-0" variants={containerVariants}>

        <motion.div className="relative grid grid-cols-1 gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-5" variants={containerVariants}>
          <motion.div className="rounded-3xl border border-white/10 bg-[#1a1a1a]/75 p-5 backdrop-blur-md sm:p-6 lg:p-7" variants={itemVariants}>
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-orange-500">
            WHY US
          </span>
            <h2
              className="mt-4 max-w-[14ch] text-[clamp(1.85rem,3.4vw,2.9rem)] font-extrabold leading-[1.04] tracking-tighter text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
            Search Has Changed. So Should Your Growth Strategy.
          </h2>
          <p className="mt-4 max-w-136 text-[0.98rem] leading-8 text-slate-300">
            Search engines are changing fast, and we help your brand stay visible on top wherever
            customers are searching.
          </p>
          <p className="mt-4 max-w-136 text-[0.98rem] leading-8 text-slate-300">
            Bring us your goals and constraints. We&apos;ll turn them into a focused plan with actual
            results.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "AI-first visibility",
              "Growth partner",
              "Built for results",
            ].map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
              >
                {stat}
              </span>
            ))}
          </div>
          </motion.div>

          <motion.div className="grid h-full content-center grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-4" variants={containerVariants}>
            {values.map((value) => (
              <motion.article
                key={value.title}
                className="group flex h-36 items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-md lg:h-40"
                variants={itemVariants}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/10 bg-white/6 text-orange-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <value.icon size={14} strokeWidth={2.2} />
                </span>

                <div className="grid gap-1 pt-0.5">
                  <h3 className="text-[0.98rem] font-bold leading-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-400">{value.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
