"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  Compass,
  Gauge,
  Layers3,
  Megaphone,
  Palette,
  Radar,
  ChevronDown,
  LineChart,
  Target,
  Sparkles,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "Multi-Industry", label: "Brand Experience" },
  { value: "Scalable", label: "Growth Frameworks" },
  { value: "Founder + Startup", label: "Positioning Expertise" },
  { value: "Strategy-Driven", label: "Market Positioning" },
] as const;

const problems = [
  "Weak brand positioning",
  "Inconsistent messaging",
  "Generic identity",
  "Poor audience connection",
  "Lack of differentiation",
  "No growth strategy alignment",
] as const;

const services = [
  {
    title: "Brand Positioning",
    desc: "Market positioning, differentiation and value proposition work that sharpens your identity.",
    icon: Target,
  },
  {
    title: "Brand Messaging",
    desc: "Messaging frameworks, brand voice and storytelling systems for every touchpoint.",
    icon: Megaphone,
  },
  {
    title: "Go-To-Market Strategy",
    desc: "Launch planning, audience targeting and market entry strategy for growth.",
    icon: Compass,
  },
  {
    title: "Visual Brand Direction",
    desc: "Brand identity guidance, design consistency and creative direction.",
    icon: Palette,
  },
  {
    title: "Audience & Market Research",
    desc: "Customer insights, competitor research and persona development.",
    icon: Radar,
  },
  {
    title: "Growth Strategy Consulting",
    desc: "Business growth systems, marketing alignment and brand expansion planning.",
    icon: BriefcaseBusiness,
  },
] as const;

const detailSections = [
  {
    title: "Brand Positioning",
    content:
      "Create a clear market position that helps your business stand out, communicate value, and attract the right audience.",
    features: [
      "Positioning Strategy",
      "Competitor Analysis",
      "Unique Value Proposition",
      "Audience Alignment",
      "Market Differentiation",
      "Brand Architecture",
    ],
    cta: "Strengthen Brand Positioning",
  },
  {
    title: "Brand Messaging",
    content:
      "Develop consistent messaging systems that communicate your brand clearly across every platform and customer touchpoint.",
    features: [
      "Brand Voice Development",
      "Messaging Frameworks",
      "Storytelling Strategy",
      "Website Messaging",
      "Campaign Messaging",
      "Communication Consistency",
    ],
    cta: "Build Strong Messaging",
  },
  {
    title: "Growth Strategy",
    content:
      "Align branding, marketing, and business strategy to create scalable growth systems for long-term success.",
    features: [
      "GTM Strategy",
      "Funnel Planning",
      "Marketing Alignment",
      "Audience Strategy",
      "Scaling Roadmaps",
      "Growth Consulting",
    ],
    cta: "Build Growth Strategy",
  },
] as const;

const processSteps = ["Discovery", "Research & Strategy", "Brand Development", "Growth Alignment"] as const;

const processDescriptions = [
  "Understanding your business, audience, competitors, and goals.",
  "Developing positioning, messaging, and growth frameworks.",
  "Creating cohesive branding systems and strategic direction.",
  "Aligning branding with marketing and long-term scaling plans.",
] as const;

const industries = ["SaaS", "Startups", "Finance", "Healthcare", "eCommerce", "Agencies", "Real Estate", "Personal Brands"] as const;

const caseStudies = [
  { brand: "Startup Brand", result: "Clear Market Positioning Achieved" },
  { brand: "SaaS Company", result: "Improved Brand Authority & Visibility" },
  { brand: "Personal Brand", result: "Stronger Audience Engagement" },
  { brand: "eCommerce Brand", result: "Higher Conversion Messaging Strategy" },
] as const;

const tools = ["Notion", "Figma", "Miro", "Google Analytics", "SEMrush", "HubSpot", "Canva"] as const;

const faqs = [
  { q: "What is included in branding strategy?", a: "Positioning, messaging, audience research, visual direction, and growth alignment." },
  { q: "Can you help reposition an existing brand?", a: "Yes — we can refine or rebuild brand direction for changing markets." },
  { q: "Do you create brand messaging frameworks?", a: "Yes — messaging systems and voice guidance are part of the strategy work." },
  { q: "Is branding important for startups?", a: "Absolutely. Strong positioning helps startups gain clarity, trust, and traction earlier." },
  { q: "How long does the branding process take?", a: "Timelines vary, but strategy sprints typically range from a few weeks to a few phases." },
  { q: "Do you offer ongoing strategic consulting?", a: "Yes — ongoing brand and growth consulting is available." },
] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, staggerChildren: 0.08, delayChildren: 0.08 },
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

