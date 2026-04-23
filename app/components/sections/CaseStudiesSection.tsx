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
    <section id="case-studies" style={{ maxWidth: 980, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 460px))", justifyContent: "center", gap: 16 }}>
        {CASES.map((c) => (
          <div
            key={c.name}
            style={{ background: "#111", border: "1px solid #fff", borderRadius: 16, padding: 20, display: "flex", flexDirection: "column", gap: 16, height: "100%" }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 10, border: "1px solid #fff",
                  background: c.logoBg, color: c.logoColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, fontSize: 13, fontWeight: 700, whiteSpace: "pre-line", textAlign: "center", lineHeight: 1.2,
                }}>
                  {c.abbr}
                </div>
                <span style={{ fontSize: 18, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{c.name}</span>
              </div>

              <a
                href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 34, height: 34, borderRadius: 8, background: "#1c1c1c", border: "1px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, textDecoration: "none", color: "#888" }}
              >
                <ExternalIcon />
              </a>
            </div>

            {/* Description */}
            <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "#999", margin: 0 }}>{c.desc}</p>

            {/* KPI tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: "auto" }}>
              {c.kpis.map((kpi) => (
                <div key={kpi.lab} style={{ background: "#1a1a1a", border: "1px solid #fff", borderRadius: 10, padding: "14px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 22, fontWeight: 700, color: kpi.c, lineHeight: 1 }}>{kpi.val}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", lineHeight: 1.4 }}>{kpi.lab}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}