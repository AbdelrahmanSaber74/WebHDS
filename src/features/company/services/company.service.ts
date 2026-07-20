import type {
  CompanyContact,
  CompanyCore,
  CompanyData,
  CompanyLeadershipMember,
  CompanyOffice,
  CompanySocialLink,
  CompanyStatistic,
  CompanyTechnology,
  CompanyTimelineItem,
} from "@/features/company/types";
import { companyContentRepository } from "./company-content.repository";

export type CompanyServicePort = {
  getCompany: () => CompanyCore;
  getContact: () => CompanyContact;
  getContent: () => CompanyData;
  getLeadership: () => CompanyLeadershipMember[];
  getMetadata: typeof companyContentRepository.getMetadata;
  getOffices: () => CompanyOffice[];
  getSocialLinks: () => CompanySocialLink[];
  getStatistics: () => CompanyStatistic[];
  getTechnologies: () => CompanyTechnology[];
  getTimeline: () => CompanyTimelineItem[];
};

function getContent() {
  return companyContentRepository.getContent();
}

function getCompany() {
  return getContent().company;
}

function getContact() {
  return getContent().contact;
}

function getLeadership() {
  return getContent().leadership ?? [];
}

function getOffices() {
  return getContent().offices;
}

function getSocialLinks() {
  return getContent().socialLinks;
}

function getStatistics() {
  return getContent().statistics;
}

function getTechnologies() {
  return getContent().technologies;
}

function getTimeline() {
  return getContent().timeline;
}

export const companyService: CompanyServicePort = {
  getCompany,
  getContact,
  getContent,
  getLeadership,
  getMetadata: companyContentRepository.getMetadata,
  getOffices,
  getSocialLinks,
  getStatistics,
  getTechnologies,
  getTimeline,
};
