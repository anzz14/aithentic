"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { rotatingWords, testimonials } from "./components/data";
import { CtaBannerSection } from "./components/sections/CtaBannerSection";
import { ContactModal } from "./components/ContactModal";
import { AuditModal } from "./components/AuditModal";
import { BrandMark } from "./components/BrandMark";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { VisibilityBoostSection } from "./components/sections/VisibilityBoostSection";
import { WhyUsSection } from "./components/sections/WhyUsSection";
import { FooterSection } from "./components/sections/FooterSection";

export default function Home() {
  const whatsappHref = "https://wa.me/7021091516";

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [transitionState, setTransitionState] = useState<"idle" | "exiting" | "entering">(
    "idle",
  );
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialTransition, setTestimonialTransition] = useState<
    "idle" | "exiting" | "entering"
  >("idle");
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const timeoutIds = new Set<number>();

    const schedule = (callback: () => void, delay: number) => {
      const timeoutId = window.setTimeout(() => {
        timeoutIds.delete(timeoutId);
        callback();
      }, delay);

      timeoutIds.add(timeoutId);
    };

    const intervalId = window.setInterval(() => {
      setTransitionState("exiting");

      schedule(() => {
        setWordIndex((currentIndex) => (currentIndex + 1) % rotatingWords.length);
        setTransitionState("entering");

        schedule(() => {
          setTransitionState("idle");
        }, 300);
      }, 200);
    }, 2200);

    return () => {
      window.clearInterval(intervalId);
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutIds.clear();
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-process-step]"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.32,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-case-study-card]"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTestimonialTransition("exiting");

      window.setTimeout(() => {
        setTestimonialIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
        setTestimonialTransition("entering");

        window.setTimeout(() => {
          setTestimonialTransition("idle");
        }, 300);
      }, 220);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const updateNavState = () => {
      setIsNavScrolled(window.scrollY > 12);
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavState);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const activateTestimonial = (index: number) => {
    if (index === testimonialIndex) {
      return;
    }

    setTestimonialTransition("exiting");

    window.setTimeout(() => {
      setTestimonialIndex(index);
      setTestimonialTransition("entering");

      window.setTimeout(() => {
        setTestimonialTransition("idle");
      }, 300);
    }, 220);
  };

  return (
    <div className="agency-page" id="top">
      <header className={`site-nav${isNavScrolled ? " site-nav--scrolled" : ""}`} aria-label="Primary navigation">
        <div className="site-nav__inner">
          <a className="site-nav__brand" href="#top">
            <BrandMark className="site-nav__brand-mark h-22 w-auto sm:h-24" priority />
          </a>

          <button
            type="button"
            className="site-nav__hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu-home"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <span className="site-nav__hamburger-line" />
            <span className="site-nav__hamburger-line" />
            <span className="site-nav__hamburger-line" />
          </button>

          <nav className="site-nav__links" aria-label="Section links">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a key={link.href} className="site-nav__link" href={link.href}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} className="site-nav__link" href={link.href}>
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <a
            className="site-nav__cta site-nav__cta--desktop"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div
          id="mobile-nav-menu-home"
          className={`site-nav__mobile-panel${isMobileMenuOpen ? " is-open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="site-nav__mobile-links" aria-label="Mobile section links">
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  className="site-nav__mobile-link"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  className="site-nav__mobile-link"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <a
            className="site-nav__cta site-nav__cta--mobile"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setIsMobileMenuOpen(false);
            }}
          >
            WhatsApp
          </a>
        </div>
      </header>

      <HeroSection
        word={rotatingWords[wordIndex]}
        transitionState={transitionState}
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      <ServicesSection />
      <VisibilityBoostSection />
      <ProcessSection />
      <TestimonialsSection
        testimonialIndex={testimonialIndex}
        testimonialTransition={testimonialTransition}
        onSelect={activateTestimonial}
      />
      <WhyUsSection />
      <CtaBannerSection
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
      <AuditModal open={isAuditOpen} onClose={() => setIsAuditOpen(false)} />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FooterSection />
    </div>
  );
}
