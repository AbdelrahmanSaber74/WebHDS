import { appConfig } from "./app.config";

export type SeoRouteKey =
  "home" | "about" | "services" | "portfolio" | "contact" | "notFound" | "error";

export type SeoConfig = {
  titleKey: string;
  descriptionKey: string;
  keywordsKey: string;
  canonicalPath: string;
  structuredData?: Record<string, unknown>;
};

export const seoConfig: Record<SeoRouteKey, SeoConfig> = {
  home: {
    titleKey: "seo.home.title",
    descriptionKey: "seo.home.description",
    keywordsKey: "seo.home.keywords",
    canonicalPath: "/",
  },
  about: {
    titleKey: "seo.about.title",
    descriptionKey: "seo.about.description",
    keywordsKey: "seo.about.keywords",
    canonicalPath: "/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About HDS",
      url: new URL("/about", appConfig.url).toString(),
    },
  },
  services: {
    titleKey: "seo.services.title",
    descriptionKey: "seo.services.description",
    keywordsKey: "seo.services.keywords",
    canonicalPath: "/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "HDS Services",
      url: new URL("/services", appConfig.url).toString(),
    },
  },
  portfolio: {
    titleKey: "seo.portfolio.title",
    descriptionKey: "seo.portfolio.description",
    keywordsKey: "seo.portfolio.keywords",
    canonicalPath: "/portfolio",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "HDS Portfolio",
      url: new URL("/portfolio", appConfig.url).toString(),
    },
  },
  contact: {
    titleKey: "seo.contact.title",
    descriptionKey: "seo.contact.description",
    keywordsKey: "seo.contact.keywords",
    canonicalPath: "/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact HDS",
      url: new URL("/contact", appConfig.url).toString(),
    },
  },
  notFound: {
    titleKey: "seo.notFound.title",
    descriptionKey: "seo.notFound.description",
    keywordsKey: "seo.notFound.keywords",
    canonicalPath: "/404",
  },
  error: {
    titleKey: "seo.error.title",
    descriptionKey: "seo.error.description",
    keywordsKey: "seo.error.keywords",
    canonicalPath: "/error",
  },
};
