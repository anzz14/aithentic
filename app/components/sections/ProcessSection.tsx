"use client";

import type { CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { Compass, LineChart, Radar, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    phase: "Understand",
    title: "Discovery & Audit",
    description:
      "We map your current funnel and find exactly where search visibility leaks happen.",
    outcomes: ["SEO + content audit", "Competitor gap map", "High-impact quick wins"],
    icon: Radar,
    tags: ["Audit", "Insights"],
  },
  {
    phase: "Plan",
    title: "Setting The Direction",
    description:
      "We turn findings into a focused 90-day growth roadmap with clear priorities.",
    outcomes: ["Priority matrix", "Content roadmap", "Measurement framework"],
    icon: Compass,
    tags: ["Roadmap", "Search Data"],
  },
  {
    phase: "Build",
    title: "Execution",
    description:
      "Your strategy gets executed across technical, content, and conversion layers in sync.",
    outcomes: ["Technical SEO fixes", "Optimized pages", "On-page + CRO updates"],
    icon: Rocket,
    tags: ["Execution", "Strategy"],
  },
  {
    phase: "Scale",
    title: "Scaling What Works",
    description:
      "We track what drives traffic and revenue, then double down on proven winners.",
    outcomes: ["Weekly insights", "Iteration sprints", "Growth compounding"],
    icon: LineChart,
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
            Every stage feeds the next one, so our strategy, execution, and results stay aligned
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
                <div className="process-flow__glow" aria-hidden="true" />

                <div className="process-flow__top">
                  <span className="process-flow__phase">{step.phase}</span>
                  <span className="process-flow__number">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="process-flow__meta">
                  <span className="process-flow__iconWrap" aria-hidden="true">
                    <step.icon size={16} strokeWidth={2.1} />
                  </span>
                  <span className="process-flow__step">Step</span>
                </div>

                <h3 className="process-flow__heading">{step.title}</h3>
                <p className="process-flow__description">{step.description}</p>

                <ul className="process-flow__outcomes" aria-label={`${step.title} outcomes`}>
                  {step.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

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
