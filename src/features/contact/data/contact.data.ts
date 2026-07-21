import { routesConfig } from "@/config";
import type { ContactContent } from "@/features/contact/types";

export const contactContent: ContactContent = {
  hero: {
    badge: "contact.hero.badge",
    title: "contact.hero.title",
    subtitle: "contact.hero.subtitle",
    primaryAction: {
      href: "#contact-form",
      label: "contact.hero.primary",
    },
    secondaryAction: {
      href: "mailto:sales@hds.example",
      label: "contact.hero.secondary",
    },
  },
  methods: {
    eyebrow: "contact.methods.eyebrow",
    title: "contact.methods.title",
    description: "contact.methods.description",
    items: [
      {
        id: "sales",
        title: "contact.methods.sales.title",
        description: "contact.methods.sales.description",
        actionLabel: "contact.methods.sales.action",
      },
      {
        id: "support",
        title: "contact.methods.support.title",
        description: "contact.methods.support.description",
        actionLabel: "contact.methods.support.action",
      },
      {
        id: "email",
        title: "contact.methods.email.title",
        description: "contact.methods.email.description",
        actionLabel: "contact.methods.email.action",
      },
      {
        id: "phone",
        title: "contact.methods.phone.title",
        description: "contact.methods.phone.description",
        actionLabel: "contact.methods.phone.action",
      },
    ],
  },
  offices: {
    eyebrow: "contact.offices.eyebrow",
    title: "contact.offices.title",
    description: "contact.offices.description",
  },
  map: {
    eyebrow: "contact.map.eyebrow",
    title: "contact.map.title",
    description: "contact.map.description",
    action: {
      href: "https://maps.google.com",
      label: "contact.map.action",
      external: true,
    },
  },
  form: {
    eyebrow: "contact.form.eyebrow",
    title: "contact.form.title",
    description: "contact.form.description",
    fields: {
      fullName: "contact.form.fields.fullName",
      company: "contact.form.fields.company",
      email: "contact.form.fields.email",
      phone: "contact.form.fields.phone",
      country: "contact.form.fields.country",
      industry: "contact.form.fields.industry",
      service: "contact.form.fields.service",
      budget: "contact.form.fields.budget",
      timeline: "contact.form.fields.timeline",
      message: "contact.form.fields.message",
      newsletterOptIn: "contact.form.fields.newsletterOptIn",
    },
    placeholders: {
      fullName: "contact.form.placeholders.fullName",
      company: "contact.form.placeholders.company",
      email: "contact.form.placeholders.email",
      phone: "contact.form.placeholders.phone",
      country: "contact.form.placeholders.country",
      industry: "contact.form.placeholders.industry",
      service: "contact.form.placeholders.service",
      budget: "contact.form.placeholders.budget",
      timeline: "contact.form.placeholders.timeline",
      message: "contact.form.placeholders.message",
    },
    actions: {
      submit: "contact.form.actions.submit",
      retry: "contact.form.actions.retry",
    },
    status: {
      successTitle: "contact.form.status.successTitle",
      successDescription: "contact.form.status.successDescription",
      errorTitle: "contact.form.status.errorTitle",
      errorDescription: "contact.form.status.errorDescription",
    },
    options: {
      countries: [
        { value: "egypt", label: "contact.options.country.egypt" },
        { value: "uae", label: "contact.options.country.uae" },
        { value: "saudi-arabia", label: "contact.options.country.saudiArabia" },
        { value: "usa", label: "contact.options.country.usa" },
        { value: "germany", label: "contact.options.country.germany" },
        { value: "other", label: "contact.options.country.other" },
      ],
      industries: [
        { value: "healthcare", label: "contact.options.industry.healthcare" },
        { value: "fintech", label: "contact.options.industry.fintech" },
        { value: "ecommerce", label: "contact.options.industry.ecommerce" },
        { value: "logistics", label: "contact.options.industry.logistics" },
        { value: "education", label: "contact.options.industry.education" },
        { value: "real-estate", label: "contact.options.industry.realEstate" },
        { value: "manufacturing", label: "contact.options.industry.manufacturing" },
        { value: "saas", label: "contact.options.industry.saas" },
        { value: "other", label: "contact.options.industry.other" },
      ],
      services: [
        { value: "web-development", label: "contact.options.service.webDevelopment" },
        { value: "mobile-development", label: "contact.options.service.mobileDevelopment" },
        { value: "ui-ux-design", label: "contact.options.service.uiUxDesign" },
        { value: "cloud-solutions", label: "contact.options.service.cloudSolutions" },
        { value: "product-strategy", label: "contact.options.service.productStrategy" },
        { value: "not-sure", label: "contact.options.service.notSure" },
      ],
      budgets: [
        { value: "under-5k", label: "contact.options.budget.under5k" },
        { value: "5k-10k", label: "contact.options.budget.from5kTo10k" },
        { value: "10k-25k", label: "contact.options.budget.from10kTo25k" },
        { value: "over-25k", label: "contact.options.budget.over25k" },
        { value: "not-sure", label: "contact.options.budget.notSure" },
      ],
      timelines: [
        { value: "asap", label: "contact.options.timeline.asap" },
        { value: "one-to-three-months", label: "contact.options.timeline.oneToThree" },
        { value: "three-to-six-months", label: "contact.options.timeline.threeToSix" },
        { value: "six-plus-months", label: "contact.options.timeline.sixPlus" },
        { value: "not-sure", label: "contact.options.timeline.notSure" },
      ],
    },
  },
  faq: {
    eyebrow: "contact.faq.eyebrow",
    title: "contact.faq.title",
    description: "contact.faq.description",
    items: [
      {
        id: "response-time",
        question: "contact.faq.responseTime.question",
        answer: "contact.faq.responseTime.answer",
      },
      {
        id: "nda",
        question: "contact.faq.nda.question",
        answer: "contact.faq.nda.answer",
      },
      {
        id: "handover",
        question: "contact.faq.handover.question",
        answer: "contact.faq.handover.answer",
      },
    ],
  },
  cta: {
    title: "contact.cta.title",
    description: "contact.cta.description",
    primaryAction: {
      href: "#contact-form",
      label: "contact.cta.primary",
    },
    secondaryAction: {
      href: routesConfig.services.path,
      label: "contact.cta.secondary",
    },
  },
};
