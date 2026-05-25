"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BarChart3, Megaphone, LayoutGrid, Gauge, LineChart, ChevronDown } from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "₹10M+", label: "Ad Spend Managed" },
  { value: "High", label: "High-Performing Lead Campaigns" },
  { value: "Multi-Industry", label: "Advertising Expertise" },
  { value: "Lower CPA", label: "Cost Per Acquisition Strategies" },
] as const;

const problems = [
  "High cost-per-lead",
  "Poor audience targeting",
  "Weak ad creatives",
  "Low conversion rates",
  "No funnel optimization",
  "Wasted ad spend",
] as const;

const services = [
  { title: "Google Ads Management", desc: "Search, Display, YouTube and Shopping campaigns.", icon: BarChart3 },
  { title: "Meta Ads Management", desc: "Facebook & Instagram campaigns, lead gen and retargeting.", icon: Megaphone },
  { title: "Funnel Optimization", desc: "Landing pages, tracking and CRO improvements.", icon: Gauge },
  { title: "Retargeting Campaigns", desc: "Dynamic remarketing and multi-platform retargeting.", icon: LineChart },
  { title: "Creative Strategy", desc: "Ad copy, video concepts and scroll-stopping creatives.", icon: LayoutGrid },
  { title: "Analytics & Reporting", desc: "ROI tracking, dashboards and performance insights.", icon: BarChart3 },
] as const;

const detailSections = [
  {
    title: "Google Ads Management",
    content:
      "We create and optimize Google Ads campaigns designed to attract high-intent users actively searching for your products or services.",
    features: ["Search Campaigns", "Display Advertising", "Shopping Ads", "YouTube Ads", "Keyword Strategy", "Conversion Tracking"],
    cta: "Scale with Google Ads",
  },
  {
    title: "Meta Ads Management",
    content:
      "Build high-converting Facebook and Instagram campaigns that generate leads, sales, and brand awareness.",
    features: ["Facebook Ads", "Instagram Campaigns", "Audience Targeting", "Retargeting Systems", "Ad Creative Optimization", "Lead Generation Funnels"],
    cta: "Launch Meta Campaigns",
  },
  {
    title: "Funnel Optimization",
    content:
      "Improve every stage of your marketing funnel to increase conversions and maximize advertising ROI.",
    features: ["Landing Page Optimization", "CRO Improvements", "Funnel Analysis", "Heatmap Insights", "CTA Optimization", "Conversion Tracking"],
    cta: "Optimize Funnel Performance",
  },
] as const;

const processSteps = ["Research & Strategy", "Campaign Setup", "Optimization", "Scaling"] as const;

const processDescriptions = [
  "Audience research, competitor analysis, and campaign planning.",
  "Ad account setup, tracking implementation, and creative deployment.",
  "Continuous testing of audiences, creatives, and campaign performance.",
  "Scaling profitable campaigns while improving ROI and lowering acquisition costs.",
] as const;

const platforms = ["Google Ads", "Meta Business Suite", "YouTube Ads", "LinkedIn Ads", "TikTok Ads", "Display Networks"] as const;

const industries = ["SaaS", "eCommerce", "Real Estate", "Healthcare", "Finance", "Education", "Mobile Apps", "Local Businesses"] as const;

const caseStudies = [
  { brand: "SaaS Brand", result: "3X Increase in Qualified Leads" },
  { brand: "eCommerce Store", result: "5.2 ROAS Achieved" },
  { brand: "Local Business", result: "40% Lower Cost Per Lead" },
  { brand: "App Brand", result: "Scaled User Acquisition Profitably" },
] as const;

const tools = ["Google Ads", "Meta Business Suite", "Google Analytics", "Tag Manager", "Hotjar", "Shopify", "HubSpot"] as const;

const faqs = [
  { q: "What advertising platforms do you manage?", a: "Google, Meta, YouTube, LinkedIn, TikTok and display networks." },
  { q: "How quickly can campaigns generate results?", a: "Often within weeks for lead generation; compounding performance grows over months." },
  { q: "Do you create ad creatives?", a: "Yes — we produce and test ad creatives and copy as part of management." },
  { q: "How is ROI tracked?", a: "Through conversion tracking, ROAS metrics, and custom dashboards." },
  { q: "What budget is recommended?", a: "Budgets vary by industry; we recommend testing budgets to find scalable ROAS." },
  { q: "Do you offer monthly management plans?", a: "Yes — retainers for ongoing campaign optimization are available." },
] as const;

const sectionVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, staggerChildren: 0.08, delayChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function PerformanceAdvertisingPage() {
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
              <BarChart3 className="seo-kicker__icon" size={18} aria-hidden="true" /> Performance Advertising Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>Data-Driven Advertising That Generates Leads & Revenue</motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              Scale your business with ROI-focused advertising campaigns across Google, Meta, and digital platforms designed to increase conversions, lower acquisition costs, and maximize growth.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsContactOpen(true)}>Launch Campaign</button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsAuditOpen(true)}>Get Free Ad Audit</button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span><BarChart3 className="seo-trust__icon" size={14} aria-hidden="true" /> ROI-Focused Campaigns</span>
              <span><Megaphone className="seo-trust__icon" size={14} aria-hidden="true" /> Performance-Driven Strategies</span>
              <span><LineChart className="seo-trust__icon" size={14} aria-hidden="true" /> Scalable Paid Growth Systems</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <div className="seo-dashboard seo-dashboard--ads">
              <div className="seo-dashboard__row"><BarChart3 size={16} /><span>Ad Dashboard</span></div>
              <div className="seo-dashboard__graph seo-dashboard__graph--ads" />
            </div>
            <motion.div className="seo-float seo-float--one" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY }}><Megaphone size={18} /> ROAS</motion.div>
            <motion.div className="seo-float seo-float--two" animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY }}><Gauge size={18} /> Conversions</motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Campaign Results That Drive Growth</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Metrics that matter</p>
            <h3 className="seo-stats__introTitle">A snapshot of our paid performance.</h3>
            <p className="seo-stats__introCopy">Dark glowing metric cards with animated counters.</p>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Most Ad Campaigns Fail</motion.h2>
        <motion.div className="seo-problem__grid" variants={sectionVariants}>
          <motion.div variants={itemVariants}><ul className="seo-list">{problems.map((p) => <li key={p}>{p}</li>)}</ul></motion.div>
          <motion.div className="seo-problem__visual" aria-hidden="true" variants={itemVariants}><Image className="seo-problem__image" src="/newadd.jpeg" alt="Ad metrics visual" fill sizes="(max-width:1024px) 100vw,50vw" priority={false} /></motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Performance Marketing Built for Scale</motion.h2>
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
                <div className="seo-detail__columns"><article className="seo-detail__columnCard"><h4>Core actions</h4><ul className="seo-detail__featureList">{section.features.slice(0,3).map(f => <li key={f}>{f}</li>)}</ul></article><article className="seo-detail__columnCard"><h4>Supporting actions</h4><ul className="seo-detail__featureList">{section.features.slice(3,6).map(f => <li key={f}>{f}</li>)}</ul></article></div>
                <div className="seo-detail__actions"><button className="seo-btn seo-btn--inline" type="button" onClick={() => setIsAuditOpen(true)}>{`→ ${section.cta}`}</button></div>
              </div>
            </motion.details>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our Performance Marketing Process</motion.h2>
        <motion.div className="seo-timeline" aria-label="Timeline" variants={sectionVariants}>{processSteps.map((step,index) => (<motion.article key={step} className="seo-timeline__step" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}><div className="seo-timeline__dot" aria-hidden="true" /><h3>{`Step ${index+1} — ${step}`}</h3><p>{processDescriptions[index]}</p></motion.article>))}</motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Platforms We Advertise On</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>{platforms.map(p => (<motion.span key={p} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>{p}</motion.span>))}</motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Industries We Serve</motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>{industries.map(ind => (<motion.article key={ind} className="seo-results__card" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}><p className="seo-results__brand">{ind}</p></motion.article>))}</motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Real Campaign Results</motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>{caseStudies.map(item => (<motion.article key={item.brand} className="seo-results__card" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}><p className="seo-results__brand">{item.brand}</p><p className="seo-results__result">{item.result}</p><div className="seo-results__chart" aria-hidden="true" /></motion.article>))}</motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Brands Trust Our Advertising Services</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}><motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">ROI-Driven Campaigns</h3><p className="service-card__description">Conversion-focused strategies and transparent reporting.</p></motion.article><motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">Advanced Targeting</h3><p className="service-card__description">Audience segmentation and creative testing to drive efficiency.</p></motion.article><motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">Creative + Analytics</h3><p className="service-card__description">Creative direction paired with data-led optimization.</p></motion.article></motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Tools We Use</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>{tools.map(t => (<motion.span key={t} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>{t}</motion.span>))}</motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Frequently Asked Questions</motion.h2>
        <motion.div className="seo-faq" variants={sectionVariants}>{faqs.map(faq => (<motion.details key={faq.q} className="seo-faq__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -2 }}><summary>{faq.q}</summary><p>{faq.a}</p></motion.details>))}</motion.div>
      </motion.section>

      <motion.section className="seo-final-cta" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 variants={itemVariants}>Ready to Scale Your Advertising Performance?</motion.h2>
        <motion.p variants={itemVariants}>Launch high-converting advertising campaigns designed to generate leads, increase revenue, and maximize return on ad spend.</motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}><button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>Get Free Ad Audit</button><button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>Schedule Strategy Call</button></motion.div>
      </motion.section>

      <section className="seo-back"><Link href="/#services">Back to services</Link></section>

      <AuditModal open={isAuditOpen} heading="Performance Advertising Audit" initialHelpWith={["Performance Advertising"]} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
