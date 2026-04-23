export const rotatingWords = ["Intelligent", "Revenue-Driven", "Powerful", "Beautiful"];

export type Testimonial = {
  name: string;
  title: string;
  initials: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    title: "Founder, Luminary Tech",
    initials: "SC",
    quote:
      "Their team translated a complicated product story into something clear, credible, and conversion-focused without losing the brand's personality.",
  },
  {
    name: "Marcus Williams",
    title: "Head of Growth, NexGen",
    initials: "MW",
    quote:
      "We saw sharper messaging, better engagement, and a noticeably smoother path from first click to qualified lead.",
  },
  {
    name: "Priya Nair",
    title: "COO, Axiom Digital",
    initials: "PN",
    quote:
      "They combined strategy and execution in a way that made the final experience feel polished, fast, and unmistakably premium.",
  },
];
