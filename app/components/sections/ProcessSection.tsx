import type { CSSProperties } from "react";

const steps = [
  "Discovery & Strategy",
  "Design & Prototype",
  "Build & Integrate",
  "Launch & Optimize",
];

export function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="process__inner">
        <h2 className="process__title">From Idea to Launch in 4 Clear Steps</h2>
        <div className="process__timeline" aria-label="Project delivery process">
          <div className="process__line" aria-hidden="true" />
          {steps.map((title, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return (
              <article
                key={title}
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
                  <h3 className="process-step__heading">{title}</h3>
                  <p className="process-step__description">
                    A focused stage designed to reduce risk and move your project forward.
                  </p>
                  <div className="process-step__tags">
                    <span className="process-step__tag">Planning</span>
                    <span className="process-step__tag">Execution</span>
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
