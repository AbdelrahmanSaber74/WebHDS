import { Box } from "@chakra-ui/react";
import {
  useCompany,
  useCompanyContact,
  useOffices,
  useSocialLinks,
  buildOrganizationSchema,
} from "@/features/company";
import {
  AboutSection,
  ClientsSection,
  CtaSection,
  FaqSection,
  HeroSection,
  ProcessSection,
  ServicesPreviewSection,
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
      <AboutSection data={homeContent.about} />
      <ServicesPreviewSection data={homeContent.servicesPreview} />
      <ProcessSection data={homeContent.process} />
      <WhyChooseUsSection data={homeContent.whyChooseUs} statistics={homeContent.statistics} />
      <ClientsSection data={homeContent.clients} />
      <TestimonialsSection data={homeContent.testimonials} />
      <FaqSection data={homeContent.faq} />
      <CtaSection data={homeContent.cta} />
    </Box>
  );
}
