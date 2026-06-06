"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Search,
  Book,
  Zap,
  Globe,
  Server,
  ChevronDown,
  Star,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "AI Mentions ↑", label: "AI Search Mentions Improved" },
  { value: "Citations ↑", label: "Brand Citations Across AI Platforms" },
  { value: "+XX%", label: "Increased Organic Discovery Opportunities" },
  { value: "Multi-Industry", label: "AI Search Experience" },
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
    description: "Answer-focused content, FAQ optimization and structured information for answer engines.",
    icon: Search,
    items: ["Answer-focused content", "FAQ optimization", "Structured formatting", "Featured answer opportunities"],
  },
  {
    title: "Generative Engine Optimization (GEO)",
    description: "Strategies to position your brand within generative AI recommendations and suggestions.",
    icon: Cpu,
    items: ["AI recommendation strategies", "Brand mention optimization", "Generative search positioning", "Visibility improvements"],
  },
  {
    title: "Entity Optimization",
    description: "Build and align brand entities, knowledge graphs and consistent authority signals.",
    icon: Book,
    items: ["Brand entity development", "Knowledge graph alignment", "Authority signals", "Cross-platform consistency"],
  },
  {
    title: "Authority Content Development",
    description: "Research-backed content and topical authority to influence AI recommendations.",
    icon: Zap,
    items: ["Expert resources", "Topic clusters", "Research articles", "Knowledge hubs"],
  },
  {
    title: "Citation & Mention Building",
    description: "Digital PR and placements to increase trusted mentions and citations.",
    icon: Globe,
    items: ["Digital PR", "Industry mentions", "Authority placements", "Citation growth"],
  },
  {
    title: "AI Search Analytics & Reporting",
    description: "Tracking AI visibility, mentions, citations and recommendation performance.",
    icon: Server,
    items: ["AI visibility tracking", "Mention monitoring", "Authority measurement", "Performance reports"],
  },
] as const;

