import { routesConfig } from "@/config";
import type { FooterContent, NavigationContent } from "@/shared/types";

export const navigationContent = {
  items: [
    { href: routesConfig.home.path, label: "navigation.home" },
    { href: routesConfig.about.path, label: "navigation.about" },
    { href: routesConfig.portfolio.path, label: "navigation.portfolio" },
    { href: routesConfig.contact.path, label: "navigation.contact" },
  ],
  cta: { href: routesConfig.contact.path, label: "navigation.cta" },
  servicesLabel: "navigation.services",
} satisfies NavigationContent;

export const footerContent = {
  legalLinks: [
    { href: "/privacy", label: "company.footer.legal.privacy" },
    { href: "/terms", label: "company.footer.legal.terms" },
  ],
  newsletter: {
    description: "company.footer.newsletter.description",
    inputLabel: "company.footer.newsletter.inputLabel",
    inputPlaceholder: "company.footer.newsletter.placeholder",
    submitLabel: "company.footer.newsletter.submit",
    title: "company.footer.newsletter.title",
  },
} satisfies FooterContent;