export default function BrandingStrategyPage() {
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
              <Sparkles className="seo-kicker__icon" size={18} aria-hidden="true" /> Branding & Growth Strategy Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>
              Build a Brand That Stands Out & Scales With Confidence
            </motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              We help businesses create strong brand positioning, strategic messaging, and scalable growth systems that connect with the right audience and drive long-term business growth.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsContactOpen(true)}>
                Build My Brand
              </button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsAuditOpen(true)}>
                Schedule Strategy Call
              </button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span>
                <Target className="seo-trust__icon" size={14} aria-hidden="true" /> Strategic Brand Positioning
              </span>
              <span>
                <LineChart className="seo-trust__icon" size={14} aria-hidden="true" /> Growth-Focused Brand Systems
              </span>
              <span>
                <Sparkles className="seo-trust__icon" size={14} aria-hidden="true" /> Modern Digital Brand Expertise
              </span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <div className="seo-dashboard seo-dashboard--brand">
              <div className="seo-dashboard__row">
                <Layers3 size={16} />
                <span>Brand Strategy Dashboard</span>
              </div>
              <div className="seo-dashboard__graph seo-dashboard__graph--brand" />
            </div>
            <motion.div
              className="seo-float seo-float--one"
              animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY }}
            >
              <Target size={18} /> Positioning
            </motion.div>
            <motion.div
              className="seo-float seo-float--two"
              animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Gauge size={18} /> Growth Systems
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Strategic Branding That Drives Growth</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Dark premium cards</p>
            <h3 className="seo-stats__introTitle">Frameworks for brand clarity and scale.</h3>
            <p className="seo-stats__introCopy">Glowing animated counters and premium cards emphasize strategic advantage.</p>
          </motion.article>

          <motion.div className="seo-stats__panel" variants={itemVariants}>
            <div className="seo-stats__rail">
              {stats.map((item) => (
                <motion.article key={item.label} className="seo-stats__row" variants={itemVariants}>
                  <div className="seo-stats__valueWrap"><p className="seo-stats__value">{item.value}</p></div>
                  <div className="seo-stats__copy"><p className="seo-stats__label">{item.label}</p><span className="seo-stats__line" aria-hidden="true" /></div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-problem" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Most Brands Struggle to Grow</motion.h2>
        <motion.div className="seo-problem__grid" variants={sectionVariants}>
          <motion.div variants={itemVariants}><ul className="seo-list">{problems.map((problem) => <li key={problem}>{problem}</li>)}</ul></motion.div>
          <motion.div className="seo-problem__visual" aria-hidden="true" variants={itemVariants}>
            <img src="/Brading%20and%20Stratergy.jpg.jpeg" alt="Branding and strategy" className="seo-problem__image seo-problem__image--brand" />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Complete Brand Growth Solutions</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {services.map((card) => (
            <motion.article key={card.title} className="service-card seo-overview__serviceCard" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
              <div className="service-card__glow" aria-hidden="true" />
              <div className="seo-overview__titleRow"><h3 className="service-card__title">{card.title}</h3><span className="service-card__iconWrap" aria-hidden="true"><card.icon size={18} strokeWidth={2.15} /></span></div>
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
              <summary className="seo-detail__summary"><span className="seo-detail__summaryTitle">{section.title}</span><ChevronDown size={18} strokeWidth={2.25} aria-hidden="true" /></summary>
              <div className="seo-detail__panel">
                <div className="seo-detail__introCard"><p className="seo-detail__eyebrow">What this service includes</p><p className="seo-detail__copyText">{section.content}</p></div>
                <div className="seo-detail__columns"><article className="seo-detail__columnCard"><h4>Core actions</h4><ul className="seo-detail__featureList">{section.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul></article><article className="seo-detail__columnCard"><h4>Supporting actions</h4><ul className="seo-detail__featureList">{section.features.slice(3, 6).map((feature) => <li key={feature}>{feature}</li>)}</ul></article></div>
                <div className="seo-detail__actions"><button className="seo-btn seo-btn--inline" type="button" onClick={() => setIsAuditOpen(true)}>{`→ ${section.cta}`}</button></div>
              </div>
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our Branding & Strategy Process</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Branding Solutions Across Industries</motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>
          {industries.map((industry) => (
            <motion.article key={industry} className="seo-results__card" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <p className="seo-results__brand">{industry}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Brands Built for Growth</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Brands Partner With Us</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">Strategy-First Approach</h3><p className="service-card__description">Clarity before execution, ensuring every decision compounds brand value.</p></motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">Growth-Focused Systems</h3><p className="service-card__description">Brand systems designed to support scaling, not just aesthetics.</p></motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">Consistent Messaging</h3><p className="service-card__description">Multi-channel messaging frameworks that stay aligned over time.</p></motion.article>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Tools We Use</motion.h2>
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
        <motion.h2 variants={itemVariants}>Ready to Build a Stronger Brand?</motion.h2>
        <motion.p variants={itemVariants}>
          Create a brand strategy that improves positioning, strengthens communication, and supports long-term business growth.
        </motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}>
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
            Schedule Brand Consultation
          </button>
          <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
            Build My Brand Strategy
          </button>
        </motion.div>
      </motion.section>

      <section className="seo-back">
        <Link href="/#services">Back to services</Link>
      </section>

      <AuditModal open={isAuditOpen} heading="Brand Strategy Consultation" initialHelpWith={["Branding & Strategy"]} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
