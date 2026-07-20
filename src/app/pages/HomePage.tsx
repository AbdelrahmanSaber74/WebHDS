import { Box } from "@chakra-ui/react";
import {
  useCompany,
  useCompanyContact,
  useOffices,
  useSocialLinks,
  buildOrganizationSchema,
} from "@/features/company";
import {
  ClientsSection,
  CtaSection,
  FaqSection,
  HeroSection,
  ProcessSection,
  ServicesPreviewSection,
  StatisticsSection,
  TechnologiesSection,
  TestimonialsSection,
  useHomeContent,
  WhyChooseUsSection,
} from "@/features/home";
import { useSeo, useStructuredData } from "@/shared/hooks";
import { useI18n } from "@/shared/i18n";
import { appConfig } from "@/config";
import { COMPANY_LOGO_PATH, COMPANY_SCHEMA_ID } from "@/features/company/constants";

export function HomePage() {
  useSeo("home");
  const { t } = useI18n();
  const company = useCompany();
  const contact = useCompanyContact();
  const offices = useOffices();
  const socialLinks = useSocialLinks();
  const homeContent = useHomeContent();

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
      <HeroSection data={homeContent.hero} />
      <ClientsSection data={homeContent.clients} />
      <ServicesPreviewSection data={homeContent.servicesPreview} />
      <TechnologiesSection data={homeContent.technologies} />
      <WhyChooseUsSection data={homeContent.whyChooseUs} />
      <ProcessSection data={homeContent.process} />
      <StatisticsSection data={homeContent.statistics} />
      <TestimonialsSection data={homeContent.testimonials} />
      <FaqSection data={homeContent.faq} />
      <CtaSection data={homeContent.cta} />
    </Box>
  );
}
