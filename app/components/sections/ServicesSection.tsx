"use client";

import type { CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  Megaphone,
  PenLine,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import { serviceCards } from "../servicesData";

const iconByKey = {
  search: Search,
  sparkles: Sparkles,
  penLine: PenLine,
  megaphone: Megaphone,
  smartphone: Smartphone,
  layoutGrid: LayoutGrid,
} as const satisfies Record<string, LucideIcon>;

const services: ReadonlyArray<{
  slug: string;
  title: string;
  description: string;
  bullets: readonly string[];
  icon: LucideIcon;
}> = serviceCards.map((service) => ({
  ...service,
  icon: iconByKey[service.iconKey],
}));

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="services relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_30%),linear-gradient(180deg,#1d1d1d_0%,#171717_100%)]"
      id="services"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="services__inner">
        <div className="services__headingRow">
          <div className="services__labelWrap">
            <span className="services__labelLine" aria-hidden="true" />
            <span className="services__label">WHAT WE DO</span>
          </div>

          <div className="services__intro">
            <h2 className="services__title">Visibility Across Every Platform</h2>
            <p className="services__subline">
              We combine AI-driven growth strategies for all platforms to outperform competitors
              and maximize your digital impact.
            </p>
          </div>
        </div>

        <motion.div className="services__grid" variants={containerVariants}>
          {services.map((service) => (
            <motion.article
              key={service.slug}
              className="service-card"
              style={{ ["--service-accent" as const]: "#F97316" } as CSSProperties}
              variants={itemVariants}
            >
              <Link className="service-card__clickArea" href={`/services/${service.slug}`}>
                <div className="service-card__top">
                  <span className="service-card__pill">Service</span>
                  <span className="service-card__iconWrap" aria-hidden="true">
                    <service.icon size={18} strokeWidth={2.15} />
                  </span>
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">
                  {service.description}
                </p>
                <ul className="service-card__features">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="service-card__feature">
                      <span className="service-card__dot" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <span className="service-card__link">Learn more</span>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
