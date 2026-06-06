  "use client";

  import type { CSSProperties } from "react";
  import Link from "next/link";
  import Image from "next/image";
  import { useRef, useState } from "react";
  import { motion, useInView, useReducedMotion } from "framer-motion";
  import {
    Globe,
    Monitor,
    Code,
    Layout,
    ShoppingCart,
    Server,
    ChevronDown,
    Star,
  } from "lucide-react";

  import { AuditModal } from "../../components/AuditModal";
  import { ContactModal } from "../../components/ContactModal";
  import { FooterSection } from "../../components/sections/FooterSection";

  const stats = [
    { value: "100+", label: "High-Converting Websites Delivered" },
    { value: "90+", label: "Faster Website Performance Scores" },
    { value: "+120%", label: "Increased Lead Generation Results" },
    { value: "Multi-Industry", label: "Development Experience" },
  ] as const;

  const pains = [
    "Outdated website design",
    "Poor user experience",
    "Slow loading speeds",
    "Low conversion rates",
    "Weak SEO foundations",
    "Mobile usability issues",
  ] as const;

  const overviewCards = [
    {
      title: "Website Strategy & Planning",
      description: "User journey mapping, conversion strategy, site architecture and growth-focused planning.",
      icon: Globe,
      items: ["User journey mapping", "Conversion strategy", "Website architecture", "Growth-focused planning"],
    },
    {
      title: "UI/UX Design",
      description: "Custom interfaces, wireframes and prototypes focused on usability and conversion.",
      icon: Monitor,
      items: ["Custom interface design", "Wireframing", "Prototyping", "UX optimization"],
    },
    {
      title: "Website Development",
      description: "Frontend and backend development, CMS integrations and scalable platform engineering.",
      icon: Code,
      items: ["Frontend development", "Backend development", "CMS integration", "Custom functionality"],
    },
    {
      title: "Landing Page Development",
      description: "High-converting lead pages, sales funnels and product launch microsites.",
      icon: Layout,
      items: ["Lead generation pages", "Sales funnels", "Product launch pages", "Conversion optimization"],
    },
    {
      title: "eCommerce Development",
      description: "Online stores, payment integrations and optimized checkout experiences.",
      icon: ShoppingCart,
      items: ["Online stores", "Payment integrations", "Product management", "Checkout optimization"],
    },
    {
      title: "Website Maintenance & Optimization",
      description: "Security, performance monitoring, bug fixes and continuous improvements.",
      icon: Server,
      items: ["Security updates", "Performance monitoring", "Bug fixes", "Continuous improvements"],
    },
  ] as const;

  const detailSections = [
    {
      title: "Website Design & User Experience",
      content:
        "Your website is often the first interaction customers have with your brand. We create visually compelling websites that guide visitors through a seamless journey while maintaining strong brand consistency.",
      features: [
        "UI Design Strategy",
        "UX Research",
        "Wireframes & Prototypes",
        "Mobile-First Design",
        "Conversion-Focused Layouts",
        "Accessibility Optimization",
      ],
      cta: "Improve Website Experience",
    },
    {
      title: "Website Development",
      content:
        "We develop fast, secure, and scalable websites built to support long-term business growth. From simple business sites to complex custom platforms, our focus is performance, reliability, and extensibility.",
      features: [
        "Custom Development",
        "CMS Implementation",
        "API Integrations",
        "Website Security",
        "Performance Optimization",
        "Technical SEO Setup",
      ],
      cta: "Build My Website",
    },
    {
      title: "Conversion Optimization",
      content:
        "Getting traffic is only part of the equation. Our conversion optimization services transform visitors into qualified leads through testing, UX improvements, and behavior-driven design.",
      features: [
        "Conversion Audits",
        "CTA Optimization",
        "Landing Page Improvements",
        "User Behavior Analysis",
        "Funnel Optimization",
        "A/B Testing Recommendations",
      ],
      cta: "Increase Website Conversions",
    },
  ] as const;

  const processSteps = [
    "Discovery & Strategy",
    "Design & Experience Planning",
    "Development & Implementation",
    "Launch & Growth Optimization",
  ] as const;

  const processDescriptions = [
    "Understanding your business goals, audience, competitors, and website requirements.",
    "Creating wireframes, user journeys, and visual concepts.",
    "Building responsive, secure, and scalable website functionality.",
    "Monitoring performance and continuously improving results after launch.",
  ] as const;

  const caseStudies = [
    { brand: "SaaS Platform", result: "+150% Lead Velocity" },
    { brand: "eCommerce Store", result: "+2.8X Conversion Rate" },
    { brand: "Local Service", result: "+80% Organic Leads" },
    { brand: "B2B Platform", result: "+120% Traffic Quality" },
  ] as const;

  const platforms = ["WordPress", "Webflow", "Shopify", "WooCommerce", "Custom Development", "Headless CMS Solutions"] as const;

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
    "Figma",
    "WordPress",
    "Webflow",
    "Shopify",
    "Google Analytics",
    "Google Search Console",
    "Hotjar",
    "GTmetrix",
  ] as const;

  const faqs = [
    { q: "How long does website development take?", a: "Timelines vary by scope — a typical website takes between 6-12 weeks depending on complexity." },
    { q: "Will my website be mobile responsive?", a: "Yes — we design mobile-first and ensure all pages are responsive across devices." },
    { q: "Can you redesign my existing website?", a: "Yes — we offer redesigns and migrations with minimal downtime and improvement-focused plans." },
    { q: "Do you provide website maintenance?", a: "Yes — maintenance plans include security updates, performance monitoring, and ongoing improvements." },
    { q: "Will my website be SEO-friendly?", a: "We implement technical SEO foundations and collaborate on content strategy for discoverability." },
    { q: "Do you build eCommerce websites?", a: "Yes — we build and optimize eCommerce experiences across platforms like Shopify and WooCommerce." },
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

  export default function WebsiteDevPage() {
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
                <Globe className="seo-kicker__icon" size={18} aria-hidden="true" /> Website Design & Development Services
              </motion.p>
              <motion.h1 className="seo-hero__title" variants={itemVariants}>Build High-Performing Websites That Turn Visitors Into Customers</motion.h1>
              <motion.p className="seo-hero__subtitle" variants={itemVariants}>
                We design and develop modern, conversion-focused websites that combine exceptional user experiences, fast performance, and scalable technology to help businesses generate leads, drive sales, and establish credibility online.
              </motion.p>
              <motion.div className="seo-hero__actions" variants={itemVariants}>
                <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
                  Get Free Website Audit
                </button>
                <button className="seo-btn seo-btn--ghost" type="button" onClick={() => setIsContactOpen(true)}>
                  Start My Project
                </button>
              </motion.div>
              <motion.div className="seo-hero__trust" aria-label="Trust indicators" variants={itemVariants}>
                <span><Star className="seo-trust__icon" size={14} aria-hidden="true" /> Fast & Responsive Websites</span>
                <span><Monitor className="seo-trust__icon" size={14} aria-hidden="true" /> Custom UI/UX Design</span>
                <span><Code className="seo-trust__icon" size={14} aria-hidden="true" /> Conversion-Focused Development</span>
              </motion.div>
            </motion.div>

            <motion.div className="seo-hero__visual" aria-hidden="true" variants={itemVariants}>
              <motion.div className="seo-dashboard" animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
                <div className="seo-dashboard__row">
                  <Monitor size={16} />
                  <span>Performance Dashboard</span>
                </div>
                <motion.div className="seo-dashboard__graph" animate={prefersReducedMotion ? undefined : { opacity: [0.88, 1, 0.88] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
                <motion.div className="seo-dashboard__bars">
                  <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.15, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0 }} />
                  <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.2, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }} />
                  <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.12, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }} />
                  <motion.span animate={prefersReducedMotion ? undefined : { scaleY: [1, 1.28, 1] }} transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }} />
                </motion.div>
              </motion.div>
              <motion.div className="seo-float seo-float--one" animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Code size={18} /> Modern Mockups</motion.div>
              <motion.div className="seo-float seo-float--two" animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }} transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Layout size={18} /> Interactive UI</motion.div>
              <motion.div className="seo-float seo-float--three" animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }} transition={prefersReducedMotion ? undefined : { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}><Globe size={18} /> Performance</motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section className="seo-section seo-stats" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
          <motion.h2 className="seo-section__title" variants={itemVariants}>Websites Built For Growth</motion.h2>
          <motion.div className="seo-stats__layout" variants={sectionVariants}>
            <motion.article className="seo-stats__introCard" variants={itemVariants}>
              <p className="seo-stats__eyebrow">Proof that compounds</p>
              <h3 className="seo-stats__introTitle">A compact snapshot of the website growth we deliver.</h3>
              <p className="seo-stats__introCopy">
                These metrics highlight conversion, performance, and lead generation improvements from our website engagements.
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
          <motion.h2 className="seo-section__title" variants={itemVariants}>Why Most Business Websites Fail To Generate Results</motion.h2>
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
                alt="Website transformation visual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section className="seo-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px -10% 0px" }}>
          <motion.h2 className="seo-section__title" variants={itemVariants}>Complete Website Design & Development Solutions</motion.h2>
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
          <motion.h2 className="seo-section__title" variants={itemVariants}>Our Website Creation Process</motion.h2>
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
          <motion.h2 className="seo-section__title" variants={itemVariants}>Real Website Results</motion.h2>
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
          <motion.h2 className="seo-section__title" variants={itemVariants}>Platforms We Build On</motion.h2>
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
          <motion.h2 className="seo-section__title" variants={itemVariants}>Why Businesses Choose Our Website Services</motion.h2>
          <motion.div className="seo-overview__serviceGrid" variants={sectionVariants}>
            {[
              "Conversion-Focused Design Strategy",
              "Custom Development Expertise",
              "Mobile-First Approach",
              "SEO-Ready Architecture",
              "Fast Website Performance",
              "Transparent Project Management",
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
          <motion.h2 variants={itemVariants}>Ready To Build A Website That Drives Results?</motion.h2>
          <motion.p variants={itemVariants}>
            Create a website that not only looks exceptional but also generates leads, improves conversions, and supports long-term business growth.
          </motion.p>
          <motion.div className="seo-hero__actions" variants={itemVariants}>
            <button className="seo-btn seo-btn--primary" type="button" onClick={() => setIsAuditOpen(true)}>
              Get Free Website Audit
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
          heading="Website Audit"
          initialHelpWith={["Website Design & Development"]}
          onClose={() => setIsAuditOpen(false)}
        />
        <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <FooterSection fullPage />
      </main>
    );
  }

