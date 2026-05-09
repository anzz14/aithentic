import { AnimatePresence, motion } from "framer-motion";

import { testimonials } from "../data";

type TestimonialsSectionProps = {
  testimonialIndex: number;
  testimonialTransition: "idle" | "exiting" | "entering";
  onSelect: (index: number) => void;
};

export function TestimonialsSection({
  testimonialIndex,
  testimonialTransition,
  onSelect,
}: TestimonialsSectionProps) {
  const active = testimonials[testimonialIndex];
  const isExiting = testimonialTransition === "exiting";

  const quoteVariants = {
    initial: {
      opacity: 0,
      y: isExiting ? -14 : 14,
      filter: "blur(4px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      y: isExiting ? 14 : -14,
      filter: "blur(4px)",
    },
  };

  return (
    <section
      className="testimonials relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.1),transparent_24%),linear-gradient(180deg,#171717_0%,#141414_100%)]"
      id="testimonials"
    >
      <div className="testimonials__inner">
        <h2 className="testimonials__title">Don&apos;t Take Our Word For It</h2>
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-0 sm:px-2 lg:px-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={testimonialIndex}
              className="mx-auto w-full max-w-none text-center text-[clamp(1.35rem,2.3vw,1.9rem)] font-semibold leading-[1.35] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-syne)" }}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              aria-live="polite"
            >
              “{active.quote}”
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${testimonialIndex}-meta`}
              className="flex items-center justify-center gap-3 text-sm text-slate-400"
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
              <span>{active.name}</span>
              <span aria-hidden="true">•</span>
              <span>{active.title}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
