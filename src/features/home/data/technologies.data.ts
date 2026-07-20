import type { HomeContent } from "@/features/home/types";

export const homeTechnologiesData: HomeContent["technologies"] = {
  header: {
    eyebrowKey: "home.technologies.eyebrow",
    titleKey: "home.technologies.title",
    descriptionKey: "home.technologies.description",
  },
  items: [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "OpenAI",
    "Stripe",
    "Flutter",
    "Figma",
  ].map((label) => ({ id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"), label })),
};
