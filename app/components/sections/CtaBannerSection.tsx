"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CtaBannerSection({
  onOpenAudit,
  onOpenContact,
}: {
  onOpenAudit?: () => void;
  onOpenContact?: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section
      ref={ref}
      id="contact"
      className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_26%),linear-gradient(180deg,#171717_0%,#111111_100%)]"
    >
      <motion.div
        className="mx-auto w-full max-w-6xl rounded-4xl border border-white/10 bg-white/5 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-7 lg:p-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a]/80 p-6 sm:p-8 lg:p-10"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[68px_68px] opacity-10 mask-[radial-gradient(circle_at_center,black,transparent_78%)]" />
          <motion.div
            className="relative flex flex-col items-center justify-center gap-6 text-center lg:gap-8"
            style={{ textAlign: "center" }}
            variants={containerVariants}
          >

            <motion.div
              className="flex w-full max-w-6xl flex-col items-center gap-4 text-center"
              style={{ textAlign: "center" }}
              variants={itemVariants}
            >
              <motion.div
                className="flex w-full flex-col items-center gap-3 text-center"
                style={{ textAlign: "center" }}
                variants={itemVariants}
              >
                <span
                  className="text-center text-[0.75rem] font-bold uppercase tracking-[0.18em] text-orange-500"
                  style={{ textAlign: "center" }}
                >
                  Get a Free Audit
                </span>
                <h2
                  className="mx-auto max-w-[24ch] text-center text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.02] tracking-tighter text-white"
                  style={{ fontFamily: "var(--font-syne)", textAlign: "center" }}
                >
                  Find out exactly where you're losing traffic
                </h2>
                <p
                  className="mx-auto max-w-6xl text-center text-[0.98rem] leading-8 text-slate-300"
                  style={{ textAlign: "center" }}
                >
                  If you aren't visible on every platform, you don't exist. Get a Free audit of your website to check current SEO health, where your competitors are outranking you, and flag the quickest wins, across traditional search and AI search. Do not miss out on unlimited opportunities for your business.
                </p>
              </motion.div>

              <motion.div className="flex w-full flex-wrap justify-center gap-3" variants={itemVariants}>
                <button
                  className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,115,22,0.25)] transition-transform hover:-translate-y-0.5"
                  type="button"
                  onClick={() => {
                    if (onOpenAudit) onOpenAudit();
                  }}
                >
                  Get a Free SEO Audit
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
                  type="button"
                  onClick={() => {
                    if (onOpenContact) onOpenContact();
                  }}
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
