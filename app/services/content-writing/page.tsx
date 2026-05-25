"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  FileText,
  PenTool,
  BarChart3,
  Sparkles,
  LayoutGrid,
  ChevronDown,
  Edit3,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "500+", label: "SEO Articles Published" },
  { value: "5M+", label: "Organic Traffic Generated" },
  { value: "High-Intent", label: "Content Systems" },
  { value: "Multi-Niche", label: "Writing Expertise" },
] as const;

const problems = [
  "Content without strategy",
  "Low search visibility",
  "Weak search intent targeting",
  "Poor engagement",
  "Generic AI-generated articles",
  "No conversion structure",
] as const;

const services = [
  {
    title: "SEO Blog Writing",
    desc: "Search-optimized articles to attract qualified traffic and build topical authority.",
    icon: FileText,
  },
  {
    title: "Website Copywriting",
    desc: "Homepage, service pages and landing copy focused on conversions and clarity.",
    icon: PenTool,
  },
  {
    title: "Thought Leadership Content",
    desc: "Founder branding, LinkedIn and industry articles that build authority.",
    icon: Edit3,
  },
  {
    title: "AI Search Optimized Content",
    desc: "AEO, entity-focused content and featured snippet optimization for AI discovery.",
    icon: Sparkles,
  },
  {
    title: "Content Strategy",
    desc: "Topic clusters, keyword mapping and funnel-based content planning.",
    icon: LayoutGrid,
  },
  {
    title: "Content Refresh & Optimization",
    desc: "Update old content, improve CTR and internal linking for quick wins.",
    icon: BarChart3,
  },
] as const;

const detailSections = [
  {
    title: "SEO Blog Writing",
    content:
      "We create strategic blog content designed to rank on Google, attract qualified traffic, and build long-term topical authority.",
    features: [
      "Keyword Research",
      "SEO Optimization",
      "Search Intent Mapping",
      "Internal Linking",
      "Content Structure Optimization",
      "AI Search Visibility",
    ],
    cta: "Build SEO Content",
  },
  {
    title: "Website Copywriting",
    content:
      "Clear, persuasive website copy that communicates value, improves engagement, and increases conversions.",
    features: [
      "Homepage Copy",
      "Service Pages",
      "Landing Pages",
      "Sales Messaging",
      "Brand Voice Alignment",
      "Conversion Optimization",
    ],
    cta: "Improve Website Messaging",
  },
  {
    title: "Thought Leadership Content",
    content:
      "Position your brand as an industry authority through expert-driven content strategies.",
    features: [
      "Founder Branding",
      "LinkedIn Content",
      "Expert Articles",
      "Authority Building",
      "Industry Insights",
      "Personal Brand Positioning",
    ],
    cta: "Build Authority",
  },
] as const;

const processSteps = ["Research", "Strategy", "Content Creation", "Optimization & Scaling"] as const;

const processDescriptions = [
  "Audience analysis, competitor research, and keyword discovery.",
  "Building content plans aligned with business goals and search intent.",
  "Writing optimized, engaging, and conversion-focused content.",
  "Continuous updates, SEO improvements, and performance tracking.",
] as const;

const contentTypes = [
  "SEO Blogs",
  "Website Copy",
  "Landing Pages",
  "Case Studies",
  "Product Descriptions",
  "Social Media Content",
  "Email Content",
  "Thought Leadership Articles",
] as const;

const industries = [
  "SaaS",
  "Finance",
  "Healthcare",
  "Real Estate",
  "eCommerce",
  "Education",
  "Mobile Apps",
  "Agencies",
] as const;

const caseStudies = [
  { brand: "SaaS Brand", result: "+350% Organic Traffic Growth" },
  { brand: "Finance Blog", result: "100K+ Monthly Organic Visitors" },
  { brand: "Local Business", result: "Top Ranking Service Pages" },
  { brand: "App Brand", result: "Higher Conversion Landing Pages" },
] as const;

const tools = [
  "Google Search Console",
  "Ahrefs",
  "SEMrush",
  "Surfer SEO",
  "Grammarly",
  "Notion",
  "WordPress",
] as const;

const faqs = [
  { q: "How long does content take to rank?", a: "Depends on competition and intent — 3-6 months for measurable movement, longer for compounding authority." },
  { q: "Do you write SEO-optimized articles?", a: "Yes — we combine research, briefs, and editorial QA to produce SEO-first content." },
  { q: "Can you match our brand voice?", a: "We build voice guides and review rounds to match tone and messaging." },
  { q: "Do you provide keyword research?", a: "Yes — keyword mapping and topic cluster planning are included in strategy packages." },
  { q: "Is AI used in the writing process?", a: "We use AI as an assistant for research and optimization, but content is human-led and quality-reviewed." },
  { q: "Do you offer monthly content retainers?", a: "Yes — scalable retainers for ongoing content and optimization are available." },
] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, staggerChildren: 0.08, delayChildren: 0.08 } },
};

