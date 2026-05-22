type HeroSectionProps = {
  word: string;
  transitionState: "idle" | "exiting" | "entering";
  onOpenAudit?: () => void;
  onOpenContact?: () => void;
};

export function HeroSection({ word, transitionState, onOpenAudit, onOpenContact }: HeroSectionProps) {
  const fluidArtVideo = "/Fluid_art_motion_graphic_202605210015 (online-video-cutter.com).mp4";

  return (
    <main className={`hero hero--${transitionState}`} data-word={word}>
      <video
        className="hero__bgVideo"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={encodeURI(fluidArtVideo)} type="video/mp4" />
      </video>
      <div className="hero__frost" aria-hidden="true" />
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
            <span className="hero__line">Authentic Growth</span>
            <span className="hero__line">For the AI Era</span>
          </h1>

          <p className="hero__copy">
            Scaling brands through high-performance SEO, Website Optimization, and Content Marketing
            that builds long-term trust in the AI era.
          </p>

          <div className="hero__actions">
            <button
              className="cta cta--primary"
              type="button"
              onClick={() => {
                if (onOpenAudit) onOpenAudit();
              }}
            >
              Get Free SEO Audit
            </button>
            <button
              className="cta cta--secondary"
              type="button"
              onClick={() => {
                if (onOpenContact) onOpenContact();
              }}
            >
              Contact Us
            </button>
          </div>
        </section>

        <div className="hero__ticker" aria-label="Agency highlights">
          <div className="hero__ticker-track">
            <div className="hero__ticker-group">
              <span className="hero__ticker-item">20+ clients • 200+ projects delivered • SEO strategy • Technical SEO • Local SEO • Website optimization • Content marketing • Conversion rate optimization • AI-first execution</span>
            </div>
            <div className="hero__ticker-group" aria-hidden="true">
              <span className="hero__ticker-item">20+ clients • 200+ projects delivered • SEO strategy • Technical SEO • Local SEO • Website optimization • Content marketing • Conversion rate optimization • AI-first execution</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
