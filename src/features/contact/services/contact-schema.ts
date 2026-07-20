import { appConfig } from "@/config";
import type { CompanyContact, CompanyOffice } from "@/features/company/types";

type Translate = (key: string) => string;

function buildContactPoint(translate: Translate, label: string, value: string, href?: string) {
  return {
    "@type": "ContactPoint",
    contactType: translate(label),
    email: value.includes("@") ? value : undefined,
    telephone: value.startsWith("+") ? value : undefined,
    url: href,
  };
}

export function buildContactSchema(
  translate: Translate,
  input: {
    companyName: string;
    description: string;
    contact: CompanyContact;
    offices: CompanyOffice[];
  },
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: translate("seo.contact.title"),
        description: translate("seo.contact.description"),
        url: new URL("/contact", appConfig.url).toString(),
      },
      {
        "@type": "LocalBusiness",
        name: input.companyName,
        description: input.description,
        url: appConfig.url,
        contactPoint: [
          buildContactPoint(
            translate,
            input.contact.sales.label,
            input.contact.sales.value,
            input.contact.sales.href,
          ),
          buildContactPoint(
            translate,
            input.contact.support.label,
            input.contact.support.value,
            input.contact.support.href,
          ),
          ...input.contact.phones.map((channel) =>
            buildContactPoint(translate, channel.label, channel.value, channel.href),
          ),
        ],
        address: input.offices.map((office) => ({
          "@type": "PostalAddress",
          addressCountry: translate(office.country),
          addressLocality: translate(office.city),
          streetAddress: translate(office.address),
        })),
      },
    ],
  };
}
