import { Box } from "@chakra-ui/react";
import { useCompany, useCompanyContact, useOffices } from "@/features/company";
import { useSeo, useStructuredData } from "@/shared/hooks";
import { useI18n } from "@/shared/i18n";
import { useContactContent } from "@/features/contact/hooks";
import { buildContactSchema } from "@/features/contact/services";
import {
  ContactCtaSection,
  ContactFaqSection,
  ContactFormSection,
  ContactHeroSection,
  ContactMapSection,
  ContactMethodsSection,
  ContactOfficesSection,
} from "@/features/contact/sections";

export function ContactFeature() {
  useSeo("contact");
  const { t } = useI18n();
  const content = useContactContent();
  const company = useCompany();
  const contact = useCompanyContact();
  const offices = useOffices();

  useStructuredData(
    buildContactSchema(t, {
      companyName: company.name,
      contact,
      description: t(company.description),
      offices,
    }),
    "contact-structured-data",
  );

  return (
    <Box as="main" id="main-content">
      <ContactHeroSection data={content.hero} />
      <ContactMethodsSection contact={contact} data={content.methods} />
      <ContactOfficesSection data={content.offices} offices={offices} />
      <ContactMapSection data={content.map} offices={offices} />
      <ContactFormSection data={content.form} />
      <ContactFaqSection data={content.faq} />
      <ContactCtaSection data={content.cta} />
    </Box>
  );
}
