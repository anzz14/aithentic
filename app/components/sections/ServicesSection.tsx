import type { CSSProperties } from "react";
import {
  LayoutGrid,
  Megaphone,
  PenLine,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

const services = [
  {
    title: "Full-Stack SEO",
    description:
      "Improve visibility across Google and AI-driven search platforms through strategic SEO.",
    bullets: ["Technical SEO", "AI Search Visibility", "AEO & GEO"],
    icon: Search,
  },
  {
    title: "Content Writing",
    description:
      "Content systems to attract high-intent traffic and build authority in your niche on search and answer engines.",
    bullets: ["SEO Blogs", "Website Copy", "Thought Leadership"],
    icon: PenLine,
  },
  {
    title: "Performance Advertising",
    description:
      "Data-driven paid ad campaigns to focus on lead generation and measurable ROI across digital channels.",
    bullets: ["Meta & Google Ads", "Funnel Optimization", "Retargeting Systems"],
    icon: Megaphone,
  },
  {
    title: "App Store Optimization",
    description:
      "Boost app visibility and search rankings through targeted optimization strategies on app stores.",
    bullets: ["Keyword Research", "Store Optimization", "Competitor Tracking"],
    icon: Smartphone,
  },
  {
    title: "Branding & Strategy",
    description:
      "Build brand narratives and positioning that communicate clearly and stand out in crowded markets.",
    bullets: ["Messaging Strategy", "Brand Identity", "GTM Alignment"],
    icon: LayoutGrid,
  },
  {
    title: "AI Content Creation",
    description:
      "AI-generated content that represents the brand, feels native to the platform, and holds attention.",
    bullets: ["AI Video Content", "Social Media Creatives", "Short-Form Content"],
    icon: Sparkles,
  },
] as const satisfies ReadonlyArray<{
  title: string;
  description: string;
  bullets: readonly string[];
  icon: LucideIcon;
}>;

export function ServicesSection() {
  return (
    <section
      className="services relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_30%),linear-gradient(180deg,#1d1d1d_0%,#171717_100%)]"
      id="services"
    >
      <div className="services__inner">
        <div className="services__headingRow">
          <div className="services__labelWrap">
            <span className="services__labelLine" aria-hidden="true" />
            <span className="services__label">WHAT WE DO</span>
          </div>

          <div className="services__intro">
            <h2 className="services__title">Visibility Across Every Platform</h2>
            <p className="services__subline">
              We combine AI-driven growth strategies for all platforms to outperform competitors
              and maximize your digital impact.
            </p>
          </div>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card"
              style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties}
            >
              <div className="service-card__top">
                <span className="service-card__pill">Service</span>
                <span className="service-card__iconWrap" aria-hidden="true">
                  <service.icon size={18} strokeWidth={2.15} />
                </span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">
                {service.description}
              </p>
              <ul className="service-card__features">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="service-card__feature">
                    <span className="service-card__dot" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a className="service-card__link" href="#contact">Learn more ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
