export function CtaBannerSection() {
  return (
    <section className="cta-banner" id="contact">
      <div className="cta-banner__inner">
        <div className="cta-banner__card">
          <div className="cta-banner__grid" aria-hidden="true" />
          <div className="cta-banner__topLine" aria-hidden="true" />
          <div className="cta-banner__bottomLine" aria-hidden="true" />
          <div className="cta-banner__content">
            <span className="cta-banner__iconWrap" aria-hidden="true">🛡</span>
            <h2 className="cta-banner__title">Ready to Build Something Extraordinary?</h2>
            <p className="cta-banner__paragraph">
              Bring us your goals and constraints. We&apos;ll turn them into a focused plan
              and measurable results.
            </p>
            <div className="cta-banner__actions">
              <button className="cta-banner__button cta-banner__button--primary" type="button">
                Book Free Strategy Call
              </button>
              <button className="cta-banner__button cta-banner__button--secondary" type="button">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