const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ContentWritingPage() {
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
              <FileText className="seo-kicker__icon" size={18} aria-hidden="true" /> Strategic Content Writing Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>Content That Ranks, Builds Authority & Converts</motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              We create SEO-focused, high-intent content systems designed to attract organic traffic, strengthen brand authority, and generate measurable business growth.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
                Get Content Strategy
              </button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
                Book Consultation
              </button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span><BarChart3 className="seo-trust__icon" size={14} aria-hidden="true" /> Millions of Organic Impressions</span>
              <span><FileText className="seo-trust__icon" size={14} aria-hidden="true" /> SEO + Conversion-Focused Writing</span>
              <span><Sparkles className="seo-trust__icon" size={14} aria-hidden="true" /> Multi-Industry Content Expertise</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <div className="seo-dashboard seo-dashboard--content">
              <div className="seo-dashboard__row">
                <FileText size={16} />
                <span>Content Dashboard</span>
              </div>
              <div className="seo-dashboard__graph seo-dashboard__graph--content" />
            </div>
            <motion.div className="seo-float seo-float--one" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY }}><BarChart3 size={18} /> Keyword Growth</motion.div>
            <motion.div className="seo-float seo-float--two" animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY }}><Sparkles size={18} /> AI Visibility</motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Results Driven Content Marketing</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Design-forward, results-driven</p>
            <h3 className="seo-stats__introTitle">A snapshot of content outcomes we deliver.</h3>
            <p className="seo-stats__introCopy">Dark glowing statistic cards with hover animations highlight our publishing scale and traffic impact.</p>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Most Content Fails</motion.h2>
        <motion.div className="seo-problem__grid" variants={sectionVariants}>
          <motion.div variants={itemVariants}>
            <ul className="seo-list">
              {problems.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="seo-problem__visual" aria-hidden="true" variants={itemVariants}>
            <Image className="seo-problem__image" src="/new.jpeg" alt="Content problem visual" fill sizes="(max-width: 1024px) 100vw, 50vw" priority={false} />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Content Systems Built for Growth</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {services.map((card) => (
            <motion.article key={card.title} className="service-card seo-overview__serviceCard" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
              <div className="service-card__glow" aria-hidden="true" />
              <div className="seo-overview__titleRow">
                <h3 className="service-card__title">{card.title}</h3>
                <span className="service-card__iconWrap" aria-hidden="true"><card.icon size={18} strokeWidth={2.15} /></span>
              </div>
              <p className="service-card__description">{card.desc}</p>
            </motion.article>
          ))}
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our Content Creation Process</motion.h2>
        <motion.div className="seo-timeline" aria-label="Timeline" variants={sectionVariants}>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Content Formats We Create</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {contentTypes.map((c) => (
            <motion.span key={c} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {c}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Industries We Serve</motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>
          {industries.map((ind) => (
            <motion.article key={ind} className="seo-results__card" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <p className="seo-results__brand">{ind}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Content That Delivers Results</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Brands Choose Our Content Services</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}>
            <h3 className="service-card__title">SEO + Conversion Focused</h3>
            <p className="service-card__description">Human-led strategic writing with AI-optimized signals and measurable outcomes.</p>
          </motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}>
            <h3 className="service-card__title">Scalable Content Systems</h3>
            <p className="service-card__description">Topic clusters, editorial calendars and team processes to scale content production.</p>
          </motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}>
            <h3 className="service-card__title">Data-Driven Approach</h3>
            <p className="service-card__description">Performance monitoring, experimentation and continuous optimization.</p>
          </motion.article>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Tools We Use</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {tools.map((t) => (
            <motion.span key={t} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {t}
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
        <motion.h2 variants={itemVariants}>Ready to Build a Content Engine That Drives Growth?</motion.h2>
        <motion.p variants={itemVariants}>Create high-performing content systems that improve visibility, attract qualified traffic, and convert visitors into customers.</motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}>
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>Get Content Strategy</button>
          <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>Schedule Consultation</button>
        </motion.div>
      </motion.section>

      <section className="seo-back"><Link href="/#services">Back to services</Link></section>

      <AuditModal open={isAuditOpen} heading="Content Strategy Audit" initialHelpWith={["Content Writing"]} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
