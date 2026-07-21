import type { LucideIcon } from "lucide-react";

export type TranslationKey = string;

export type HomeHero = {
  eyebrowKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  primaryCtaKey: TranslationKey;
  primaryCtaHref: string;
  secondaryCtaKey: TranslationKey;
  secondaryCtaHref: string;
  image: string;
  imageAltKey: TranslationKey;
};

export type HomeAboutHighlight = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: LucideIcon;
};

export type HomeAbout = {
  header: HomeSectionHeader;
  bodyKey: TranslationKey;
  highlights: HomeAboutHighlight[];
  ctaKey: TranslationKey;
  ctaHref: string;
};

export type HomeClient = {
  id: string;
  labelKey: TranslationKey;
  accent: string;
  logoUrl?: string;
};

export type HomeFeatureCard = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: LucideIcon;
};

export type HomeTechnology = {
  id: string;
  label: string;
};

export type HomeProcessStep = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
};

export type HomeStatistic = {
  id: string;
  value: string;
  labelKey: TranslationKey;
};

export type HomeTestimonial = {
  id: string;
  quoteKey: TranslationKey;
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  companyKey: TranslationKey;
};

export type HomeFaq = {
  id: string;
  titleKey: TranslationKey;
  contentKey: TranslationKey;
};

export type HomeCta = {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  primaryCtaKey: TranslationKey;
  primaryCtaHref: string;
  secondaryCtaKey: TranslationKey;
  secondaryCtaHref: string;
};

export type HomeSectionHeader = {
  eyebrowKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey?: TranslationKey;
};

export type HomeContent = {
  hero: HomeHero;
  about: HomeAbout;
  clients: {
    header: HomeSectionHeader;
    items: HomeClient[];
  };
  servicesPreview: {
    header: HomeSectionHeader;
    items: HomeFeatureCard[];
  };
  technologies: {
    header: HomeSectionHeader;
    items: HomeTechnology[];
  };
  whyChooseUs: {
    header: HomeSectionHeader;
    items: HomeFeatureCard[];
  };
  process: {
    header: HomeSectionHeader;
    items: HomeProcessStep[];
  };
  statistics: {
    header: HomeSectionHeader;
    items: HomeStatistic[];
  };
  testimonials: {
    header: HomeSectionHeader;
    items: HomeTestimonial[];
  };
  faq: {
    header: HomeSectionHeader;
    items: HomeFaq[];
  };
  cta: HomeCta;
};
