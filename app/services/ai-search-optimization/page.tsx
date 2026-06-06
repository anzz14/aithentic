"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Bot,
  BarChart3,
  ChevronDown,
  Globe,
  Network,
  Radar,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "20+", label: "AI Search Mentions Improved" },
  { value: "100+", label: "Brand Citations Across AI Platforms" },
  { value: "Higher", label: "Increased Organic Discovery Opportunities" },
  { value: "Multi-Industry", label: "Multi-Industry AI Search Experience" },
] as const;

const pains = [
  "No visibility in AI-generated answers",
  "Weak entity recognition signals",
  "Low authority across trusted sources",
  "Poor content structure for AI systems",
  "Inconsistent brand information online",
  "Overreliance on traditional SEO strategies",
] as const;

const overviewCards = [
  {
    title: "Answer Engine Optimization (AEO)",
    description: "Answer-focused content creation, FAQ optimization, structured information architecture, and featured answer opportunities.",
    icon: Search,
    items: ["Answer-focused content creation", "FAQ optimization", "Structured information architecture", "Featured answer opportunities"],
  },
  {
    title: "Generative Engine Optimization (GEO)",
    description: "AI recommendation strategies, brand mention optimization, AI visibility improvement, and generative search positioning.",
    icon: Bot,
    items: ["AI recommendation strategies", "Brand mention optimization", "AI visibility improvement", "Generative search positioning"],
  },
  {
    title: "Entity Optimization",
    description: "Brand entity development, knowledge graph alignment, digital authority signals, and entity consistency management.",
    icon: Network,
    items: ["Brand entity development", "Knowledge graph alignment", "Digital authority signals", "Entity consistency management"],
  },
  {
    title: "Authority Content Development",
    description: "Expert-led content creation, topical authority building, content clusters, and research-backed resources.",
    icon: Sparkles,
    items: ["Expert-led content creation", "Topical authority building", "Content clusters", "Research-backed resources"],
  },
  {
    title: "Citation & Mention Building",
    description: "Digital PR opportunities, industry publication mentions, authority source placements, and trust signal enhancement.",
    icon: Globe,
    items: ["Digital PR opportunities", "Industry publication mentions", "Authority source placements", "Trust signal enhancement"],
  },
  {
    title: "AI Search Analytics & Reporting",
    description: "AI visibility tracking, mention monitoring, authority signal measurement, and performance reporting.",
    icon: BarChart3,
    items: ["AI visibility tracking", "Mention monitoring", "Authority signal measurement", "Performance reporting"],
  },
] as const;

const detailSections = [
  {
    title: "Answer Engine Optimization (AEO)",
    content:
      "Answer engines prioritize content that directly addresses user questions in a trustworthy format. Our AEO services help businesses create and optimize content that search engines can easily understand, extract, and surface within AI-generated responses.",
    features: [
      "Question-Based Content Strategy",
      "FAQ Optimization",
      "Structured Content Formatting",
      "Semantic Search Optimization",
      "Featured Answer Opportunities",
      "Search Intent Mapping",
    ],
    cta: "Improve Answer Engine Visibility",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    content:
      "Generative AI platforms generate recommendations. Our GEO framework strengthens your digital footprint to help AI systems recognize your brand as a trusted source within your industry.",
    features: [
      "AI Visibility Audits",
      "Brand Mention Optimization",
      "Competitive AI Search Analysis",
      "Authority Signal Development",
      "AI Recommendation Strategies",
      "Generative Search Monitoring",
    ],
    cta: "Improve AI Recommendations",
  },
  {
    title: "Entity Optimization",
    content:
      "AI systems rely heavily on entity understanding to determine which brands, people, products, and organizations deserve visibility. We help build stronger entity relationships that improve recognition within AI search ecosystems and knowledge graphs.",
    features: [
      "Brand Entity Development",
      "Entity Consistency Audits",
      "Knowledge Graph Optimization",
      "Digital Footprint Expansion",
      "Authority Signal Alignment",
      "Cross-Platform Consistency",
    ],
    cta: "Strengthen Brand Authority",
  },
  {
    title: "AI Authority Content Development",
    content:
      "AI search rewards expertise. Our content strategies focus on building topical authority through expert resources, thought leadership, original insights, research-backed content, and comprehensive topic coverage.",
    features: [
      "Topic Cluster Development",
      "Authority Content Creation",
      "Research-Based Articles",
      "Expert-Led Resources",
      "Knowledge Hub Development",
      "Content Expansion Strategies",
    ],
    cta: "Build Topical Authority",
  },
] as const;

