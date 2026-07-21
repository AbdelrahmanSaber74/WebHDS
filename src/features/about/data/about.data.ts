import { BrainCircuit, Compass, Layers3, ShieldCheck } from "lucide-react";
import type { AboutContent } from "@/features/about/types";

export const aboutData: AboutContent = {
  hero: {
    badge: "about.hero.badge",
    title: "about.hero.title",
    subtitle: "about.hero.subtitle",
    primaryLabel: "about.hero.primary",
    primaryHref: "mailto:sales@hds.example",
    secondaryLabel: "about.hero.secondary",
    secondaryHref: "/services",
    image: "/hero.png",
    imageAlt: "about.hero.imageAlt",
  },
  story: {
    header: {
      eyebrow: "about.story.eyebrow",
      title: "about.story.title",
      description: "about.story.description",
    },
    paragraphs: [
      "about.story.paragraph.one",
      "about.story.paragraph.two",
      "about.story.paragraph.three",
    ],
    proofPoints: [
      {
        id: "architecture",
        label: "about.story.proof.architecture.label",
        value: "about.story.proof.architecture.value",
      },
      {
        id: "delivery",
        label: "about.story.proof.delivery.label",
        value: "about.story.proof.delivery.value",
      },
      {
        id: "partnership",
        label: "about.story.proof.partnership.label",
        value: "about.story.proof.partnership.value",
      },
    ],
  },
  missionVision: {
    eyebrow: "about.mission.eyebrow",
    title: "about.mission.title",
    description: "about.mission.description",
  },
  values: {
    eyebrow: "about.values.eyebrow",
    title: "about.values.title",
    description: "about.values.description",
  },
  whyChoose: {
    header: {
      eyebrow: "about.why.eyebrow",
      title: "about.why.title",
      description: "about.why.description",
    },
    items: [
      {
        id: "clarity",
        icon: Compass,
        title: "about.why.clarity.title",
        description: "about.why.clarity.description",
      },
      {
        id: "architecture",
        icon: Layers3,
        title: "about.why.architecture.title",
        description: "about.why.architecture.description",
      },
      {
        id: "security",
        icon: ShieldCheck,
        title: "about.why.security.title",
        description: "about.why.security.description",
      },
      {
        id: "ai",
        icon: BrainCircuit,
        title: "about.why.ai.title",
        description: "about.why.ai.description",
      },
    ],
  },
  process: {
    header: {
      eyebrow: "about.process.eyebrow",
      title: "about.process.title",
      description: "about.process.description",
    },
    steps: [
      {
        id: "align",
        title: "about.process.align.title",
        description: "about.process.align.description",
      },
      {
        id: "design",
        title: "about.process.design.title",
        description: "about.process.design.description",
      },
      {
        id: "ship",
        title: "about.process.ship.title",
        description: "about.process.ship.description",
      },
      {
        id: "improve",
        title: "about.process.improve.title",
        description: "about.process.improve.description",
      },
    ],
  },
  timeline: {
    eyebrow: "about.timeline.eyebrow",
    title: "about.timeline.title",
    description: "about.timeline.description",
  },
  technologies: {
    eyebrow: "about.technologies.eyebrow",
    title: "about.technologies.title",
    description: "about.technologies.description",
  },
  industries: {
    header: {
      eyebrow: "about.industries.eyebrow",
      title: "about.industries.title",
      description: "about.industries.description",
    },
    items: [
      {
        id: "saas",
        title: "about.industries.saas.title",
        description: "about.industries.saas.description",
      },
      {
        id: "operations",
        title: "about.industries.operations.title",
        description: "about.industries.operations.description",
      },
      {
        id: "commerce",
        title: "about.industries.commerce.title",
        description: "about.industries.commerce.description",
      },
      {
        id: "regulated",
        title: "about.industries.regulated.title",
        description: "about.industries.regulated.description",
      },
    ],
  },
  statistics: {
    eyebrow: "about.statistics.eyebrow",
    title: "about.statistics.title",
    description: "about.statistics.description",
  },
  team: {
    header: {
      eyebrow: "about.team.eyebrow",
      title: "about.team.title",
      description: "about.team.description",
    },
    description: "about.team.body",
  },
  certifications: {
    eyebrow: "about.certifications.eyebrow",
    title: "about.certifications.title",
    description: "about.certifications.description",
  },
  cta: {
    title: "about.cta.title",
    description: "about.cta.description",
    primaryLabel: "about.cta.primary",
    primaryHref: "mailto:sales@hds.example",
    secondaryLabel: "about.cta.secondary",
    secondaryHref: "/services",
  },
};
