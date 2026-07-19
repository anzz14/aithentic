import Link from "next/link";
import { BrandMark } from "../components/BrandMark";
import { FooterSection } from "../components/sections/FooterSection";

const beliefs = [
  {
    title: "Growth Starts With Trust",
    description:
      "People buy from brands they trust. That trust comes from clear messaging, useful content, and consistent experiences across every touchpoint.",
  },
  {
    title: "Visibility Is Earned",
    description:
      "Showing up where customers are searching comes from strong foundations, valuable content, technical excellence, and ongoing improvement.",
  },
  {
    title: "Great Marketing Feels Simple",
    description:
      "The best strategies are the ones your audience understands instantly and your business can sustain for years.",
  },
  {
    title: "Every Decision Needs a Reason",
    description:
      "We do not recommend tactics because they are trending. We recommend them because they solve a real business problem.",
  },
  {
    title: "Results Matter More Than Reports",
    description:
      "Traffic and rankings are useful, but real success means more enquiries, more customers, and steady business growth.",
  },
] as const;

const differences = [
  {
    title: "We Think Beyond Google",
    description:
      "Search now spans AI platforms, search engines, and the places where buying decisions actually happen.",
  },
  {
    title: "Everything Works Together",
    description:
      "Your website, SEO, content, advertising, and branding should support one another instead of competing for attention.",
  },
  {
    title: "We Care About Business Outcomes",
    description:
      "We do not chase vanity metrics. Our focus stays on leads, sales, bookings, and long-term visibility.",
  },
  {
    title: "Clear Communication, Always",
    description:
      "You will always know what we are doing, why we are doing it, and how it is helping your business grow.",
  },
] as const;

const pillars = [
  {
    title: "Mission",
    description:
      "To help ambitious businesses grow with strategies built for how people discover brands today, through search, AI, content, and digital experiences that create lasting trust.",
  },
  {
    title: "Vision",
    description:
      "To become the growth partner businesses rely on as digital discovery continues to evolve, helping brands stay visible, relevant, and ready for what is next.",
  },
] as const;

export const metadata = {
  title: "About Us | Aithentic",
  description:
    "Learn how Aithentic blends AI and authenticity to help brands grow through search, content, websites, and strategic digital marketing.",
};

export default function AboutPage() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="agency-page bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.07),transparent_22%),linear-gradient(180deg,#171717_0%,#111111_100%)]">
      <header className="site-nav site-nav--scrolled" aria-label="About navigation">
        <div className="site-nav__inner">
          <Link className="site-nav__brand" href="/">
            <BrandMark className="site-nav__brand-mark h-22 w-auto sm:h-24" priority />
          </Link>

          <nav className="site-nav__links" aria-label="Site links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`site-nav__link${link.href === "/about" ? " site-nav__link--active" : ""}`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="site-nav__cta" href="/#contact">
            Get a Free Growth Audit
          </Link>
        </div>
      </header>

      <main>
        <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
              <div className="relative">
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
                  About Us
                </span>
                <h1
                  className="mt-4 max-w-[12ch] text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.94] tracking-tighter text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  The Internet Changed. So Did We.
                </h1>
                <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-slate-300">
                  The rules of visibility are changing, and businesses need more than isolated
                  marketing services to keep up.
                </p>
                <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-slate-300">
                  At Aithentic, we help brands stay visible wherever their customers are looking.
                  From SEO and AI search optimisation to high-performing websites, content, paid
                  campaigns, and brand strategy, we bring every piece together into one growth
                  system.
                </p>
                <p className="mt-4 max-w-3xl text-[1.02rem] leading-8 text-slate-300">
                  Build a brand that is easy to find, impossible to ignore.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link className="cta cta--primary inline-flex items-center justify-center text-center" href="/#contact">
                    Get a Free Growth Audit
                  </Link>
                  <Link className="cta cta--secondary inline-flex items-center justify-center text-center" href="/#services">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-4xl border border-white/10 bg-[#1a1a1a]/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-7 lg:p-8">
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
                  What Does Aithentic Mean?
                </span>
                <h2 className="mt-4 text-[1.9rem] font-extrabold leading-[1.02] tracking-tighter text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  AI + Authentic.
                </h2>
                <p className="mt-4 text-[0.98rem] leading-8 text-slate-300">
                  Aithentic is a master blend of AI and Authentic. It reflects our belief that the
                  future of marketing is not about choosing between technology and human creativity.
                </p>
                <p className="mt-4 text-[0.98rem] leading-8 text-slate-300">
                  It is about bringing them together so businesses can build digital presence that
                  people trust and AI understands.
                </p>
              </div>

              <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-7 lg:p-8">
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
                  Our Approach
                </span>
                <p className="mt-4 text-[0.98rem] leading-8 text-slate-300">
                  Every strategy we create is designed to keep brands visible, credible, and ready
                  for the way customers discover businesses today.
                </p>
                <p className="mt-4 text-[0.98rem] leading-8 text-slate-300">
                  Because while the tools are changing, one thing has not. People still choose brands
                  they trust.
                </p>
                <p className="mt-4 text-[0.98rem] leading-8 text-slate-300">
                  And that is exactly what we are here to help you build.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto w-full max-w-6xl rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-8 lg:p-10">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
              What We Believe
            </span>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {beliefs.map((belief) => (
                <article
                  key={belief.title}
                  className="rounded-3xl border border-white/10 bg-[#1a1a1a]/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <h3 className="text-[1.05rem] font-bold leading-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{belief.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-8"
              >
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
                  {pillar.title}
                </span>
                <p className="mt-4 text-[0.98rem] leading-8 text-slate-300">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto w-full max-w-6xl rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-8 lg:p-10">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
              What Makes Aithentic Different
            </span>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {differences.map((difference) => (
                <article
                  key={difference.title}
                  className="rounded-3xl border border-white/10 bg-[#1a1a1a]/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <h3 className="text-[1.05rem] font-bold leading-tight text-white" style={{ fontFamily: "var(--font-syne)" }}>
                    {difference.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{difference.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(249,115,22,0.13),rgba(255,255,255,0.04))] p-6 sm:p-7">
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
                More Than a Marketing Agency
              </span>
              <p className="mt-4 max-w-4xl text-[1rem] leading-8 text-slate-200">
                We do not see ourselves as another vendor. We become an extension of your team.
                We ask questions, challenge assumptions, celebrate wins, and fix what is not working
                because your growth is the only metric that matters.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="mx-auto w-full max-w-6xl rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_26%),linear-gradient(180deg,#171717_0%,#111111_100%)] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-orange-500">
                  CTA
                </span>
                <h2 className="mt-4 max-w-[18ch] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.02] tracking-tighter text-white" style={{ fontFamily: "var(--font-syne)" }}>
                  You Bring the Vision. We&apos;ll Help You Grow It.
                </h2>
                <p className="mt-4 max-w-3xl text-[0.98rem] leading-8 text-slate-300">
                  Every successful business starts with an idea. Growing it takes the right strategy,
                  the right execution, and the right people behind it. Before campaigns, content, or
                  SEO, there needs to be a clear understanding of your business. That is where we
                  begin.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link className="cta cta--primary inline-flex items-center justify-center text-center" href="/#contact">
                  Let&apos;s Get Started
                </Link>
                <Link className="cta cta--secondary inline-flex items-center justify-center text-center" href="/#services">
                  See What We Do
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}