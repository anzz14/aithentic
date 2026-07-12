"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  BarChart3,
  Search,
  Target,
  Star,
  Gauge,
  LineChart,
  ChevronDown,
  LayoutGrid,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "Millions", label: "Organic App Impressions" },
  { value: "Higher", label: "App Store Rankings" },
  { value: "Better", label: "Install Conversion Rates" },
  { value: "Multi-Category", label: "App Experience" },
] as const;

const problems = [
  "Low app visibility",
  "Poor keyword rankings",
  "Weak app store listings",
  "Low install conversion rates",
  "High dependency on paid ads",
  "Poor ratings & review strategy",
] as const;

const services = [
  {
    title: "App Keyword Research",
    desc: "High-volume keywords, competitor analysis, trend research and keyword mapping.",
    icon: Search,
  },
  {
    title: "Store Listing Optimization",
    desc: "App titles, subtitles, descriptions and metadata that improve discoverability.",
    icon: LayoutGrid,
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Screenshot strategy, preview guidance and CTA improvements to drive installs.",
    icon: Target,
  },
  {
    title: "Ratings & Reviews Strategy",
    desc: "Review acquisition, reputation management and feedback systems.",
    icon: Star,
  },
  {
    title: "Competitor Analysis",
    desc: "Tracking, positioning and ASO gap analysis to uncover growth opportunities.",
    icon: TrendingUp,
  },
  {
    title: "ASO Analytics & Reporting",
    desc: "Keyword tracking, downloads, conversion analytics and ranking reports.",
    icon: BarChart3,
  },
] as const;

const detailSections = [
  {
    title: "App Store Keyword Optimization",
    content:
      "We identify high-impact keywords that improve discoverability and help your app rank for relevant searches.",
    features: [
      "Keyword Research",
      "Search Volume Analysis",
      "Competitor Keyword Tracking",
      "Metadata Optimization",
      "Keyword Mapping",
      "Ranking Monitoring",
    ],
    cta: "Improve App Rankings",
  },
  {
    title: "App Listing Optimization",
    content:
      "Optimize every part of your app listing to increase visibility and maximize install conversion rates.",
    features: [
      "Title Optimization",
      "Description Optimization",
      "Screenshot Strategy",
      "Preview Video Recommendations",
      "Visual Optimization",
      "CTA Enhancements",
    ],
    cta: "Optimize App Listing",
  },
  {
    title: "ASO Conversion Optimization",
    content:
      "Increase the percentage of users who install your app after visiting your app store listing.",
    features: [
      "A/B Testing Recommendations",
      "Creative Optimization",
      "Screenshot Improvements",
      "Install Funnel Analysis",
      "User Experience Insights",
      "Conversion Tracking",
    ],
    cta: "Increase App Installs",
  },
] as const;

const processSteps = ["ASO Audit", "Keyword & Strategy Research", "Listing Optimization", "Growth & Monitoring"] as const;

const processDescriptions = [
  "Analyzing app visibility, rankings, competitors, and listing performance.",
  "Building keyword and positioning strategies aligned with user search behavior.",
  "Improving app titles, descriptions, visuals, and conversion elements.",
  "Tracking rankings, installs, and continuously optimizing for better performance.",
] as const;

const platforms = ["Apple App Store", "Google Play Store", "SaaS Mobile Apps", "Gaming Apps", "Utility Apps", "eCommerce Apps"] as const;

const industries = ["Fintech Apps", "EdTech Apps", "Healthcare Apps", "SaaS Platforms", "Gaming Apps", "eCommerce Apps", "Productivity Apps", "Service Apps"] as const;

const caseStudies = [
  { brand: "SaaS App", result: "+250% Organic Downloads" },
  { brand: "Utility App", result: "Top Keyword Rankings Achieved" },
  { brand: "Gaming App", result: "Higher App Store Visibility" },
  { brand: "eCommerce App", result: "Improved Install Conversion Rate" },
] as const;

const tools = ["App Store Connect", "Google Play Console", "AppTweak", "Sensor Tower", "App Radar", "Firebase", "Google Analytics"] as const;

