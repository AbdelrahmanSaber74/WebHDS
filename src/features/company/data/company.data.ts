import {
  COMPANY_FOUNDED_YEAR,
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
} from "@/features/company/constants";
import type { CompanyData } from "@/features/company/types";

export const companyData: CompanyData = {
  company: {
    name: COMPANY_NAME,
    legalName: COMPANY_LEGAL_NAME,
    tagline: "company.profile.tagline",
    description: "company.profile.description",
    foundedYear: COMPANY_FOUNDED_YEAR,
    employees: 38,
    clients: 94,
    countries: 14,
    mission: "company.profile.mission",
    vision: "company.profile.vision",
    values: [
      {
        id: "clarity",
        title: "company.values.clarity.title",
        description: "company.values.clarity.description",
      },
      {
        id: "discipline",
        title: "company.values.discipline.title",
        description: "company.values.discipline.description",
      },
      {
        id: "partnership",
        title: "company.values.partnership.title",
        description: "company.values.partnership.description",
      },
    ],
    certifications: [
      "company.profile.certifications.iso",
      "company.profile.certifications.security",
      "company.profile.certifications.delivery",
    ],
    awards: ["company.profile.awards.delivery", "company.profile.awards.design"],
  },
  offices: [
    {
      id: "cairo",
      country: "company.offices.cairo.country",
      city: "company.offices.cairo.city",
      address: "company.offices.cairo.address",
      coordinates: { latitude: 30.0444, longitude: 31.2357 },
      phone: "+20 100 000 0000",
      email: "cairo@hds.example",
      workingHours: "company.offices.cairo.hours",
    },
    {
      id: "dubai",
      country: "company.offices.dubai.country",
      city: "company.offices.dubai.city",
      address: "company.offices.dubai.address",
      coordinates: { latitude: 25.2048, longitude: 55.2708 },
      phone: "+971 50 000 0000",
      email: "dubai@hds.example",
      workingHours: "company.offices.dubai.hours",
    },
  ],
  socialLinks: [
    {
      id: "linkedin",
      label: "company.social.linkedin",
      href: "https://www.linkedin.com/company/hds",
    },
    { id: "github", label: "company.social.github", href: "https://github.com/hds" },
    { id: "facebook", label: "company.social.facebook", href: "https://facebook.com/hds" },
    { id: "instagram", label: "company.social.instagram", href: "https://instagram.com/hds" },
    { id: "x", label: "company.social.x", href: "https://x.com/hds" },
    { id: "youtube", label: "company.social.youtube", href: "https://youtube.com/@hds" },
    { id: "behance", label: "company.social.behance", href: "https://behance.net/hds" },
    { id: "dribbble", label: "company.social.dribbble", href: "https://dribbble.com/hds" },
    { id: "medium", label: "company.social.medium", href: "https://medium.com/@hds" },
  ],
  contact: {
    emails: [
      {
        label: "company.contact.emails.general",
        value: "hello@hds.example",
        href: "mailto:hello@hds.example",
      },
      {
        label: "company.contact.emails.info",
        value: "info@hds.example",
        href: "mailto:info@hds.example",
      },
    ],
    phones: [
      {
        label: "company.contact.phones.main",
        value: "+20 100 000 0000",
        href: "tel:+201000000000",
      },
      {
        label: "company.contact.phones.office",
        value: "+971 50 000 0000",
        href: "tel:+971500000000",
      },
    ],
    sales: {
      label: "company.contact.sales",
      value: "sales@hds.example",
      href: "mailto:sales@hds.example",
    },
    support: {
      label: "company.contact.support",
      value: "support@hds.example",
      href: "mailto:support@hds.example",
    },
    careers: {
      label: "company.contact.careers",
      value: "careers@hds.example",
      href: "mailto:careers@hds.example",
    },
  },
  statistics: [
    {
      id: "projects",
      label: "company.statistics.projects",
      value: 120,
      suffix: "company.statistics.plus",
    },
    {
      id: "clients",
      label: "company.statistics.clients",
      value: 94,
      suffix: "company.statistics.plus",
    },
    {
      id: "countries",
      label: "company.statistics.countries",
      value: 14,
      suffix: "company.statistics.plus",
    },
    {
      id: "uptime",
      label: "company.statistics.uptime",
      value: 99,
      suffix: "company.statistics.percent",
    },
  ],
  technologies: [
    { id: "react", name: "React", category: "company.technologies.frontend" },
    { id: "typescript", name: "TypeScript", category: "company.technologies.frontend" },
    { id: "chakra", name: "Chakra UI", category: "company.technologies.frontend" },
    { id: "node", name: "Node.js", category: "company.technologies.backend" },
    { id: "postgres", name: "PostgreSQL", category: "company.technologies.backend" },
    { id: "aws", name: "AWS", category: "company.technologies.cloud" },
    { id: "docker", name: "Docker", category: "company.technologies.cloud" },
    { id: "figma", name: "Figma", category: "company.technologies.design" },
  ],
  timeline: [
    {
      id: "2018",
      year: 2018,
      title: "company.timeline.2018.title",
      description: "company.timeline.2018.description",
    },
    {
      id: "2021",
      year: 2021,
      title: "company.timeline.2021.title",
      description: "company.timeline.2021.description",
    },
    {
      id: "2024",
      year: 2024,
      title: "company.timeline.2024.title",
      description: "company.timeline.2024.description",
    },
  ],
  leadership: [
    {
      id: "ceo",
      name: "Ahmed El-Sayed",
      role: "company.leadership.ceo.role",
      bio: "company.leadership.ceo.bio",
    },
    {
      id: "cto",
      name: "Mona Farouk",
      role: "company.leadership.cto.role",
      bio: "company.leadership.cto.bio",
    },
  ],
};
