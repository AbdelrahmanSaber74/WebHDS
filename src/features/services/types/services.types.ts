import type { LucideIcon } from "lucide-react";

export type TranslationKey = string;

export type ServiceId =
  "web-development" | "mobile-development" | "ui-ux-design" | "cloud-solutions";

export type ServiceSlug = ServiceId;

export type ServiceFaqItem = {
  id: string;
  question: TranslationKey;
  answer: TranslationKey;
};

export type ServiceProcessStep = {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
};

export type ServiceTechnology = {
  id: string;
  name: string;
};

export type ServiceSeo = {
  title: TranslationKey;
  description: TranslationKey;
  keywords: TranslationKey;
  canonicalPath: string;
};

export type ServiceCta = {
  title: TranslationKey;
  description: TranslationKey;
  primaryLabel: TranslationKey;
  primaryHref: string;
  secondaryLabel: TranslationKey;
  secondaryHref: string;
};

export type Service = {
  id: ServiceId;
  slug: ServiceSlug;
  title: TranslationKey;
  subtitle: TranslationKey;
  shortDescription: TranslationKey;
  fullDescription: TranslationKey;
  icon: LucideIcon;
  heroImage: string;
  heroImageAlt: TranslationKey;
  coverImage: string;
  coverImageAlt: TranslationKey;
  gallery: string[];
  highlights: TranslationKey[];
  benefits: TranslationKey[];
  technologies: ServiceTechnology[];
  developmentProcess: ServiceProcessStep[];
  deliverables: TranslationKey[];
  industries: TranslationKey[];
  faq: ServiceFaqItem[];
  relatedServices: ServiceId[];
  seo: ServiceSeo;
  cta: ServiceCta;
};

export type ServicesListingContent = {
  hero: {
    badge: TranslationKey;
    title: TranslationKey;
    subtitle: TranslationKey;
    primaryLabel: TranslationKey;
    primaryHref: string;
    secondaryLabel: TranslationKey;
    secondaryHref: string;
    image: string;
    imageAlt: TranslationKey;
  };
  technologies: {
    eyebrow: TranslationKey;
    title: TranslationKey;
    description: TranslationKey;
  };
  process: {
    eyebrow: TranslationKey;
    title: TranslationKey;
    description: TranslationKey;
  };
  faq: {
    eyebrow: TranslationKey;
    title: TranslationKey;
    description: TranslationKey;
    items: ServiceFaqItem[];
  };
  cta: ServiceCta;
};
