import { companyData } from "@/features/company/data";
import { createLocalContentRepository } from "@/lib/content";

export const companyContentRepository = createLocalContentRepository({
  content: companyData,
  metadata: {
    organizationName: companyData.company.legalName,
    description: companyData.company.description,
    offices: companyData.offices,
    socialProfiles: companyData.socialLinks,
  },
});

export type CompanyContentRepository = typeof companyContentRepository;
