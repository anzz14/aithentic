"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Gauge,
  Rocket,
  Star,
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

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FullstackSeoPage() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pageRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(pageRef, { once: true, margin: "-12% 0px -12% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const animatePage = !prefersReducedMotion && isInView;

  return (
    <main className="seo-page" ref={pageRef}>
      <motion.section className="seo-hero" variants={sectionVariants} initial="hidden" animate={animatePage ? "visible" : "hidden"}>
        <motion.div className="seo-hero__inner" variants={itemVariants}>
          <motion.div className="seo-hero__copy" variants={sectionVariants}>
            <motion.p className="seo-kicker" variants={itemVariants}>
              <Rocket className="seo-kicker__icon" size={18} aria-hidden="true" /> Full-Stack SEO Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>Increase Organic Traffic, Rankings & AI Search Visibility</motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              We help businesses grow through technical SEO, AI search optimization, strategic
              content systems, and data-driven organic growth strategies.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
                Get Free SEO Audit
              </button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
                Book Strategy Call
              </button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span><Star className="seo-trust__icon" size={14} aria-hidden="true" /> 100+ Projects</span>
              <span><BarChart3 className="seo-trust__icon" size={14} aria-hidden="true" /> Millions of Organic Impressions</span>
              <span><Bot className="seo-trust__icon" size={14} aria-hidden="true" /> AI + Search Engine Optimization</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <motion.div className="seo-dashboard" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
              <div className="seo-dashboard__row">
                <Search size={16} />
                <span>Ranking Dashboard</span>
              </div>
              <motion.div className="seo-dashboard__graph" animate={prefersReducedMotion ? undefined : { opacity: [0.88, 1, 0.88] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
              <div className="seo-dashboard__bars">
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.15, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.2, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.12, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.28, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }} />
              </div>
            </motion.div>
            <motion.div className="seo-float seo-float--one" animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><LineChart size={18} /> Keyword Growth</motion.div>
            <motion.div className="seo-float seo-float--two" animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><BarChart3 size={18} /> Rankings</motion.div>
            <motion.div className="seo-float seo-float--three" animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }} transition={prefersReducedMotion ? undefined : { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Bot size={18} /> AI Visibility</motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>SEO Stats / Social Proof</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Proof that compounds</p>
            <h3 className="seo-stats__introTitle">A compact snapshot of the organic growth we build.</h3>
            <p className="seo-stats__introCopy">
              These numbers are the baseline indicators we use to measure visibility, reach, and
              traffic quality across search and AI discovery.
            </p>
          </motion.article>

          <motion.div className="seo-stats__panel" variants={itemVariants}>
            <div className="seo-stats__rail">
              {stats.map((item) => (
                <motion.article key={item.label} className="seo-stats__row" variants={itemVariants}>
                  <div className="seo-stats__valueWrap">
                    <p className="seo-stats__value">{item.value}</p>
                  </div>
                  <div className="seo-stats__copy">
                    <p className="seo-stats__label">{item.label}</p>
                    <span className="seo-stats__line" aria-hidden="true" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-problem" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Most Websites Fail to Rank</motion.h2>
        <motion.div className="seo-problem__grid" variants={sectionVariants}>
          <motion.div variants={itemVariants}>
            <ul className="seo-list">
              {pains.map((pain) => (
                <li key={pain}>{pain}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="seo-problem__visual" aria-hidden="true" variants={itemVariants}>
            <Image
              className="seo-problem__image"
              src="/newadd.jpeg"
              alt="Newadd visual for the SEO section"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Complete SEO Solutions for Modern Search</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {overviewCards.map((card) => {
            const cardEl = (
              <motion.article
                className="service-card seo-overview__serviceCard"
                style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties}
                variants={itemVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
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
              </motion.article>
            );

            // Make the Content SEO card navigate to the Content Writing page
            if (card.title === "Content SEO") {
              return (
                <Link key={card.title} href="/services/content-writing">
                  {cardEl}
                </Link>
              );
            }

            return (
              <div key={card.title}>
                {cardEl}
              </div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Detailed Service Sections</motion.h2>
        <motion.div className="seo-detail__accordion" variants={sectionVariants}>
          {detailSections.map((section, index) => (
            <motion.details key={section.title} className={`seo-detail__item${index === 0 ? " is-default" : ""}`} variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
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
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our SEO Growth Process</motion.h2>
        <motion.div className="seo-timeline" aria-label="Horizontal timeline with glowing connection lines" variants={sectionVariants}>
          {processSteps.map((step, index) => (
            <motion.article key={step} className="seo-timeline__step" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <div className="seo-timeline__dot" aria-hidden="true" />
              <h3>{`Step ${index + 1} — ${step}`}</h3>
              <p>{processDescriptions[index]}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Real SEO Results</motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>
          {caseStudies.map((item) => (
            <motion.article key={item.brand} className="seo-results__card" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <p className="seo-results__brand">{item.brand}</p>
              <p className="seo-results__result">{item.result}</p>
              <div className="seo-results__chart" aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Platforms We Work With</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {tools.map((tool) => (
            <motion.span key={tool} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Frequently Asked Questions</motion.h2>
        <motion.div className="seo-faq" variants={sectionVariants}>
          {faqs.map((faq) => (
            <motion.details key={faq.q} className="seo-faq__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-final-cta" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 variants={itemVariants}>Ready to Grow Your Organic Traffic?</motion.h2>
        <motion.p variants={itemVariants}>
          Build long-term visibility through strategic SEO, AI search optimization, and
          performance-focused organic growth systems.
        </motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}>
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
            Get Free SEO Audit
          </button>
          <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
            Schedule Consultation
          </button>
        </motion.div>
      </motion.section>

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
