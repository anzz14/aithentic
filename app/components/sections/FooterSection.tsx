"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";

type FooterSectionProps = {
  fullPage?: boolean;
};

export function FooterSection({ fullPage = false }: FooterSectionProps) {
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

  const footerClassName = fullPage
    ? "w-full bg-[linear-gradient(180deg,#111111_0%,#0c0c0c_100%)] px-0 py-0"
    : "px-5 py-10 sm:px-8 lg:px-12 lg:py-12 bg-[linear-gradient(180deg,#111111_0%,#0c0c0c_100%)]";

  const panelClassName = fullPage
    ? "mx-auto flex w-full max-w-none flex-col gap-5 rounded-none border-0 bg-white/5 p-3 shadow-none backdrop-blur-md sm:p-5 lg:p-6"
    : "mx-auto w-full max-w-6xl rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-8 lg:p-10";

  const contentGridClassName = fullPage
    ? "grid gap-5 lg:grid-cols-[1.15fr_0.9fr_0.9fr] lg:gap-7"
    : "grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-10";

  const bottomClassName = fullPage
    ? "mt-auto flex flex-col gap-2 border-t border-white/10 pt-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
    : "mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between";

  return (
    <motion.footer
      ref={ref}
      className={footerClassName}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className={panelClassName} variants={itemVariants}>
        <motion.div className={contentGridClassName} variants={containerVariants}>
          <motion.div className="grid gap-4" variants={itemVariants}>
            <a className="inline-flex w-fit items-center" href="#top" aria-label="Aithentic home">
              <Image
                src="/2cd2e690-fab4-47c5-bfe3-d7794adc0b2c.png"
                alt="Aithentic"
                width={200}
                height={150}
                className="h-20 w-auto sm:h-28"
                priority
              />
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
              <a className="transition-colors hover:text-white" href="mailto:contact@aithentic.in">contact@aithentic.in</a>
              <a className="transition-colors hover:text-white" href="tel:+917021091516">+91 70210 91516</a>
              <a className="transition-colors hover:text-white inline-flex items-center gap-2" href="https://wa.me/7021091516" target="_blank" rel="noopener noreferrer">
                <Phone size={16} />
                WhatsApp
              </a>
              <a className="transition-colors hover:text-white" href="#top">Back to top</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className={bottomClassName} variants={itemVariants}>
          <p>© {currentYear} Aithentic. All rights reserved.</p>
          <p>Built for modern search, AI discovery, and measurable growth.</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}