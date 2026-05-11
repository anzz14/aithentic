"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      className="px-5 py-10 sm:px-8 lg:px-12 lg:py-12 bg-[linear-gradient(180deg,#111111_0%,#0c0c0c_100%)]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="mx-auto w-full max-w-6xl rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-8 lg:p-10" variants={itemVariants}>
        <motion.div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-10" variants={containerVariants}>
          <motion.div className="grid gap-4" variants={itemVariants}>
            <a className="inline-flex w-fit items-center text-2xl font-extrabold tracking-[-0.04em] text-white" href="#top" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="text-orange-500">Ai</span>thentic
            </a>
            <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-[0.96rem]">
              AI-powered SEO and growth systems designed to keep your brand visible across search,
              AI discovery, and conversion channels.
            </p>
          </motion.div>

          <motion.div className="grid gap-3" variants={itemVariants}>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Explore</h2>
            <nav className="grid gap-2 text-sm text-slate-300">
              <a className="transition-colors hover:text-white" href="#services">Services</a>
              <a className="transition-colors hover:text-white" href="#process">Process</a>
              <a className="transition-colors hover:text-white" href="#testimonials">Testimonials</a>
              <a className="transition-colors hover:text-white" href="#why-us">Why Us</a>
              <a className="transition-colors hover:text-white" href="#contact">Contact</a>
            </nav>
          </motion.div>

          <motion.div className="grid gap-3" variants={itemVariants}>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Contact</h2>
            <div className="grid gap-2 text-sm text-slate-300">
              <a className="transition-colors hover:text-white" href="mailto:hello@aithentic.com">hello@aithentic.com</a>
              <a className="transition-colors hover:text-white" href="tel:+10000000000">+1 (000) 000-0000</a>
              <a className="transition-colors hover:text-white" href="#top">Back to top</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between" variants={itemVariants}>
          <p>© {currentYear} Aithentic. All rights reserved.</p>
          <p>Built for modern search, AI discovery, and measurable growth.</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}