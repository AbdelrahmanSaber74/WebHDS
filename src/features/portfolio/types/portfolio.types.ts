export type TranslationKey = string;

export type PortfolioProjectId =
  | "careflow-command"
  | "nova-payments"
  | "marketlane-commerce"
  | "fleetpulse-logistics"
  | "learnsphere-academy"
  | "estateos-platform"
  | "factorygrid-ops"
  | "quickbite-delivery";

export type PortfolioProjectSlug = PortfolioProjectId;

export type PortfolioMetric = {
  id: string;
  label: TranslationKey;
  value: string;
};

export type PortfolioTestimonial = {
  quote: TranslationKey;
  author: TranslationKey;
  role: TranslationKey;
};

export type PortfolioSeo = {
  title: TranslationKey;
  description: TranslationKey;
  keywords: TranslationKey;
  canonicalPath: string;
};

export type PortfolioCta = {
  title: TranslationKey;
  description: TranslationKey;
  primaryLabel: TranslationKey;
  primaryHref: string;
  secondaryLabel: TranslationKey;
  secondaryHref: string;
};

export type PortfolioProject = {
  id: PortfolioProjectId;
  slug: PortfolioProjectSlug;
  title: TranslationKey;
  subtitle: TranslationKey;
  clientName: string;
  industry: TranslationKey;
  location: TranslationKey;
  duration: TranslationKey;
  year: number;
  services: TranslationKey[];
  technologies: string[];
  teamSize: number;
  featuredImage: string;
  featuredImageAlt: TranslationKey;
  gallery: string[];
  challenge: TranslationKey;
  solution: TranslationKey;
  implementation: TranslationKey[];
  architectureHighlights: TranslationKey[];
  businessResults: TranslationKey[];
  metrics: PortfolioMetric[];
  testimonial: PortfolioTestimonial;
  relatedProjects: PortfolioProjectId[];
  seo: PortfolioSeo;
  cta: PortfolioCta;
  featured: boolean;
};

export type PortfolioFilterState = {
  industry?: TranslationKey;
  technology?: string;
  service?: TranslationKey;
  search?: string;
};

export type PortfolioListingContent = {
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
  featured: {
    eyebrow: TranslationKey;
    title: TranslationKey;
    description: TranslationKey;
  };
  grid: {
    eyebrow: TranslationKey;
    title: TranslationKey;
    description: TranslationKey;
  };
  statistics: {
    eyebrow: TranslationKey;
    title: TranslationKey;
    description: TranslationKey;
  };
  cta: PortfolioCta;
};
