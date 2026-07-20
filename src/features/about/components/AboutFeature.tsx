import { Box } from "@chakra-ui/react";
import {
  buildOrganizationSchema,
  companyService,
  COMPANY_LOGO_PATH,
  COMPANY_SCHEMA_ID,
  useCompany,
  useCompanyContact,
  useOffices,
  useSocialLinks,
} from "@/features/company";
import { appConfig } from "@/config";
import { useSeo, useStructuredData } from "@/shared/hooks";
import { useI18n } from "@/shared/i18n";
import { useAboutContent } from "@/features/about/hooks";
import {
  AboutCtaSection,
  AboutHeroSection,
  AboutProcessSection,
  AboutStatisticsSection,
  AboutTechnologiesSection,
  AboutTimelineSection,
  CompanyStorySection,
  CoreValuesSection,
  IndustriesSection,
  MissionVisionSection,
  TeamAndCertificationsSection,
  WhyChooseHdsSection,
} from "@/features/about/sections";

export function AboutFeature() {
  useSeo("about");
  const { t } = useI18n();
  const about = useAboutContent();
  const company = useCompany();
  const contact = useCompanyContact();
  const offices = useOffices();
  const socialLinks = useSocialLinks();
  const statistics = companyService.getStatistics();
  const technologies = companyService.getTechnologies();
  const timeline = companyService.getTimeline();

  useStructuredData(
    buildOrganizationSchema(
      t,
      company,
      {
        contact,
        description: t(company.description),
        logoUrl: new URL(COMPANY_LOGO_PATH, appConfig.url).toString(),
        siteUrl: appConfig.url,
      },
      offices,
      socialLinks,
    ),
    COMPANY_SCHEMA_ID,
  );

  return (
    <Box as="main" id="main-content">
      <AboutHeroSection data={about.hero} />
      <CompanyStorySection data={about.story} />
      <MissionVisionSection company={company} header={about.missionVision} />
      <CoreValuesSection header={about.values} values={company.values} />
      <WhyChooseHdsSection data={about.whyChoose} />
      <AboutProcessSection data={about.process} />
      <AboutTimelineSection header={about.timeline} timeline={timeline} />
      <AboutTechnologiesSection header={about.technologies} technologies={technologies} />
      <IndustriesSection data={about.industries} />
      <AboutStatisticsSection header={about.statistics} statistics={statistics} />
      <TeamAndCertificationsSection
        certificationsHeader={about.certifications}
        company={company}
        team={about.team}
      />
      <AboutCtaSection data={about.cta} />
    </Box>
  );
}
