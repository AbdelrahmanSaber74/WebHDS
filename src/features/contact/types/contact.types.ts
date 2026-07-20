import type {
  CTAContent,
  FAQContent,
  HeroContent,
  LinkContent,
  SectionContent,
} from "@/shared/types";

export type LeadStatus = "new" | "submitted" | "failed";

export type LeadSource = "website-contact";

export type InquiryType = "project" | "support" | "partnership";

export type ContactOption = {
  value: string;
  label: string;
};

export type ContactRequest = {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  country: string;
  industry: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  newsletterOptIn: boolean;
  inquiryType: InquiryType;
  source: LeadSource;
};

export type Lead = ContactRequest & {
  id: string;
  status: LeadStatus;
  submittedAt: string;
};

export type ContactMethodContent = {
  id: "sales" | "support" | "email" | "phone";
  title: string;
  description: string;
  actionLabel: string;
};

export type ContactFormContent = SectionContent & {
  fields: {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    industry: string;
    service: string;
    budget: string;
    timeline: string;
    message: string;
    newsletterOptIn: string;
  };
  placeholders: {
    fullName: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    industry: string;
    service: string;
    budget: string;
    timeline: string;
    message: string;
  };
  actions: {
    submit: string;
    retry: string;
  };
  status: {
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
  };
  options: {
    countries: ContactOption[];
    industries: ContactOption[];
    services: ContactOption[];
    budgets: ContactOption[];
    timelines: ContactOption[];
  };
};

export type ContactMapContent = SectionContent & {
  action?: LinkContent;
};

export type ContactContent = {
  hero: HeroContent;
  methods: SectionContent & { items: ContactMethodContent[] };
  offices: SectionContent;
  map: ContactMapContent;
  form: ContactFormContent;
  faq: SectionContent & { items: FAQContent[] };
  cta: CTAContent;
};
