import type { ReactNode } from "react";

export type TranslationKey = string;

export type CompanyValue = {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
};

export type CompanyStatistic = {
  id: string;
  label: TranslationKey;
  value: number;
  suffix?: TranslationKey;
};

export type CompanyTechnology = {
  id: string;
  name: string;
  category: TranslationKey;
};

export type CompanyTimelineItem = {
  id: string;
  year: number;
  title: TranslationKey;
  description: TranslationKey;
};

export type CompanyOffice = {
  id: string;
  country: TranslationKey;
  city: TranslationKey;
  address: TranslationKey;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  phone: string;
  email: string;
  workingHours: TranslationKey;
};

export type CompanySocialPlatform =
  | "linkedin"
  | "github"
  | "facebook"
  | "instagram"
  | "x"
  | "youtube"
  | "behance"
  | "dribbble"
  | "medium";

export type CompanySocialLink = {
  id: CompanySocialPlatform;
  label: TranslationKey;
  href: string;
};

export type CompanyContactChannel = {
  label: TranslationKey;
  value: string;
  href?: string;
};

export type CompanyContact = {
  emails: CompanyContactChannel[];
  phones: CompanyContactChannel[];
  sales: CompanyContactChannel;
  support: CompanyContactChannel;
  careers: CompanyContactChannel;
};

export type CompanyLeadershipMember = {
  id: string;
  name: string;
  role: TranslationKey;
  bio: TranslationKey;
  avatar?: ReactNode;
};

export type CompanyCore = {
  name: string;
  legalName: string;
  tagline: TranslationKey;
  description: TranslationKey;
  foundedYear: number;
  employees: number;
  clients: number;
  countries: number;
  mission: TranslationKey;
  vision: TranslationKey;
  values: CompanyValue[];
  certifications: TranslationKey[];
  awards: TranslationKey[];
};

export type CompanyData = {
  company: CompanyCore;
  offices: CompanyOffice[];
  socialLinks: CompanySocialLink[];
  contact: CompanyContact;
  statistics: CompanyStatistic[];
  technologies: CompanyTechnology[];
  timeline: CompanyTimelineItem[];
  leadership?: CompanyLeadershipMember[];
};

export type CompanyOrganizationSchemaInput = {
  description: string;
  logoUrl: string;
  siteUrl: string;
  contact: CompanyContact;
};