const faqs = [
  { q: "How long does ASO take to show results?", a: "Early improvements often appear within weeks, with stronger growth compounding over time." },
  { q: "Do you optimize for both iOS and Android?", a: "Yes — we optimize for both the App Store and Google Play." },
  { q: "Can ASO increase organic installs?", a: "Yes. Strong ASO improves visibility and conversion, both of which drive organic installs." },
  { q: "Do you help with screenshots and creatives?", a: "Yes — screenshot and creative recommendations are part of the optimization process." },
  { q: "How are keywords selected?", a: "We use search volume, competition, intent, and competitor analysis to select keywords." },
  { q: "Do you offer monthly ASO management?", a: "Yes — ongoing monthly optimization plans are available." },
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

export default function AppStoreOptimizationPage() {
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
              <Smartphone className="seo-kicker__icon" size={18} aria-hidden="true" /> App Store Optimization Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>
              Increase App Visibility, Rankings & Organic Downloads
            </motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              We help apps rank higher on the App Store and Google Play through strategic ASO, keyword optimization, conversion-focused listings, and data-driven growth strategies.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
                Get ASO Audit
              </button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
                Optimize My App
              </button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span>
                <TrendingUp className="seo-trust__icon" size={14} aria-hidden="true" /> Organic App Growth Strategies
              </span>
              <span>
                <Sparkles className="seo-trust__icon" size={14} aria-hidden="true" /> Conversion-Focused Optimization
              </span>
              <span>
                <Gauge className="seo-trust__icon" size={14} aria-hidden="true" /> iOS & Android ASO Expertise
              </span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <div className="seo-dashboard seo-dashboard--aso">
              <div className="seo-dashboard__row">
                <Smartphone size={16} />
                <span>App Growth Dashboard</span>
              </div>
              <div className="seo-dashboard__graph seo-dashboard__graph--aso" />
              <div className="seo-dashboard__metrics">
                <div className="seo-dashboard__metric"><span className="seo-dashboard__metricValue">120+</span><span className="seo-dashboard__metricLabel">Keywords</span></div>
                <div className="seo-dashboard__metric"><span className="seo-dashboard__metricValue">4.6/5</span><span className="seo-dashboard__metricLabel">Ratings</span></div>
                <div className="seo-dashboard__metric"><span className="seo-dashboard__metricValue">75%</span><span className="seo-dashboard__metricLabel">Installs</span></div>
              </div>
            </div>
            <motion.div
              className="seo-float seo-float--one"
              animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY }}
            >
              <BarChart3 size={18} /> Keywords
            </motion.div>
            <motion.div
              className="seo-float seo-float--two"
              animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <LineChart size={18} /> Downloads
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section seo-stats"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          App Growth Powered by ASO
        </motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Premium dark glowing cards</p>
            <h3 className="seo-stats__introTitle">Visibility, ranking and installs improve together.</h3>
            <p className="seo-stats__introCopy">
              Animated counters and premium metric cards show how ASO compounds app growth.
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

      <motion.section
        className="seo-section seo-problem"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Why Most Apps Struggle to Grow Organically
        </motion.h2>
        <motion.div className="seo-problem__grid" variants={sectionVariants}>
          <motion.div variants={itemVariants}>
            <ul className="seo-list">
              {problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="seo-problem__visual" aria-hidden="true" variants={itemVariants}>
            <img src="/App%20Store%20Optimisation.jpg.jpeg" alt="App Store optimization" className="seo-problem__image seo-problem__image--chart seo-problem__image--aso" />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Complete App Growth Optimization Solutions
        </motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {services.map((card) => (
            <motion.article
              key={card.title}
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
              <p className="service-card__description">{card.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Detailed Service Sections
        </motion.h2>
        <motion.div className="seo-detail__accordion" variants={sectionVariants}>
          {detailSections.map((section, index) => (
            <motion.details
              key={section.title}
              className={`seo-detail__item${index === 0 ? " is-default" : ""}`}
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            >
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

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Our App Growth Process
        </motion.h2>
        <motion.div className="seo-timeline" aria-label="Timeline" variants={sectionVariants}>
          {processSteps.map((step, index) => (
            <motion.article
              key={step}
              className="seo-timeline__step"
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            >
              <div className="seo-timeline__dot" aria-hidden="true" />
              <h3>{`Step ${index + 1} — ${step}`}</h3>
              <p>{processDescriptions[index]}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          ASO for Every Major App Marketplace
        </motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {platforms.map((platform) => (
            <motion.span
              key={platform}
              className="seo-tools__item"
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
            >
              {platform}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          ASO Solutions Across Categories
        </motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>
          {industries.map((industry) => (
            <motion.article
              key={industry}
              className="seo-results__card"
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            >
              <p className="seo-results__brand">{industry}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Real App Growth Results
        </motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>
          {caseStudies.map((item) => (
            <motion.article
              key={item.brand}
              className="seo-results__card"
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            >
              <p className="seo-results__brand">{item.brand}</p>
              <p className="seo-results__result">{item.result}</p>
              <div className="seo-results__chart" aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Why Apps Choose Our ASO Services
        </motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}>
            <h3 className="service-card__title">Data-Driven ASO Strategy</h3>
            <p className="service-card__description">Keyword intelligence, conversion insights and transparent reporting.</p>
          </motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}>
            <h3 className="service-card__title">iOS & Android Expertise</h3>
            <p className="service-card__description">We optimize for both app ecosystems with platform-specific best practices.</p>
          </motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}>
            <h3 className="service-card__title">Scalable Organic Growth</h3>
            <p className="service-card__description">Compounding visibility and install growth that reduces ad dependency.</p>
          </motion.article>
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Tools We Use
        </motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {tools.map((tool) => (
            <motion.span
              key={tool}
              className="seo-tools__item"
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="seo-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <motion.h2 className="seo-section__title" variants={itemVariants}>
          Frequently Asked Questions
        </motion.h2>
        <motion.div className="seo-faq" variants={sectionVariants}>
          {faqs.map((faq) => (
            <motion.details
              key={faq.q}
              className="seo-faq__item"
              variants={itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            >
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-final-cta" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 variants={itemVariants}>Ready to Increase Your App Downloads?</motion.h2>
        <motion.p variants={itemVariants}>
          Improve app rankings, increase visibility, and drive more organic installs with data-driven App Store Optimization strategies.
        </motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}>
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
            Get ASO Audit
          </button>
          <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
            Schedule Consultation
          </button>
        </motion.div>
      </motion.section>

      <section className="seo-back">
        <Link href="/#services">Back to services</Link>
      </section>

      <AuditModal open={isAuditOpen} heading="ASO Audit" initialHelpWith={["App Store Optimization"]} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
