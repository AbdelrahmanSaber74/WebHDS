export type TranslationKey = string;

export type SEOContent = {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  keywordsKey: TranslationKey;
  canonicalPath: string;
  structuredData?: Record<string, unknown>;
};

export type ImageContent = {
  src: string;
  alt: TranslationKey;
};

export type LinkContent = {
  href: string;
  label: TranslationKey;
  external?: boolean;
};

export type HeroContent = {
  badge?: TranslationKey;
  title: TranslationKey;
  subtitle?: TranslationKey;
  image?: ImageContent;
  primaryAction?: LinkContent;
  secondaryAction?: LinkContent;
};

export type SectionContent = {
  eyebrow?: TranslationKey;
  title: TranslationKey;
  description?: TranslationKey;
};

export type CTAContent = SectionContent & {
  primaryAction?: LinkContent;
  secondaryAction?: LinkContent;
};

export type StatisticContent = {
  id: string;
  label: TranslationKey;
  value: string | number;
  suffix?: TranslationKey;
};

export type TimelineContent = {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
  dateLabel?: TranslationKey;
};

export type FAQContent = {
  id: string;
  question: TranslationKey;
  answer: TranslationKey;
};

export type TestimonialContent = {
  quote: TranslationKey;
  author: TranslationKey;
  role?: TranslationKey;
};

export type OfficeContent = {
  id: string;
  city: TranslationKey;
  country: TranslationKey;
  address: TranslationKey;
  email?: string;
  phone?: string;
};

export type NavigationContent = {
  items: LinkContent[];
  cta: LinkContent;
  servicesLabel: TranslationKey;
};

export type FooterContent = {
  legalLinks: LinkContent[];
  newsletter: {
    title: TranslationKey;
    description: TranslationKey;
    inputLabel: TranslationKey;
    inputPlaceholder: TranslationKey;
    submitLabel: TranslationKey;
  };
};
