"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Clapperboard,
  Megaphone,
  Sparkles,
  Layers3,
  Video,
  ScrollText,
  PlayCircle,
  ChevronDown,
  LineChart,
  Target,
  Wand2,
} from "lucide-react";

import { AuditModal } from "../../components/AuditModal";
import { ContactModal } from "../../components/ContactModal";
import { FooterSection } from "../../components/sections/FooterSection";

const stats = [
  { value: "Viral", label: "Short-Form Content Strategies" },
  { value: "Multi-Platform", label: "Creative Expertise" },
  { value: "High-Volume", label: "Content Production Systems" },
  { value: "AI-Powered", label: "Creative Workflows" },
] as const;

const problems = [
  "Inconsistent content production",
  "Low engagement rates",
  "Poor creative quality",
  "Slow production timelines",
  "Generic social media content",
  "No platform-specific strategy",
] as const;

const services = [
  { title: "AI Video Creation", desc: "Short-form videos, reels, cinematic visuals and promotions.", icon: Video },
  { title: "Social Media Content", desc: "Instagram, LinkedIn and platform-native content calendars.", icon: Megaphone },
  { title: "AI Visual Content", desc: "AI-generated graphics, ad creatives and campaign assets.", icon: Sparkles },
  { title: "Creative Campaign Strategy", desc: "Viral concepts, storytelling and engagement strategy.", icon: Target },
  { title: "Content Repurposing", desc: "Blog-to-video conversion and multi-platform adaptation.", icon: Layers3 },
  { title: "AI-Powered Editing & Optimization", desc: "Motion, voiceovers, enhancement and performance tuning.", icon: Wand2 },
] as const;

const detailSections = [
  {
    title: "AI Video Content Creation",
    content:
      "Create engaging short-form and cinematic AI-powered videos designed to increase reach, engagement, and audience retention.",
    features: ["Reels & Shorts", "TikTok Videos", "Cinematic AI Visuals", "Promotional Videos", "AI Animation", "Platform Optimization"],
    cta: "Create Viral Video Content",
  },
  {
    title: "Social Media Creative Systems",
    content:
      "Build consistent, high-performing social media content pipelines tailored for every platform.",
    features: ["Instagram Creatives", "Carousel Posts", "Story Content", "Platform-Specific Design", "Engagement Strategy", "Content Scheduling"],
    cta: "Scale Social Content",
  },
  {
    title: "AI Creative Campaigns",
    content:
      "Launch visually engaging campaigns powered by AI-assisted creative workflows and storytelling strategies.",
    features: ["Campaign Concepts", "Creative Direction", "Ad Creatives", "Motion Visuals", "AI Image Generation", "Brand Storytelling"],
    cta: "Launch Creative Campaigns",
  },
] as const;

const processSteps = ["Strategy & Research", "Creative Planning", "AI Content Production", "Optimization & Scaling"] as const;

const processDescriptions = [
  "Understanding audience behavior, trends, and content opportunities.",
  "Developing scripts, visuals, storytelling concepts, and content structures.",
  "Generating videos, visuals, animations, and platform-native creative assets.",
  "Improving engagement, repurposing content, and scaling high-performing creatives.",
] as const;

const platforms = ["Instagram", "TikTok", "YouTube Shorts", "LinkedIn", "Facebook", "X (Twitter)"] as const;

const industries = ["SaaS", "Finance", "eCommerce", "Personal Brands", "Real Estate", "Agencies", "Mobile Apps", "Education"] as const;

const caseStudies = [
  { brand: "Brand Campaign", result: "10M+ Organic Video Views" },
  { brand: "Startup Brand", result: "Higher Engagement Across Platforms" },
  { brand: "Personal Brand", result: "Consistent Viral Short-Form Growth" },
  { brand: "eCommerce Brand", result: "Improved Ad Creative Performance" },
] as const;

const tools = ["Midjourney", "ChatGPT", "Runway", "Adobe Premiere Pro", "After Effects", "Canva", "CapCut"] as const;

