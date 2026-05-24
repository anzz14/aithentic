"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function VisibilityBoostSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      className="visibility-boost relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.08),transparent_26%),linear-gradient(180deg,#171717_0%,#151515_100%)]"
      id="visibility-boost"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="visibility-boost__inner" variants={containerVariants}>
        <motion.div className="visibility-boost__media" aria-hidden="true" variants={itemVariants}>
          <img
            className="visibility-boost__image"
            src="/Untitled%20design%20(14).png"
            alt=""
            loading="lazy"
          />
        </motion.div>

        <motion.div className="visibility-boost__body" variants={containerVariants}>
          <motion.div className="visibility-boost__content" variants={itemVariants}>
            <h2 className="visibility-boost__title">Be on the Top & Get More Traffic to Your Website</h2>
            <p className="visibility-boost__copy">
              Stay ahead of the curve with our proven AI-first strategies for more traffic and
              ultimately more leads. Your brand&apos;s visibility on every platform is our #1 goal.
            </p>
          </motion.div>

          <motion.div className="visibility-boost__stats" aria-label="Performance highlights" variants={containerVariants}>
            <motion.div className="visibility-boost__stat" variants={itemVariants}>
              <span className="visibility-boost__value">20+</span>
              <span className="visibility-boost__label">Happy clients</span>
            </motion.div>
            <motion.div className="visibility-boost__stat" variants={itemVariants}>
              <span className="visibility-boost__value">100+</span>
              <span className="visibility-boost__label">Finished projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