const processSteps = ["AI Visibility Audit", "Entity & Authority Analysis", "Optimization & Content Development", "Monitoring & Growth"] as const;

const processDescriptions = [
  "Analyzing current brand visibility across ChatGPT, Gemini, Perplexity, Claude, AI Overviews, and other answer engines.",
  "Evaluating brand authority signals, citations, content quality, and entity recognition opportunities.",
  "Implementing AEO, GEO, entity optimization, and authority-building strategies.",
  "Tracking visibility improvements, AI mentions, citations, and recommendation opportunities.",
] as const;

const platforms = ["ChatGPT", "Google AI Overviews", "Gemini", "Grok AI", "Claude", "Perplexity", "Microsoft Copilot"] as const;

const industries = [
  "SaaS Companies",
  "Taxation",
  "Healthcare Brands",
  "Finance Businesses",
  "Real Estate Businesses",
  "CA/CPA Firms",
  "eCommerce Stores",
  "Professional Services",
] as const;

const tools = [
  "ChatGPT",
  "Gemini",
  "Claude",
  "Perplexity",
  "Google Search Console",
  "Semrush",
  "Ahrefs",
  "Schema Markup Tools",
  "Google Analytics",
  "Knowledge Graph APIs",
] as const;

const faqs = [
  { q: "What is AI Search Optimization (AISO)?", a: "AISO improves how AI systems understand, cite, and recommend your brand across answer engines and generative platforms." },
  { q: "How is AISO different from traditional SEO?", a: "AISO goes beyond ranking pages and focuses on entity signals, answer readiness, and AI recommendation visibility." },
  { q: "What is Answer Engine Optimization (AEO)?", a: "AEO structures content so AI systems can extract direct answers from it." },
  { q: "What is Generative Engine Optimization (GEO)?", a: "GEO helps your brand show up in AI-generated recommendations by improving trust, authority, and mention signals." },
  { q: "Can AI search generate leads and customers?", a: "Yes. When your brand is visible in AI recommendations and citations, it can create qualified discovery and lead opportunities." },
  { q: "How do you measure AI search visibility?", a: "We track mentions, citations, recommendation appearances, authority signals, platform visibility, and reporting over time." },
  { q: "Which AI platforms do you optimize for?", a: "We optimize for ChatGPT, Google AI Overviews, Gemini, Grok AI, Claude, Perplexity, and Microsoft Copilot." },
  { q: "How long does it take to see results?", a: "Some improvements can appear within weeks, while stronger authority and recommendation gains usually build over months." },
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

export default function AiSearchOptimizationPage() {
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
              <Radar className="seo-kicker__icon" size={18} aria-hidden="true" /> AI Search Optimization (AISO) Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>Get Your Brand Recommended by AI Search Engines</motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              Search is changing. Users are moving to ChatGPT, Gemini, Claude, Perplexity, AI Overviews, and other answer engines instead of traditional search results. Our AI Search Optimization services help brands improve visibility across every AI-powered platform.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
                Get AI Visibility Audit
              </button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
                Improve AI Rankings
              </button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span><Star className="seo-trust__icon" size={14} aria-hidden="true" /> AI Search Expertise</span>
              <span><BarChart3 className="seo-trust__icon" size={14} aria-hidden="true" /> Visibility Across Answer Engines</span>
              <span><Sparkles className="seo-trust__icon" size={14} aria-hidden="true" /> Future-Proof Search Strategy</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <motion.div className="seo-dashboard" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
              <div className="seo-dashboard__row">
                <Bot size={16} />
                <span>AI Recommendation Dashboard</span>
              </div>
              <motion.div className="seo-dashboard__graph" animate={prefersReducedMotion ? undefined : { opacity: [0.88, 1, 0.88] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
              <motion.div className="seo-dashboard__bars">
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.15, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.2, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.12, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }} />
                <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.28, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }} />
              </motion.div>
            </motion.div>
            <motion.div className="seo-float seo-float--one" animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Bot size={18} /> ChatGPT</motion.div>
            <motion.div className="seo-float seo-float--two" animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Globe size={18} /> Gemini</motion.div>
            <motion.div className="seo-float seo-float--three" animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }} transition={prefersReducedMotion ? undefined : { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Radar size={18} /> Perplexity</motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Visibility Beyond Traditional Search</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Proof that compounds</p>
            <h3 className="seo-stats__introTitle">A compact snapshot of the AI visibility we build.</h3>
            <p className="seo-stats__introCopy">
              Premium dark glowing cards displaying AI citations, brand mentions, authority signals, and visibility growth metrics.
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Most Brands Are Invisible In AI Search</motion.h2>
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
              alt="Traditional search transforming into AI-powered recommendations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Complete AI Search Visibility Solutions</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {overviewCards.map((card) => (
            <motion.article
              key={card.title}
              className="service-card seo-overview__serviceCard"
              style={{ ["--service-accent" as const]: "#7C3AED" } as CSSProperties}
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our AI Search Optimization Process</motion.h2>
        <motion.div className="seo-timeline" aria-label="Connected AI ecosystem timeline" variants={sectionVariants}>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Visibility Across Leading AI Search Platforms</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {platforms.map((platform) => (
            <motion.span key={platform} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {platform}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>AI Search Solutions Across Industries</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {industries.map((industry) => (
            <motion.span key={industry} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Brands Choose Our AISO Services</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {[
            "Specialized AI Search Expertise",
            "Future-Focused Search Strategies",
            "Proven Authority Building Frameworks",
            "Entity Optimization Specialists",
            "Data-Driven Visibility Tracking",
            "Transparent Reporting & Insights",
          ].map((feature) => (
            <motion.article key={feature} className="service-card seo-overview__serviceCard" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
              <div className="service-card__glow" aria-hidden="true" />
              <div className="seo-overview__titleRow">
                <h3 className="service-card__title">{feature}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>The Core Pillars Of AI Search Visibility</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {[
            { title: "AEO", copy: "Optimize content for answer engines and AI-generated responses.", icon: Search },
            { title: "GEO", copy: "Improve visibility within generative AI recommendations.", icon: Bot },
            { title: "Entity SEO", copy: "Strengthen brand recognition across AI ecosystems.", icon: Network },
            { title: "Authority Building", copy: "Increase trust signals that influence AI recommendations.", icon: Star },
            { title: "Citation Building", copy: "Expand mentions across trusted industry sources.", icon: Globe },
            { title: "Knowledge Graph Optimization", copy: "Improve entity relationships and discoverability.", icon: Radar },
          ].map((card) => (
            <motion.article key={card.title} className="service-card seo-overview__serviceCard" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
              <div className="service-card__glow" aria-hidden="true" />
              <div className="seo-overview__titleRow">
                <h3 className="service-card__title">{card.title}</h3>
                <span className="service-card__iconWrap" aria-hidden="true">
                  <card.icon size={18} strokeWidth={2.15} />
                </span>
              </div>
              <p className="service-card__description">{card.copy}</p>
            </motion.article>
          ))}
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
        <motion.h2 variants={itemVariants}>Ready To Become Visible In AI Search?</motion.h2>
        <motion.p variants={itemVariants}>
          Position your brand for the future of search with AI Search Optimization strategies designed to improve visibility, authority, citations, and recommendations across leading AI platforms.
        </motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}>
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
            Get AI Visibility Audit
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
        heading="AI Visibility Audit"
        initialHelpWith={[
          "AI Search Optimization",
          "Answer Engine Optimization",
          "Generative Engine Optimization",
        ]}
        onClose={() => setIsAuditOpen(false)}
      />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
