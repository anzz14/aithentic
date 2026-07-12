"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  Calendar,
  Users,
  MessageCircle,
  BarChart3,
  Video,
  Target,
  ChevronDown,
  Star,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "Millions+", label: "Social Impressions Generated" },
  { value: "+45%", label: "Increased Engagement Rates" },
  { value: "Consistent", label: "Audience Growth" },
  { value: "Multi-Industry", label: "Social Media Experience" },
] as const;

const pains = [
  "Inconsistent posting schedules",
  "Low engagement rates",
  "Poor content quality",
  "Weak brand positioning",
  "Lack of strategy and direction",
  "Difficulty generating leads and sales",
] as const;

const overviewCards = [
  {
    title: "Social Media Strategy",
    description: "Audience research, competitor analysis, content planning and growth roadmap development.",
    icon: Target,
    items: ["Audience research", "Competitor analysis", "Content planning", "Growth strategy development"],
  },
  {
    title: "Content Creation",
    description: "Platform-specific content: static posts, carousels, reels and branded creatives.",
    icon: Smartphone,
    items: ["Static posts", "Carousels", "Reels & short-form videos", "Branded creatives"],
  },
  {
    title: "Social Media Management",
    description: "Scheduling, publishing workflows and account optimization to keep channels consistent.",
    icon: Calendar,
    items: ["Content scheduling", "Account management", "Publishing workflows", "Platform optimization"],
  },
  {
    title: "Community Management",
    description: "Audience engagement, comment management and message responses to build community.",
    icon: Users,
    items: ["Audience engagement", "Comment management", "Message responses", "Community building"],
  },
  {
    title: "Performance Analytics",
    description: "Reach tracking, engagement analysis and monthly reporting to inform creative decisions.",
    icon: BarChart3,
    items: ["Reach tracking", "Engagement analysis", "Audience insights", "Monthly reporting"],
  },
  {
    title: "Paid Campaign Support",
    description: "Campaign planning, audience targeting and performance monitoring for paid growth.",
    icon: Video,
    items: ["Campaign planning", "Creative recommendations", "Audience targeting", "Performance monitoring"],
  },
] as const;

const detailSections = [
  {
    title: "Social Media Strategy",
    content:
      "Successful social media growth starts with a clear strategy. Our process identifies the right audience, platforms, content themes, and growth opportunities to create a roadmap for sustainable success.",
    features: [
      "Audience Research",
      "Competitor Analysis",
      "Platform Selection",
      "Content Pillars Development",
      "Brand Positioning Strategy",
      "Growth Roadmap Creation",
    ],
    cta: "Build My Social Strategy",
  },
  {
    title: "Content Creation & Creative Production",
    content:
      "Content is the foundation of every successful social presence. We create platform-specific content to capture attention and encourage engagement.",
    features: [
      "Static Graphics",
      "Carousel Design",
      "Reel Production",
      "Video Editing",
      "Caption Writing",
      "Content Calendar Planning",
    ],
    cta: "Create Better Content",
  },
  {
    title: "Social Media Management & Growth",
    content:
      "Managing social media is more than publishing — we handle scheduling, engagement, monitoring and continuous optimization to keep your brand visible.",
    features: [
      "Content Scheduling",
      "Publishing Management",
      "Community Engagement",
      "Direct Message Management",
      "Trend Monitoring",
      "Ongoing Optimization",
    ],
    cta: "Grow My Social Presence",
  },
] as const;

const processSteps = ["Audit & Research", "Strategy Development", "Content Creation & Publishing", "Optimization & Growth"] as const;

const processDescriptions = [
  "Analyzing current social performance, audience behavior, competitors, and content opportunities.",
  "Creating platform-specific growth strategies, content pillars, and engagement plans.",
  "Producing, approving, scheduling, and publishing content consistently.",
  "Tracking performance, identifying opportunities, and continuously improving results.",
] as const;

const caseStudies = [
  { brand: "DTC Brand", result: "+200% Engagement" },
  { brand: "SaaS Company", result: "+3X Leads via Social" },
  { brand: "Local Retailer", result: "Consistent Footfall Growth" },
  { brand: "B2B Services", result: "+150% Brand Mentions" },
] as const;