const detailSections = [
  {
    title: "Answer Engine Optimization (AEO)",
    content:
      "Answer engines prioritize concise, trustworthy responses. Our AEO services craft and structure content so AI systems can extract and surface your brand in answers.",
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
      "Generative platforms recommend trusted sources. Our GEO framework strengthens your footprint to be chosen by generative models and assistants.",
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
      "AI systems use entities to identify authoritative sources. We improve entity signals, knowledge graph alignments, and consistency to boost recognition.",
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
      "Topical authority and expert-led content help AI systems favor your brand. We create research-backed resources and knowledge hubs to build trust.",
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

const processSteps = [
  "AI Visibility Audit",
  "Entity & Authority Analysis",
  "Optimization & Content Development",
  "Monitoring & Growth",
] as const;

const processDescriptions = [
  "Analyzing current brand visibility across ChatGPT, Gemini, Perplexity, Claude, AI Overviews, and other answer engines.",
  "Evaluating brand authority signals, citations, content quality, and entity recognition opportunities.",
  "Implementing AEO, GEO, entity optimization, and authority-building strategies.",
  "Tracking visibility improvements, AI mentions, citations, and recommendation opportunities.",
] as const;

const platforms = [
  "ChatGPT",
  "Google AI Overviews",
  "Gemini",
  "Grok AI",
  "Claude",
  "Perplexity",
  "Microsoft Copilot",
] as const;

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
  { q: "What is AI Search Optimization (AISO)?", a: "AISO focuses on improving visibility across AI-powered answer engines and generative recommendation systems." },
  { q: "How is AISO different from traditional SEO?", a: "AISO optimizes for answer extraction, entity recognition and recommendation signals rather than classic ranking factors alone." },
  { q: "What is Answer Engine Optimization (AEO)?", a: "AEO structures content so answer engines can surface your content as concise, trustworthy answers." },
  { q: "What is Generative Engine Optimization (GEO)?", a: "GEO positions your brand within generative AI recommendations through mentions, authority signals, and structured content." },
  { q: "Can AI search generate leads and customers?", a: "Yes — by appearing in answers and recommendations you increase discovery and high-intent visits." },
  { q: "How do you measure AI search visibility?", a: "We track mentions, citations, answer appearances, and recommendation signals across target platforms." },
  { q: "Which AI platforms do you optimize for?", a: "ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, Microsoft Copilot, and others." },
  { q: "How long does it take to see results?", a: "Results vary; some visibility improvements can appear within weeks, while authority-building is a multi-month effort." },
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
              <span aria-hidden="true">🤖</span> AI Search Optimization (AISO) Services
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
              <span><Bar className="seo-trust__icon" size={14} aria-hidden="true" /> Visibility Across Answer Engines</span>
              <span><Zap className="seo-trust__icon" size={14} aria-hidden="true" /> Future-Proof Search Strategy</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <div className="seo-dashboard__mockups">
              <div className="seo-dashboard__row">
                <Cpu size={16} />
                <span>AI Recommendations</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Visibility Beyond Traditional Search</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">AI visibility metrics</p>
            <h3 className="seo-stats__introTitle">Premium insights into AI-driven discovery</h3>
            <p className="seo-stats__introCopy">
              We surface the citation and recommendation signals that move the needle across answer engines.
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
            <Image src="/newadd.jpeg" alt="AI visibility mockup" fill sizes="(max-width: 1024px) 100vw, 50vw" priority={false} />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Complete AI Search Visibility Solutions</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {overviewCards.map((card) => {
            const cardEl = (
              <motion.article
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our AI Search Optimization Process</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Platforms We Optimize For</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {platforms.map((platform) => (
            <motion.span key={platform} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {platform}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Industries We Work With</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>AISO Components</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {[
            { title: "AEO", copy: "Optimize content for answer engines and AI-generated responses." },
            { title: "GEO", copy: "Improve visibility within generative AI recommendations." },
            { title: "Entity SEO", copy: "Strengthen brand recognition across AI ecosystems." },
            { title: "Authority Building", copy: "Increase trust signals that influence AI recommendations." },
            { title: "Citation Building", copy: "Expand mentions across trusted industry sources." },
            { title: "Knowledge Graph Optimization", copy: "Improve entity relationships and discoverability." },
          ].map((c) => (
            <motion.article key={c.title} className="service-card seo-overview__serviceCard" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
              <div className="service-card__glow" aria-hidden="true" />
              <div className="seo-overview__titleRow">
                <h3 className="service-card__title">{c.title}</h3>
              </div>
              <p className="service-card__description">{c.copy}</p>
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

      <AuditModal open={isAuditOpen} heading="AI Visibility Audit" initialHelpWith={["AI Search Optimization"]} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Globe, BarChart3, Users, MessageCircle, ChevronDown, Star } from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "AI Mentions +", label: "AI Search Mentions Improved" },
  { value: "Brand Citations", label: "Brand Citations Across AI Platforms" },
  { value: "+X%", label: "Increased Organic Discovery Opportunities" },
  { value: "Multi-Industry", label: "AI Search Experience" },
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
    description: "Answer-focused content creation, FAQ optimization and structured information architecture.",
    icon: MessageCircle,
    items: ["Answer-focused content", "FAQ optimization", "Structured content", "Featured answer opportunities"],
  },
  {
    title: "Generative Engine Optimization (GEO)",
    description: "AI recommendation strategies and brand mention optimization to improve generative visibility.",
    icon: Globe,
    items: ["AI recommendation strategies", "Brand mention optimization", "Visibility improvement", "Generative positioning"],
  },
  {
    title: "Entity Optimization",
    description: "Brand entity development, knowledge graph alignment and authority signal work.",
    icon: Users,
    items: ["Entity development", "Knowledge graph alignment", "Authority signals", "Consistency management"],
  },
  {
    title: "Authority Content Development",
    description: "Research-backed, expert-led content to build topical authority for AI systems.",
    icon: BarChart3,
    items: ["Topic clusters", "Expert content", "Research resources", "Topical authority"],
  },
  {
    title: "Citation & Mention Building",
    description: "Digital PR, industry placements and authority source mentions to boost trust signals.",
    icon: Star,
    items: ["Digital PR", "Industry mentions", "Authority placements", "Trust signals"],
  },
  {
    title: "AI Search Analytics & Reporting",
    description: "Tracking AI visibility, mentions and citation performance across platforms.",
    icon: BarChart3,
    items: ["AI visibility tracking", "Mention monitoring", "Authority measurement", "Performance reporting"],
  },
] as const;

const detailSections = [
  {
    title: "Answer Engine Optimization (AEO)",
    content:
      "Answer engines prioritize concise, trustworthy answers. We optimize content structure, FAQs, and snippet-ready copy so AI systems can surface your brand in responses.",
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
      "Generative platforms recommend trusted sources. We build strategies to position your brand as a top recommendation across AI systems.",
    features: [
      "AI Visibility Audits",
      "Brand Mention Optimization",
      "Competitive AI Analysis",
      "Authority Signal Development",
      "AI Recommendation Strategies",
      "Generative Monitoring",
    ],
    cta: "Improve AI Recommendations",
  },
  {
    title: "Entity Optimization",
    content:
      "Entities power AI understanding. We improve entity recognition by aligning knowledge graphs, citations and cross-platform consistency.",
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
      "We create research-backed resources and topic clusters that signal expertise and increase the likelihood of AI citation and recommendation.",
    features: [
      "Topic Clusters",
      "Authority Content",
      "Research-Based Articles",
      "Expert Resources",
      "Knowledge Hub Development",
      "Content Expansion",
    ],
    cta: "Build Topical Authority",
  },
] as const;

const processSteps = [
  "AI Visibility Audit",
  "Entity & Authority Analysis",
  "Optimization & Content Development",
  "Monitoring & Growth",
] as const;

const processDescriptions = [
  "Analyzing visibility across ChatGPT, Gemini, Perplexity, Claude, AI Overviews and other engines.",
  "Evaluating brand authority signals, citations, and entity recognition opportunities.",
  "Implementing AEO, GEO, entity optimization and authority-building strategies.",
  "Tracking visibility improvements, AI mentions and recommendation opportunities.",
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
  { q: "What is AI Search Optimization (AISO)?", a: "AISO adapts your digital presence to be discoverable and recommended by AI answer engines and generative systems." },
  { q: "How is AISO different from traditional SEO?", a: "AISO focuses on answer-ready content, entity signals and citation authority across AI platforms rather than legacy ranking signals alone." },
  { q: "What is Answer Engine Optimization (AEO)?", a: "AEO prepares content to be directly surfaced as answers by AI systems through structured, concise formats and FAQs." },
  { q: "What is Generative Engine Optimization (GEO)?", a: "GEO builds your brand’s presence in generative recommendations by optimizing mentions, authority signals, and trusted placements." },
  { q: "Can AI search generate leads and customers?", a: "Yes — when visibility and recommendation signals are aligned with conversion paths, AI search can drive qualified leads." },
  { q: "How do you measure AI search visibility?", a: "We track mentions, citations, referral traffic, recommendation placements and changes in AI-driven discovery over time." },
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

export default function AiSearchPage() {
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
              <MessageCircle className="seo-kicker__icon" size={18} aria-hidden="true" /> 🤖 AI Search Optimization (AISO) Services
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
              <span><Globe className="seo-trust__icon" size={14} aria-hidden="true" /> Future-Proof Search Strategy</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <div className="seo-ai-visual" />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Visibility Beyond Traditional Search</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Premium AI visibility</p>
            <h3 className="seo-stats__introTitle">Metrics that show AI discovery and citation growth.</h3>
            <p className="seo-stats__introCopy">Dark glowing cards display AI citations, brand mentions, authority signals, and visibility growth metrics.</p>
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
            <div className="seo-ai-transition" />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Complete AI Search Visibility Solutions</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          {overviewCards.map((card) => {
            const cardEl = (
              <motion.article
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our AI Search Optimization Process</motion.h2>
        <motion.div className="seo-timeline" aria-label="Connected AI timeline" variants={sectionVariants}>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Platforms We Optimize For</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {platforms.map((p) => (
            <motion.span key={p} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {p}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Industries We Work With</motion.h2>
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
            "Proven Authority Frameworks",
            "Entity Optimization Specialists",
            "Data-Driven Visibility Tracking",
            "Transparent Reporting",
          ].map((f) => (
            <motion.article key={f} className="service-card seo-overview__serviceCard" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
              <div className="service-card__glow" aria-hidden="true" />
              <div className="seo-overview__titleRow">
                <h3 className="service-card__title">{f}</h3>
              </div>
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

      <AuditModal open={isAuditOpen} heading="AI Visibility Audit" initialHelpWith={["AI Search Optimization"]} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
