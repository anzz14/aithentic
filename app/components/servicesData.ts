export type ServiceIconKey =
  | "search"
  | "sparkles"
  | "penLine"
  | "megaphone"
  | "smartphone"
  | "layoutGrid";

export type ServiceDetail = {
  content: string;
  features: readonly string[];
  cta: string;
};

export type ServiceCard = {
  slug: string;
  title: string;
  description: string;
  bullets: readonly string[];
  iconKey: ServiceIconKey;
  detail: ServiceDetail;
};

export const serviceCards: readonly ServiceCard[] = [
  {
    slug: "fullstack-seo",
    title: "Fullstack SEO",
    description:
      "We optimize your website infrastructure to improve crawlability, indexing, speed, and search engine performance.",
    bullets: ["Site Architecture", "Core Web Vitals", "Schema Markup"],
    iconKey: "search",
    detail: {
      content:
        "We optimize your website infrastructure to improve crawlability, indexing, speed, and search engine performance.",
      features: [
        "Site Architecture Optimization",
        "Core Web Vitals",
        "XML Sitemap & Robots Setup",
        "Schema Markup",
        "Mobile Optimization",
        "Crawl Error Fixes",
      ],
      cta: "Request SEO Audit",
    },
  },
  {
    slug: "ai-so",
    title: "AI SO",
    description:
      "Modern search is changing. We optimize your brand for AI-driven search engines, answer engines, and generative experiences.",
    bullets: ["AI Search Visibility", "AEO", "GEO"],
    iconKey: "sparkles",
    detail: {
      content:
        "Modern search is changing. We optimize your brand for AI-driven search engines, answer engines, and generative experiences.",
      features: [
        "AI Search Visibility",
        "AEO (Answer Engine Optimization)",
        "GEO (Generative Engine Optimization)",
        "Entity-Based SEO",
        "Structured Data Optimization",
        "AI Citation Strategy",
      ],
      cta: "Optimize for AI Search",
    },
  },
  {
    slug: "content-seo",
    title: "Content SEO",
    description:
      "Build topical authority and attract high-intent traffic with strategic SEO content systems.",
    bullets: ["SEO Blog Writing", "Topic Clusters", "Keyword Mapping"],
    iconKey: "penLine",
    detail: {
      content:
        "Build topical authority and attract high-intent traffic with strategic SEO content systems.",
      features: [
        "SEO Blog Writing",
        "Topic Clusters",
        "Keyword Mapping",
        "Internal Linking",
        "Content Refreshing",
        "Search Intent Optimization",
      ],
      cta: "Build Content Strategy",
    },
  },
  {
    slug: "performance-advertising",
    title: "Performance Advertising",
    description:
      "Data-driven paid ad campaigns to focus on lead generation and measurable ROI across digital channels.",
    bullets: ["Meta & Google Ads", "Funnel Optimization", "Retargeting Systems"],
    iconKey: "megaphone",
    detail: {
      content:
        "We design and run paid campaigns that prioritize qualified leads, efficient spend, and measurable growth outcomes.",
      features: [
        "Cross-Channel Campaign Setup",
        "Audience Segmentation",
        "Offer and Landing Page Alignment",
        "Retargeting Systems",
        "Creative Performance Testing",
        "Weekly ROI Reporting",
      ],
      cta: "Launch Performance Campaign",
    },
  },
  {
    slug: "app-store-optimization",
    title: "App Store Optimization",
    description:
      "Boost app visibility and search rankings through targeted optimization strategies on app stores.",
    bullets: ["Keyword Research", "Store Optimization", "Competitor Tracking"],
    iconKey: "smartphone",
    detail: {
      content:
        "We improve discoverability and conversion on app stores through optimized metadata, visual assets, and ranking strategy.",
      features: [
        "App Store Keyword Research",
        "Title and Description Optimization",
        "Visual Asset Recommendations",
        "Conversion Funnel Improvements",
        "Competitor Tracking",
        "Retention Signal Optimization",
      ],
      cta: "Improve App Visibility",
    },
  },
  {
    slug: "branding-strategy",
    title: "Branding & Strategy",
    description:
      "Build brand narratives and positioning that communicate clearly and stand out in crowded markets.",
    bullets: ["Messaging Strategy", "Brand Identity", "GTM Alignment"],
    iconKey: "layoutGrid",
    detail: {
      content:
        "We clarify your positioning and messaging so your brand is immediately understood and consistently differentiated.",
      features: [
        "Positioning Framework",
        "Brand Messaging System",
        "Voice and Tone Guidelines",
        "Visual Direction Alignment",
        "Go-To-Market Narrative",
        "Campaign Consistency Planning",
      ],
      cta: "Define Brand Strategy",
    },
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "From daily content to platform strategy, we manage social media with a focus on visibility, engagement, and brand recall.",
    bullets: ["Content Strategy", "Reels & Creatives", "Platform Management"],
    iconKey: "megaphone",
    detail: {
      content:
        "From daily content to platform strategy, we manage social media with a focus on visibility, engagement, and brand recall.",
      features: [
        "Content Strategy",
        "Reels & Creatives",
        "Platform Management",
        "Community Engagement",
        "Content Calendar Planning",
        "Performance Insights",
      ],
      cta: "Scale Social Presence",
    },
  },
  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Fast, conversion-focused websites built for AI era to support rankings, improve user experience, and turn traffic into qualified leads.",
    bullets: ["Custom Websites", "Conversion UX", "Speed Optimization"],
    iconKey: "layoutGrid",
    detail: {
      content:
        "Fast, conversion-focused websites built for AI era to support rankings, improve user experience, and turn traffic into qualified leads.",
      features: [
        "Custom Websites",
        "Conversion UX",
        "Speed Optimization",
        "Technical SEO Foundations",
        "Responsive Development",
        "Lead-Focused Page Architecture",
      ],
      cta: "Build Your Website",
    },
  },
  {
    slug: "ai-content-creation",
    title: "AI Content Creation",
    description:
      "We help brands scale content production through AI-assisted creative systems for social media, advertising, branding, and audience engagement.",
    bullets: ["AI Video Content", "Social Media Creatives", "Short-Form Content"],
    iconKey: "sparkles",
    detail: {
      content:
        "We help brands scale content production through AI-assisted creative systems for social media, advertising, branding, and audience engagement.",
      features: [
        "AI Video Content",
        "Social Media Creatives",
        "Short-Form Content",
        "Creative Prompt Systems",
        "Brand-Safe Content Templates",
        "Multi-Platform Repurposing",
      ],
      cta: "Scale AI Content",
    },
  },
];
