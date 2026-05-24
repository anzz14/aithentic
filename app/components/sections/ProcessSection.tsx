"use client";

import type { CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Discovery & Audit",
    description:
      "We identify what’s limiting your visibility, where opportunities are being missed, and what’s actually driving growth in your market.",
    tags: ["Audit", "Opportunity Mapping"],
  },
  {
    title: "Setting The Direction",
    description:
      "We create a 90-day roadmap where every action has a clear growth direction backed by search data, audience behavior, competitor gaps, and platform trends.",
    tags: ["Roadmap", "Search Data"],
  },
  {
    title: "Execution",
    description:
      "We take approval and execute whatever the plan calls for. Execution with strategy means everything goes in the right direction.",
    tags: ["Execution", "Strategy"],
  },
  {
    title: "Scaling What Works",
    description:
      "We stick around to track performance, improving weak points, and doubling down on what brings traffic, leads, and revenue.",
    tags: ["Scale", "Performance"],
  },
];

const stepAccents = ["#fb923c", "#f97316", "#ea580c", "#d97706"];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      className="process relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]"
      id="process"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="process__inner" variants={containerVariants}>
        <motion.div className="process__eyebrowRow" variants={itemVariants}>
          <span className="process__eyebrowLine" aria-hidden="true" />
          <span className="process__eyebrow">OUR PROCESS</span>
        </motion.div>

        <motion.div className="process__header" variants={itemVariants}>
          <span className="process__introKicker">A smarter path to growth</span>
          <h2 className="process__title">A clear flow from audit to scale.</h2>
          <p className="process__subtitle">
            Every stage feeds the next one, so your strategy, execution, and results stay aligned
            as a single growth system.
          </p>
        </motion.div>

        <motion.div className="process-flow" aria-label="Project delivery process" variants={containerVariants}>
          <span className="process-flow__lane" aria-hidden="true" />

          {steps.map((step, index) => (
            <motion.div key={step.title} className="process-flow__item" variants={itemVariants}>
              <article
                className="process-flow__node"
                style={{ ["--step-accent" as const]: stepAccents[index] } as CSSProperties}
              >
                <div className="process-flow__top">
                  <span className="process-flow__number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="process-flow__step">Step</span>
                </div>

                <h3 className="process-flow__heading">{step.title}</h3>
                <p className="process-flow__description">{step.description}</p>

                <div className="process-flow__tags">
                  {step.tags.map((tag) => (
                    <span key={tag} className="process-flow__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              {index < steps.length - 1 ? (
                <div className="process-flow__connector" aria-hidden="true">
                  <span className="process-flow__connectorLine" />
                  <span className="process-flow__connectorArrow" />
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
