"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  BarChart3,
  Bot,
  Gauge,
  LayoutGrid,
  LineChart,
  ChevronDown,
  Search,
  Sparkles,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "300%", label: "Average Traffic Growth" },
  { value: "5M+", label: "Organic Clicks Generated" },
  { value: "1000+", label: "Keywords Ranked" },
  { value: "Multi-Industry", label: "SEO Expertise" },
] as const;

const pains = [
  "Poor technical SEO",
  "Weak content strategy",
  "No AI search visibility",
  "Slow website performance",
  "Low-quality backlinks",
  "No search intent optimization",
] as const;

const overviewCards = [
  {
    title: "Technical SEO",
    description: "Fix the technical foundations that control crawlability, indexing, speed, and performance.",
    icon: Search,
    items: ["Site audits", "Core Web Vitals", "Indexing fixes", "Schema optimization"],
  },
  {
    title: "AI Search Visibility",
    description: "Build visibility across AI overviews, answer engines, and entity-driven search.",
    icon: Sparkles,
    items: [
      "AI Overview optimization",
      "Generative engine optimization",
      "Entity optimization",
      "AI citation strategy",
    ],
  },
  {
    title: "On-Page SEO",
    description: "Tune page-level signals so search intent, metadata, and internal links work together.",
    icon: Gauge,
    items: [
      "Keyword optimization",
      "Internal linking",
      "Metadata improvements",
      "Search intent alignment",
    ],
  },
  {
    title: "Content SEO",
    description: "Create topical authority with search-led content systems and refresh cycles.",
    icon: LineChart,
    items: ["SEO blogs", "Topic clusters", "Topical authority", "Content optimization"],
  },
  {
    title: "Local SEO",
    description: "Increase map visibility, local relevance, and nearby customer discovery.",
    icon: BarChart3,
    items: [
      "Google Business optimization",
      "Local citations",
      "Maps rankings",
      "Local landing pages",
    ],
  },
  {
    title: "SEO Analytics & Reporting",
    description: "Track what matters with rankings, traffic, and ROI reporting that is easy to read.",
    icon: LayoutGrid,
    items: ["Keyword tracking", "Traffic reporting", "Competitor analysis", "ROI monitoring"],
  },
] as const;

const detailSections = [
  {
    title: "Technical SEO",
    content:
      "We optimize your website infrastructure to improve crawlability, indexing, speed, and search engine performance.",
    features: [
      "Site Architecture Optimization",
      "Core Web Vitals",
      "XML Sitemap & Robots Setup",
      "Schema Markup",
      "Mobile Optimization",
      "Crawl Error Fixes",
    ],
    cta: "Request Technical Audit",
  },
  {
    title: "AI Search Optimization",
    content:
      "Modern search is changing. We optimize your brand for AI-driven search engines, answer engines, and generative experiences.",
    features: [
      "AI Search Visibility",
      "AEO (Answer Engine Optimization)",
      "GEO (Generative Engine Optimization)",
      "Entity-Based SEO",
      "Structured Data Optimization",
      "AI Citation Strategy",
    ],
    cta: "Optimize for AI Search",
  },
  {
    title: "Content SEO",
    content:
      "Build topical authority and attract high-intent traffic with strategic SEO content systems.",
    features: [
      "SEO Blog Writing",
      "Topic Clusters",
      "Keyword Mapping",
      "Internal Linking",
      "Content Refreshing",
      "Search Intent Optimization",
    ],
    cta: "Build Content Strategy",
  },
] as const;

const processSteps = [
  "SEO Audit",
  "Strategy Development",
  "Optimization",
  "Growth & Scaling",
] as const;

const processDescriptions = [
  "Complete technical and content analysis.",
  "Keyword research and growth planning.",
  "Technical fixes, on-page improvements, and content deployment.",
  "Authority building, reporting, and continuous optimization.",
] as const;

const caseStudies = [
  { brand: "SaaS Brand", result: "+420% Organic Traffic" },
  { brand: "eCommerce Store", result: "3X Increase in Revenue" },
  { brand: "Local Business", result: "Top 3 Google Rankings" },
  { brand: "App Platform", result: "80% Growth in Organic Installs" },
] as const;

