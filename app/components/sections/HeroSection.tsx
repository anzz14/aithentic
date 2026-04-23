type HeroSectionProps = {
  word: string;
  transitionState: "idle" | "exiting" | "entering";
};

export function HeroSection({ word, transitionState }: HeroSectionProps) {
  return (
    <main className="hero">
      <div className="hero__blob hero__blob--orange" aria-hidden="true" />
      <div className="hero__blob hero__blob--grey" aria-hidden="true" />
      <div className="hero__noise" aria-hidden="true" />

      <div className="hero__shell">
        <div className="hero__badge hero__badge--left" aria-hidden="true">
          <span className="hero__badge-emoji">🟢</span>
          <span>+42% Avg. conversion lift</span>
        </div>

        <div className="hero__badge hero__badge--right" aria-hidden="true">
          <span className="hero__pulse" />
          <span>12 projects live this month</span>
        </div>

        <section className="hero__content">
          <h1 className="hero__headline">
            <span className="hero__line">We Build</span>
            <span className="hero__line hero__line--animated">
              <span className="hero__wordShell" aria-live="polite">
                <span className={`hero__word hero__word--${transitionState}`}>{word}</span>
              </span>
            </span>
            <span className="hero__line">Digital Experiences</span>
          </h1>

          <p className="hero__copy">
            We fuse AI with design craft to build websites, chatbots, and campaigns that don&apos;t
            just look extraordinary - they generate real business results.
          </p>

          <div className="hero__actions">
            <button className="cta cta--primary" type="button">
              Start Your Project →
            </button>
            <button className="cta cta--secondary" type="button">
              View Our Work
            </button>
          </div>

          <div className="hero__stats" aria-label="Agency highlights">
            <span className="hero__stat">Trusted by 50+ businesses</span>
            <span className="hero__divider" aria-hidden="true" />
            <span className="hero__stat">$4M+ in revenue generated</span>
            <span className="hero__divider" aria-hidden="true" />
            <span className="hero__stat">98% satisfaction rate</span>
          </div>
        </section>
      </div>
    </main>
  );
}
