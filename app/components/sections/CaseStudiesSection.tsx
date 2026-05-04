import styles from "./CaseStudiesSection.module.css";

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width={14} height={14} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 5h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CASES = [
  {
    abbr: "Mi\nma", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Mimamsaa",
    href: "https://gogrowth.co/mimamsaa-casestudy/",
    desc: <>Took a luxury handcrafted fashion brand from scattered spend to <b style={{ color: "#fb923c", fontWeight: 600 }}>surgical and geo-split Meta campaigns</b> across 5 markets with India delivering <b style={{ color: "#f97316", fontWeight: 600 }}>24.30x ROAS</b> and a confirmed diaspora-driven international play.</>,
    kpis: [{ val: "24.30x", lab: "India ROAS", c: "#f97316" }, { val: "5", lab: "Active Markets", c: "#fb923c" }, { val: "Geo", lab: "Split Campaigns", c: "#ea580c" }],
  },
  {
    abbr: "MBC", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Made By Confetti (Dubai)",
    href: "https://gogrowth.in/made-by-confetti-case-study/",
    desc: <>Repositioned a low-velocity product with a <b style={{ color: "#f97316", fontWeight: 600 }}>50% clearance offer</b> delivering consistent <b style={{ color: "#fb923c", fontWeight: 600 }}>3.2x ROAS</b> and <b style={{ color: "#ea580c", fontWeight: 600 }}>SEO + GEO</b> efforts securing #1 on Google and #1 on ChatGPT.</>,
    kpis: [{ val: "3.2x", lab: "ROAS", c: "#f97316" }, { val: "#1", lab: "Google Rank", c: "#fb923c" }, { val: "#1", lab: "GEO Rank", c: "#ea580c" }],
  },
  {
    abbr: "SS", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Swing Saga",
    href: "https://gogrowth.co/swing-saga-case-study/",
    desc: <>Took a premium macramé brand from invisible to indexed - building a full <b style={{ color: "#ea580c", fontWeight: 600 }}>SEO + GEO architecture</b>, AI search optimisation, and a <b style={{ color: "#f97316", fontWeight: 600 }}>confirmed ChatGPT-driven sale</b> validating the strategy.</>,
    kpis: [{ val: "AI Sale", lab: "Confirmed", c: "#f97316" }, { val: "GEO", lab: "Optimised", c: "#ea580c" }, { val: "Local", lab: "Pages Live", c: "#fb923c" }],
  },
  {
    abbr: "BLA", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Blackline Automotive (Australia)",
    href: "https://gogrowth.in/blackline-automotive-case-study/",
    desc: <>Scaled from <b style={{ color: "#f97316", fontWeight: 600 }}>zero to daily orders</b> with performance + funnel cleanup - hitting <b style={{ color: "#fb923c", fontWeight: 600 }}>550 orders</b> and <b style={{ color: "#ea580c", fontWeight: 600 }}>8x ROAS</b> in just 45 days.</>,
    kpis: [{ val: "8x", lab: "ROAS", c: "#f97316" }, { val: "550", lab: "Orders", c: "#fb923c" }, { val: "45", lab: "Days", c: "#ea580c" }],
  },
  {
    abbr: "STH", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Sthalam (India)",
    href: "https://gogrowth.in/sthalam-case-study/",
    desc: <>Scaled a home decor brand from <b style={{ color: "#f97316", fontWeight: 600 }}>zero to daily orders</b> with paid ads + <b style={{ color: "#ea580c", fontWeight: 600 }}>CRO upgrades</b> - driving consistent revenue and sustainable ad scaling.</>,
    kpis: [{ val: "8x", lab: "ROAS", c: "#f97316" }, { val: "Ads", lab: "Scaling", c: "#fb923c" }, { val: "CRO", lab: "Upgrade", c: "#ea580c" }],
  },
  {
    abbr: "KRA", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Koora (Australia)",
    href: "https://gogrowth.in/koora-case-study/",
    desc: <>Scaled with <b style={{ color: "#fb923c", fontWeight: 600 }}>A+ content</b> + <b style={{ color: "#ea580c", fontWeight: 600 }}>strategic CRO</b> lifting conversion rates and boosting SEO visibility - achieving <b style={{ color: "#f97316", fontWeight: 600 }}>7x ROAS</b> across key product pages.</>,
    kpis: [{ val: "7x", lab: "ROAS", c: "#f97316" }, { val: "CRO", lab: "Improved", c: "#fb923c" }, { val: "SEO", lab: "Visibility", c: "#ea580c" }],
  },
  {
    abbr: "CD", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Craft Delight (India)",
    href: "https://gogrowth.in/craft-case-study/",
    desc: <>Built consistent <b style={{ color: "#f97316", fontWeight: 600 }}>4-5x ROAS</b> on Meta and scaled order volume sustainably - delivering <b style={{ color: "#fb923c", fontWeight: 600 }}>550 orders</b> in just <b style={{ color: "#ea580c", fontWeight: 600 }}>60 days</b>.</>,
    kpis: [{ val: "5x", lab: "ROAS", c: "#f97316" }, { val: "550", lab: "Orders", c: "#fb923c" }, { val: "60", lab: "Days", c: "#ea580c" }],
  },
  {
    abbr: "BLA", logoBg: "#2b1a12", logoColor: "#fb923c",
    name: "Breezy LA (USA)",
    href: "https://gogrowth.in/breezy-la-case-study/",
    desc: <>Complete digital revamp for a <b style={{ color: "#f97316", fontWeight: 600 }}>premium cannabis delivery</b> service - UX redesign, <b style={{ color: "#fb923c", fontWeight: 600 }}>SEO fixes</b>, and a full <b style={{ color: "#ea580c", fontWeight: 600 }}>CRO flow</b> overhaul driving real conversions.</>,
    kpis: [{ val: "UX", lab: "Revamp", c: "#f97316" }, { val: "SEO", lab: "Fixes", c: "#fb923c" }, { val: "CRO", lab: "Flow", c: "#ea580c" }],
  },
];

export function CaseStudiesSection() {
  return (
    <section className={styles.caseStudies} id="case-studies">
      <div className={styles.inner}>
        <h2
          className={styles.title}
        >
          Results built on Strategy
        </h2>

        <div className={styles.grid}>
          {CASES.map((c) => (
            <article key={c.name} className={styles.card} data-case-study-card>
              <div className={styles.cardHeader}>
                <div className={styles.identity}>
                  <div
                    className={styles.iconWrap}
                    style={{ background: c.logoBg, color: c.logoColor }}
                  >
                    {c.abbr}
                  </div>
                  <h3 className={styles.company}>{c.name}</h3>
                </div>

                <a href={c.href} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                  <ExternalIcon />
                </a>
              </div>

              <p className={styles.paragraph}>{c.desc}</p>

              <div className={styles.metrics}>
                {c.kpis.map((kpi) => (
                  <div key={kpi.lab} className={styles.metric}>
                    <span className={styles.metricNumber} style={{ color: kpi.c }}>
                      {kpi.val}
                    </span>
                    <span className={styles.metricLabel}>{kpi.lab}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}