import { images } from "@/assets/images";
import type { ServicesListingContent } from "@/features/services/types";

export const servicesListingData = {
  hero: {
    badge: "services.listing.hero.badge",
    title: "services.listing.hero.title",
    subtitle: "services.listing.hero.subtitle",
    primaryLabel: "services.listing.hero.primary",
    primaryHref: "/#contact",
    secondaryLabel: "services.listing.hero.secondary",
    secondaryHref: "/#process",
    image: images.hdsEnterpriseHero,
    imageAlt: "services.listing.hero.imageAlt",
  },
  technologies: {
    eyebrow: "services.listing.technologies.eyebrow",
    title: "services.listing.technologies.title",
    description: "services.listing.technologies.description",
  },
  process: {
    eyebrow: "services.listing.process.eyebrow",
    title: "services.listing.process.title",
    description: "services.listing.process.description",
  },
  faq: {
    eyebrow: "services.listing.faq.eyebrow",
    title: "services.listing.faq.title",
    description: "services.listing.faq.description",
    items: [
      {
        id: "start",
        question: "services.listing.faq.start.question",
        answer: "services.listing.faq.start.answer",
      },
      {
        id: "mix",
        question: "services.listing.faq.mix.question",
        answer: "services.listing.faq.mix.answer",
      },
      {
        id: "support",
        question: "services.listing.faq.support.question",
        answer: "services.listing.faq.support.answer",
      },
    ],
  },
  cta: {
    title: "services.listing.cta.title",
    description: "services.listing.cta.description",
    primaryLabel: "services.cta.primary",
    primaryHref: "/#contact",
    secondaryLabel: "services.cta.secondary",
    secondaryHref: "mailto:hello@hds.example",
  },
} satisfies ServicesListingContent;
