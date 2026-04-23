export function WhyUsSection() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us__inner">
        <div className="why-us__grid">
          <div className="why-us__copy">
            <h2 className="why-us__title">We Don&apos;t Sell Services. We Sell Outcomes.</h2>
            <p className="why-us__paragraph">
              Every engagement is built around what the work should change in the business.
            </p>
            <p className="why-us__paragraph">
              That means cleaner strategy, sharper execution, and measurable accountability.
            </p>
            <div className="why-us__stats">
              <span className="why-us__stat">98% satisfaction</span>
              <span className="why-us__stat">3.8x avg ROI</span>
              <span className="why-us__stat">30d avg to launch</span>
            </div>
          </div>

          <div className="why-us__values">
            {[
              "Results, Not Hours",
              "Transparent Pricing",
              "Long-Term ROI",
              "Satisfaction Guarantee",
            ].map((title) => (
              <article key={title} className="why-us-card">
                <span className="why-us-card__iconWrap" aria-hidden="true">■</span>
                <div className="why-us-card__body">
                  <h3 className="why-us-card__title">{title}</h3>
                  <p className="why-us-card__description">
                    Outcome-focused delivery with clear value and long-term impact.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
