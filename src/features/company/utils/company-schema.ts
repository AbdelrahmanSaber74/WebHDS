import type {
  CompanyContact,
  CompanyCore,
  CompanyOffice,
  CompanyOrganizationSchemaInput,
  CompanySocialLink,
} from "@/features/company/types";

type Translate = (key: string) => string;

function mapContactPoint(translate: Translate, label: string, value: string, href?: string) {
  return {
    "@type": "ContactPoint",
    contactType: translate(label),
    email: value.includes("@") ? value : undefined,
    telephone: value.startsWith("+") ? value : undefined,
    url: href,
  };
}

function buildContactPoints(translate: Translate, contact: CompanyContact) {
  return [
    ...contact.emails.map((channel) =>
      mapContactPoint(translate, channel.label, channel.value, channel.href),
    ),
    ...contact.phones.map((channel) =>
      mapContactPoint(translate, channel.label, channel.value, channel.href),
    ),
    mapContactPoint(translate, contact.sales.label, contact.sales.value, contact.sales.href),
    mapContactPoint(translate, contact.support.label, contact.support.value, contact.support.href),
    mapContactPoint(translate, contact.careers.label, contact.careers.value, contact.careers.href),
  ];
}

export function buildOrganizationSchema(
  translate: Translate,
  company: CompanyCore,
  input: CompanyOrganizationSchemaInput,
  offices: CompanyOffice[],
  socialLinks: CompanySocialLink[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    description: input.description,
    url: input.siteUrl,
    logo: input.logoUrl,
    foundingDate: String(company.foundedYear),
    numberOfEmployees: company.employees,
    sameAs: socialLinks.map((link) => link.href),
    contactPoint: buildContactPoints(translate, input.contact),
    address: offices.map((office) => ({
      "@type": "PostalAddress",
      addressLocality: translate(office.city),
      addressCountry: translate(office.country),
      streetAddress: translate(office.address),
    })),
  };
}
