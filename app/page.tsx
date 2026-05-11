"use client";

import { useEffect, useState } from "react";
import { rotatingWords, testimonials } from "./components/data";
import { CtaBannerSection } from "./components/sections/CtaBannerSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { VisibilityBoostSection } from "./components/sections/VisibilityBoostSection";
import { WhyUsSection } from "./components/sections/WhyUsSection";
import { FooterSection } from "./components/sections/FooterSection";

export default function Home() {
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
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
      <header className="site-nav" aria-label="Primary navigation">
        <div className="site-nav__inner">
          <a className="site-nav__brand" href="#top">
            <span className="site-nav__brand-accent">Ai</span>thentic
          </a>

          <nav className="site-nav__links" aria-label="Section links">
            {navLinks.map((link) => (
              <a key={link.href} className="site-nav__link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="site-nav__cta" href="#contact">
            Start Project
          </a>
        </div>
      </header>

      <HeroSection word={rotatingWords[wordIndex]} transitionState={transitionState} />
      <ServicesSection />
      <VisibilityBoostSection />
      <ProcessSection />
      <TestimonialsSection
        testimonialIndex={testimonialIndex}
        testimonialTransition={testimonialTransition}
        onSelect={activateTestimonial}
      />
      <WhyUsSection />
      <CtaBannerSection />
      <FooterSection />
    </div>
  );
}
