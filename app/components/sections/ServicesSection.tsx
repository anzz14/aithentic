import type { CSSProperties } from "react";

const services = [
  "AI Website Design",
  "SEO & Growth",
  "AI Voice Assistants",
  "Smart Chatbots",
  "Landing Pages",
  "Digital Marketing",
];

export function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__headingRow">
          <div className="services__labelWrap">
            <span className="services__labelLine" aria-hidden="true" />
            <span className="services__label">WHAT WE DO</span>
          </div>

          <div className="services__intro">
            <h2 className="services__title">Services That Move The Needle</h2>
            <p className="services__subline">
              We blend design, automation, and growth strategy to build systems that create
              momentum, not just impressions.
            </p>
          </div>
        </div>

        <div className="services__grid">
          {services.map((title) => (
            <article
              key={title}
              className="service-card"
              style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties}
            >
              <div className="service-card__top">
                <span className="service-card__pill">Service</span>
                <span className="service-card__iconWrap" aria-hidden="true">★</span>
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__description">
                Strategy-first execution tailored to growth and measurable outcomes.
              </p>
              <ul className="service-card__features">
                <li className="service-card__feature"><span className="service-card__dot" aria-hidden="true" /><span>Goal aligned</span></li>
                <li className="service-card__feature"><span className="service-card__dot" aria-hidden="true" /><span>Conversion focused</span></li>
                <li className="service-card__feature"><span className="service-card__dot" aria-hidden="true" /><span>Built to scale</span></li>
              </ul>
              <a className="service-card__link" href="#contact">Learn more ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