const tools = [
  "Google Search Console",
  "Google Analytics",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "WordPress",
  "Shopify",
] as const;

const faqs = [
  {
    q: "How long does SEO take?",
    a: "Most campaigns show meaningful movement in 8-12 weeks, with stronger compounding growth over 3-6 months.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No ethical agency can guarantee exact rankings, but we guarantee a structured, data-led process with clear progress reporting.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work across SaaS, local services, eCommerce, apps, and content-led brands with customized SEO execution for each model.",
  },
  {
    q: "Do you optimize for AI search?",
    a: "Yes. We include AI visibility work across answer engines, AI overviews, and citation-driven entity optimization.",
  },
  {
    q: "Do you provide SEO content writing?",
    a: "Yes. We build topic clusters, strategic briefs, and SEO-first content production systems.",
  },
  {
    q: "How is SEO performance measured?",
    a: "We track rankings, impressions, clicks, qualified traffic, and business outcomes like leads and revenue impact.",
  },
] as const;

export default function FullstackSeoPage() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="seo-page">
      <section className="seo-hero">
        <div className="seo-hero__inner">
          <div className="seo-hero__copy">
            <p className="seo-kicker">🚀 Full-Stack SEO Services</p>
            <h1 className="seo-hero__title">Increase Organic Traffic, Rankings & AI Search Visibility</h1>
            <p className="seo-hero__subtitle">
              We help businesses grow through technical SEO, AI search optimization, strategic
              content systems, and data-driven organic growth strategies.
            </p>
            <div className="seo-hero__actions">
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
                Get Free SEO Audit
              </button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
                Book Strategy Call
              </button>
            </div>
            <div className="seo-hero__trust" aria-label="Trust indicators">
              <span>⭐ 100+ Projects</span>
              <span>📈 Millions of Organic Impressions</span>
              <span>🔍 AI + Search Engine Optimization</span>
            </div>
          </div>

          <div className="seo-hero__visual" aria-hidden="true">
            <div className="seo-dashboard">
              <div className="seo-dashboard__row">
                <Search size={16} />
                <span>Ranking Dashboard</span>
              </div>
              <div className="seo-dashboard__graph" />
              <div className="seo-dashboard__bars">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="seo-float seo-float--one"><LineChart size={18} /> Keyword Growth</div>
            <div className="seo-float seo-float--two"><BarChart3 size={18} /> Rankings</div>
            <div className="seo-float seo-float--three"><Bot size={18} /> AI Visibility</div>
          </div>
        </div>
      </section>

      <section className="seo-section seo-stats">
        <h2 className="seo-section__title">SEO Stats / Social Proof</h2>
        <div className="seo-stats__layout">
          <article className="seo-stats__introCard">
            <p className="seo-stats__eyebrow">Proof that compounds</p>
            <h3 className="seo-stats__introTitle">A compact snapshot of the organic growth we build.</h3>
            <p className="seo-stats__introCopy">
              These numbers are the baseline indicators we use to measure visibility, reach, and
              traffic quality across search and AI discovery.
            </p>
          </article>

          <div className="seo-stats__panel">
            <div className="seo-stats__rail">
              {stats.map((item) => (
                <article key={item.label} className="seo-stats__row">
                  <div className="seo-stats__valueWrap">
                    <p className="seo-stats__value">{item.value}</p>
                  </div>
                  <div className="seo-stats__copy">
                    <p className="seo-stats__label">{item.label}</p>
                    <span className="seo-stats__line" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section seo-problem">
        <h2 className="seo-section__title">Why Most Websites Fail to Rank</h2>
        <div className="seo-problem__grid">
          <div>
            <ul className="seo-list">
              {pains.map((pain) => (
                <li key={pain}>{pain}</li>
              ))}
            </ul>
          </div>
          <div className="seo-problem__visual" aria-hidden="true">
            <Image
              className="seo-problem__image"
              src="/newadd.jpeg"
              alt="Newadd visual for the SEO section"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </section>

      <section className="seo-section">
        <h2 className="seo-section__title">Complete SEO Solutions for Modern Search</h2>
        <div className="seo-overview__serviceGrid">
          {overviewCards.map((card) => (
            <article
              key={card.title}
              className="service-card seo-overview__serviceCard"
              style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties}
            >
              <div className="service-card__glow" aria-hidden="true" />
              <div className="seo-overview__titleRow">
                <h3 className="service-card__title">{card.title}</h3>
                <span className="service-card__iconWrap" aria-hidden="true">
                  <card.icon size={18} strokeWidth={2.15} />
                </span>
              </div>
              <p className="service-card__description">{card.description}</p>
              <ul className="service-card__features">
                {card.items.map((item) => (
                  <li key={item} className="service-card__feature">
                    <span className="service-card__dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2 className="seo-section__title">Detailed Service Sections</h2>
        <div className="seo-detail__accordion">
          {detailSections.map((section, index) => (
            <details key={section.title} className={`seo-detail__item${index === 0 ? " is-default" : ""}`}>
              <summary className="seo-detail__summary">
                <span className="seo-detail__summaryTitle">{section.title}</span>
                <ChevronDown size={18} strokeWidth={2.25} aria-hidden="true" />
              </summary>
              <div className="seo-detail__panel">
                <div className="seo-detail__introCard">
                  <p className="seo-detail__eyebrow">What this service includes</p>
                  <p className="seo-detail__copyText">{section.content}</p>
                </div>
                <div className="seo-detail__columns">
                  <article className="seo-detail__columnCard">
                    <h4>Core actions</h4>
                    <ul className="seo-detail__featureList">
                      {section.features.slice(0, 3).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </article>
                  <article className="seo-detail__columnCard">
                    <h4>Supporting actions</h4>
                    <ul className="seo-detail__featureList">
                      {section.features.slice(3, 6).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </article>
                </div>
                <div className="seo-detail__actions">
                  <button className="seo-btn seo-btn--inline" type="button" onClick={() => setIsAuditOpen(true)}>
                    {`→ ${section.cta}`}
                  </button>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2 className="seo-section__title">Our SEO Growth Process</h2>
        <div className="seo-timeline" aria-label="Horizontal timeline with glowing connection lines">
          {processSteps.map((step, index) => (
            <article key={step} className="seo-timeline__step">
              <div className="seo-timeline__dot" aria-hidden="true" />
              <h3>{`Step ${index + 1} — ${step}`}</h3>
              <p>{processDescriptions[index]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2 className="seo-section__title">Real SEO Results</h2>
        <div className="seo-results__grid">
          {caseStudies.map((item) => (
            <article key={item.brand} className="seo-results__card">
              <p className="seo-results__brand">{item.brand}</p>
              <p className="seo-results__result">{item.result}</p>
              <div className="seo-results__chart" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2 className="seo-section__title">Platforms We Work With</h2>
        <div className="seo-tools">
          {tools.map((tool) => (
            <span key={tool} className="seo-tools__item">{tool}</span>
          ))}
        </div>
      </section>

      <section className="seo-section">
        <h2 className="seo-section__title">Frequently Asked Questions</h2>
        <div className="seo-faq">
          {faqs.map((faq) => (
            <details key={faq.q} className="seo-faq__item">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="seo-final-cta">
        <h2>Ready to Grow Your Organic Traffic?</h2>
        <p>
          Build long-term visibility through strategic SEO, AI search optimization, and
          performance-focused organic growth systems.
        </p>
        <div className="seo-hero__actions">
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
            Get Free SEO Audit
          </button>
          <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
            Schedule Consultation
          </button>
        </div>
      </section>

      <section className="seo-back">
        <Link href="/#services">Back to services</Link>
      </section>

      <AuditModal
        open={isAuditOpen}
        heading="Fullstack SEO Audit"
        initialHelpWith={["Fullstack SEO"]}
        onClose={() => setIsAuditOpen(false)}
      />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