const faqs = [
  { q: "What type of AI content do you create?", a: "We create videos, visuals, campaigns, social posts, and repurposed content systems." },
  { q: "Can you create short-form viral videos?", a: "Yes — reels, shorts, and TikTok-style content are core offerings." },
  { q: "Do you provide scripts and voiceovers?", a: "Yes — scripting and AI-assisted voiceovers can be included." },
  { q: "Is the content customized for each platform?", a: "Yes — platform-native structure and formatting are built in." },
  { q: "How quickly can content be delivered?", a: "Timelines vary by scope, but AI-assisted production is designed for speed." },
  { q: "Do you offer monthly content packages?", a: "Yes — recurring content packages and retainers are available." },
] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, staggerChildren: 0.08, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AIContentCreationPage() {
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
              <Clapperboard className="seo-kicker__icon" size={18} aria-hidden="true" /> AI Content Creation Services
            </motion.p>
            <motion.h1 className="seo-hero__title" variants={itemVariants}>Create High-Impact Content Faster With AI-Powered Creativity</motion.h1>
            <motion.p className="seo-hero__subtitle" variants={itemVariants}>
              We help brands scale content production through AI-assisted creative systems designed for social media, advertising, branding, and audience engagement.
            </motion.p>
            <motion.div className="seo-hero__actions" variants={itemVariants}>
              <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsContactOpen(true)}>Start Creating Content</button>
              <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsAuditOpen(true)}>Book Creative Strategy Call</button>
            </motion.div>
            <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
              <span><Video className="seo-trust__icon" size={14} aria-hidden="true" /> Faster Content Production</span>
              <span><Target className="seo-trust__icon" size={14} aria-hidden="true" /> Platform-Native Creative Strategy</span>
              <span><Wand2 className="seo-trust__icon" size={14} aria-hidden="true" /> AI + Human Creative Workflows</span>
            </motion.div>
          </motion.div>

          <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
            <div className="seo-dashboard seo-dashboard--content-ai">
              <div className="seo-dashboard__row"><Clapperboard size={16} /><span>Creative Dashboard</span></div>
              <div className="seo-dashboard__graph seo-dashboard__graph--content-ai" />
            </div>
            <motion.div className="seo-float seo-float--one" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY }}><PlayCircle size={18} /> Video Previews</motion.div>
            <motion.div className="seo-float seo-float--two" animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY }}><Sparkles size={18} /> AI Visuals</motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Content Built for Reach & Engagement</motion.h2>
        <motion.div className="seo-stats__layout" variants={sectionVariants}>
          <motion.article className="seo-stats__introCard" variants={itemVariants}>
            <p className="seo-stats__eyebrow">Premium dark glowing cards</p>
            <h3 className="seo-stats__introTitle">Production speed without sacrificing quality.</h3>
            <p className="seo-stats__introCopy">Animated engagement counters and premium card layouts show how AI content systems scale faster.</p>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Most Content Fails to Perform</motion.h2>
        <motion.div className="seo-problem__grid" variants={sectionVariants}>
          <motion.div variants={itemVariants}><ul className="seo-list">{problems.map((problem) => <li key={problem}>{problem}</li>)}</ul></motion.div>
          <motion.div className="seo-problem__visual" aria-hidden="true" variants={itemVariants}>
            <img src="/AI%20Content%20Creation.jpg.jpeg" alt="AI content creation" className="seo-problem__image seo-problem__image--ai-content" />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Creative Content Systems Built for Modern Platforms</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Our AI Content Workflow</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Multi-Platform Creative Expertise</motion.h2>
        <motion.div className="seo-tools" variants={sectionVariants}>
          {platforms.map((platform) => (
            <motion.span key={platform} className="seo-tools__item" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
              {platform}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>AI Content Solutions Across Industries</motion.h2>
        <motion.div className="seo-results__grid" variants={sectionVariants}>
          {industries.map((industry) => (
            <motion.article key={industry} className="seo-results__card" variants={itemVariants} whileHover={prefersReducedMotion ? undefined : { y: -3 }}>
              <p className="seo-results__brand">{industry}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Creative Content That Performs</motion.h2>
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
        <motion.h2 className="seo-section__title" variants={itemVariants}>Why Brands Choose Our AI Content Services</motion.h2>
        <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">AI + Human Creativity</h3><p className="service-card__description">Creative output that blends speed, originality and brand safety.</p></motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">Platform-Native Strategy</h3><p className="service-card__description">Content formats designed to match how each platform performs best.</p></motion.article>
          <motion.article className="service-card" style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties} variants={itemVariants}><h3 className="service-card__title">High-Volume Systems</h3><p className="service-card__description">Repeatable workflows for scaling production without losing quality.</p></motion.article>
        </motion.div>
      </motion.section>

      <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
        <motion.h2 className="seo-section__title" variants={itemVariants}>Creative Tools We Use</motion.h2>
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
        <motion.h2 variants={itemVariants}>Ready to Scale Your Content Creation?</motion.h2>
        <motion.p variants={itemVariants}>Create engaging AI-powered content systems that increase visibility, improve engagement, and help your brand grow faster across digital platforms.</motion.p>
        <motion.div className="seo-hero__actions" variants={itemVariants}>
          <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsContactOpen(true)}>Start Content Production</button>
          <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsAuditOpen(true)}>Schedule Creative Consultation</button>
        </motion.div>
      </motion.section>

      <section className="seo-back"><Link href="/#services">Back to services</Link></section>

      <AuditModal open={isAuditOpen} heading="AI Content Creation Consultation" initialHelpWith={["AI Content Creation"]} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection fullPage />
    </main>
  );
}