const platforms = ["Instagram", "LinkedIn", "Facebook", "YouTube", "X", "TikTok"] as const;

const tools = [
  "Meta Business Suite",
  "Buffer",
  "Canva",
  "Adobe Creative Suite",
  "Google Analytics",
  "Notion",
] as const;

const faqs = [
  { q: "Which social media platforms should my business focus on?", a: "We recommend focusing on platforms where your audience is most active; we can help identify the right mix." },
  { q: "How often should we post content?", a: "Posting frequency depends on your goals and resources — we typically recommend a consistent weekly cadence tailored per platform." },
  { q: "Do you create reels and video content?", a: "Yes. We produce short-form video, reels, and other native formats optimized for each platform." },
  { q: "Can social media generate leads for my business?", a: "Yes. With the right strategy and creative, social media can be a reliable lead channel when paired with conversion-focused funnels." },
  { q: "How long does it take to see results?", a: "Most clients begin to see engagement improvements within 6-12 weeks, with compounding growth over months." },
  { q: "Do you provide monthly performance reports?", a: "Yes — we provide clear monthly reports covering reach, engagement, growth, and actionable recommendations." },
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
              <Smartphone className="seo-kicker__icon" size={18} aria-hidden="true" /> Social Media Management Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>Build a Stronger Brand Presence and Drive Consistent Growth on Social Media</motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              We help businesses grow through strategic social media management, content creation, audience engagement, and performance-driven campaigns that increase visibility, build trust, and generate measurable business results.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
                Get Social Media Audit
              </button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
                Grow My Brand
              </button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span><Star className="seo-trust__icon" size={14} aria-hidden="true" /> Consistent Audience Growth</span>
              <span><Target className="seo-trust__icon" size={14} aria-hidden="true" /> Strategy-Driven Content</span>
              <span><Users className="seo-trust__icon" size={14} aria-hidden="true" /> Multi-Platform Social Expertise</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <motion.div className="seo-dashboard" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
              <div className="seo-dashboard__row">
                <BarChart3 size={16} />
                <span>Engagement Dashboard</span>
              </div>
              <motion.div className="seo-dashboard__graph" animate={prefersReducedMotion ? undefined : { opacity: [0.88, 1, 0.88] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
              <motion.div className="seo-dashboard__bars">
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.15, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.2, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.12, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.28, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }} />
              </motion.div>
              <div className="seo-dashboard__metrics">
                <div className="seo-dashboard__metric"><span className="seo-dashboard__metricValue">180%</span><span className="seo-dashboard__metricLabel">Reach</span></div>
                <div className="seo-dashboard__metric"><span className="seo-dashboard__metricValue">25k</span><span className="seo-dashboard__metricLabel">Impressions</span></div>
                <div className="seo-dashboard__metric"><span className="seo-dashboard__metricValue">9.2%</span><span className="seo-dashboard__metricLabel">Engagement</span></div>
              </div>
            </motion.div>
            <motion.div className="seo-float seo-float--one" animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><BarChart3 size={18} /> Reach</motion.div>
            <motion.div className="seo-float seo-float--two" animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Video size={18} /> Creative</motion.div>
            <motion.div className="seo-float seo-float--three" animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }} transition={prefersReducedMotion ? undefined : { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><MessageCircle size={18} /> Engagement</motion.div>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Complete Social Media Growth Solutions</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our Social Growth Process</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Real Social Results</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Platforms We Manage</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {platforms.map((platform) => (
            <motion.span key={platform} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {platform}
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
        <motion.h2 variants={itemVariants}>Ready To Turn Social Media Into A Growth Channel?</motion.h2>
        <motion.p variants={itemVariants}>
          Turn social media into a predictable channel that builds awareness, trust, and leads through consistent strategy, creative, and measurement.
        </motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}>
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
            Get Social Media Audit
          </button>
          <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
            Book Strategy Call
          </button>
        </motion.div>
      </motion.section>

      <section className="seo-back">
        <Link href="/#services">Back to services</Link>
      </section>

      <AuditModal
        open={isAuditOpen}
        heading="Social Media Audit"
        initialHelpWith={["Social Media Management"]}
        onClose={() => setIsAuditOpen(false)}
      />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
