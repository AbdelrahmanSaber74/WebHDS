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
      id: "riyadh",
      country: "company.offices.riyadh.country",
      city: "company.offices.riyadh.city",
      address: "company.offices.riyadh.address",
      coordinates: { latitude: 24.7136, longitude: 46.6753 },
      phone: "+966 54 443 5100",
      email: "support@hds-sa.com",
      workingHours: "company.offices.riyadh.hours",
    },
    {
      id: "mansoura",
      country: "company.offices.mansoura.country",
      city: "company.offices.mansoura.city",
      address: "company.offices.mansoura.address",
      coordinates: { latitude: 31.0409, longitude: 31.3785 },
      phone: "+20 101 828 4282",
      email: "support@hds-sa.com",
      workingHours: "company.offices.mansoura.hours",
    },
  ],
  socialLinks: [],
  contact: {
    emails: [
      {
        label: "company.contact.emails.general",
        value: "support@hds-sa.com",
        href: "mailto:support@hds-sa.com",
      },
      {
        label: "company.contact.emails.info",
        value: "support@hds-sa.com",
        href: "mailto:support@hds-sa.com",
      },
    ],
    phones: [
      {
        label: "company.contact.phones.main",
        value: "+966 54 443 5100",
        href: "tel:+966544435100",
      },
      {
        label: "company.contact.phones.office",
        value: "+20 101 828 4282",
        href: "tel:+201018284282",
      },
    ],
    sales: {
      label: "company.contact.sales",
      value: "support@hds-sa.com",
      href: "mailto:support@hds-sa.com",
    },
    support: {
      label: "company.contact.support",
      value: "support@hds-sa.com",
      href: "mailto:support@hds-sa.com",
    },
    careers: {
      label: "company.contact.careers",
      value: "support@hds-sa.com",
      href: "mailto:support@hds-sa.com",
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
