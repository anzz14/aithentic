"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { BrandMark } from "../components/BrandMark";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  const whatsappHref = "https://wa.me/7021091516";

  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string>("/");

  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const serviceLabel = useMemo(() => {
    const slug = pathname.split("/").filter(Boolean).pop() ?? "services";
    return slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }, [pathname]);

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Stats", href: "#stats" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
    [],
  );

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
    const sectionMap: Array<{ selector: string; id: string }> = [
      { selector: ".seo-hero", id: "overview" },
      { selector: ".seo-stats", id: "stats" },
      { selector: ".seo-overview__serviceGrid", id: "services" },
      { selector: ".seo-timeline", id: "process" },
      { selector: ".seo-faq", id: "faq" },
    ];

    sectionMap.forEach(({ selector, id }) => {
      const element = document.querySelector<HTMLElement>(selector);

      if (element) {
        element.id = id;
      }
    });

    const resetTimer = window.setTimeout(() => {
      setActiveHref("#overview");
    }, 0);

    return () => {
      window.clearTimeout(resetTimer);
    };
  }, [pathname]);

  useEffect(() => {
    const sectionSelectors = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => link.href)
      .join(", ");

    if (!sectionSelectors) {
      return;
    }

    const observedSections = Array.from(document.querySelectorAll<HTMLElement>(sectionSelectors));

    if (!observedSections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextActive = `#${visibleEntry.target.id}`;
        setActiveHref(nextActive);
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-15% 0px -55% 0px",
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [navLinks]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="relative">
      <header className={`site-nav${isNavScrolled ? " site-nav--scrolled" : ""}`} aria-label={`${serviceLabel} navigation`}>
        <div className="site-nav__inner">
          <Link className="site-nav__brand" href="/">
            <BrandMark className="site-nav__brand-mark h-26 w-auto sm:h-26" priority />
          </Link>

          <button
            type="button"
            className="site-nav__hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu-services"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            <span className="site-nav__hamburger-line" />
            <span className="site-nav__hamburger-line" />
            <span className="site-nav__hamburger-line" />
          </button>

          <nav className="site-nav__links" aria-label={`${serviceLabel} section links`}>
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  className={`site-nav__link${activeHref === link.href ? " site-nav__link--active" : ""}`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  className={`site-nav__link${activeHref === link.href ? " site-nav__link--active" : ""}`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
          id="mobile-nav-menu-services"
          className={`site-nav__mobile-panel${isMobileMenuOpen ? " is-open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="site-nav__mobile-links" aria-label={`${serviceLabel} mobile section links`}>
            {navLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  className={`site-nav__mobile-link${activeHref === link.href ? " site-nav__mobile-link--active" : ""}`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  className={`site-nav__mobile-link${activeHref === link.href ? " site-nav__mobile-link--active" : ""}`}
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
            onClick={() => setIsMobileMenuOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}
