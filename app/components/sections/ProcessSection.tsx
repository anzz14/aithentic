import type { CSSProperties } from "react";

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

export function ProcessSection() {
  return (
    <section
      className="process relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]"
      id="process"
    >
      <div className="process__inner">
        <h2 className="process__title">A smarter path to growth.</h2>
        <p
          style={{
            margin: "-1.25rem auto 3.5rem",
            maxWidth: "58rem",
            color: "var(--color-muted)",
            fontSize: "clamp(0.98rem, 1.8vw, 1.12rem)",
            lineHeight: 1.75,
            textAlign: "center",
          }}
        >
          Helping brands with the intelligence they need to thrive and accelerate their growth.
        </p>
        <div className="process__timeline" aria-label="Project delivery process">
          <div className="process__line" aria-hidden="true" />
          {steps.map((step, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return (
              <article
                key={step.title}
                className={`process-step process-step--${side}`}
                data-process-step
                data-side={side}
                style={{ ["--step-accent" as const]: "#F97316" } as CSSProperties}
              >
                <div className={`process-step__content process-step__content--${side}`}>
                  <div className="process-step__meta">
                    <span className="process-step__number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="process-step__eyebrow">Step</span>
                  </div>
                  <h3 className="process-step__heading">{step.title}</h3>
                  <p className="process-step__description">{step.description}</p>
                  <div className="process-step__tags">
                    {step.tags.map((tag) => (
                      <span key={tag} className="process-step__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="process-step__center" aria-hidden="true">
                  <span className="process-step__dot">•</span>
                </div>
                <div className="process-step__spacer" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
