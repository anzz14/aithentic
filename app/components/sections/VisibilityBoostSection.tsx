export function VisibilityBoostSection() {
  return (
    <section
      className="visibility-boost relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.08),transparent_26%),linear-gradient(180deg,#171717_0%,#151515_100%)]"
      id="visibility-boost"
    >
      <div className="visibility-boost__inner">
        <div className="visibility-boost__media" aria-hidden="true">
          <img
            className="visibility-boost__image"
            src="/Untitled%20design%20(2).svg"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="visibility-boost__body">
          <div className="visibility-boost__content">
            <h2 className="visibility-boost__title">Be on the Top & Get More Traffic to Your Website</h2>
            <p className="visibility-boost__copy">
              Stay ahead of the curve with our proven AI-first strategies for more traffic and
              ultimately more leads. Your brand&apos;s visibility on every platform is our #1 goal.
            </p>
          </div>

          <div className="visibility-boost__stats" aria-label="Performance highlights">
            <div className="visibility-boost__stat">
              <span className="visibility-boost__value">20+</span>
              <span className="visibility-boost__label">Happy clients</span>
            </div>
            <div className="visibility-boost__stat">
              <span className="visibility-boost__value">100+</span>
              <span className="visibility-boost__label">Finished projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
