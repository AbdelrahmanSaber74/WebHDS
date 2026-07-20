import { z } from "zod";
import {
  CONTACT_COMPANY_MAX_LENGTH,
  CONTACT_MESSAGE_MAX_LENGTH,
  CONTACT_NAME_MAX_LENGTH,
  CONTACT_PHONE_MAX_LENGTH,
  CONTACT_PHONE_PATTERN,
} from "@/features/contact/constants";

const requiredString = z.string().trim().min(1, "contact.form.errors.required");
const optionalText = (max: number) =>
  z.string().trim().max(max, "contact.form.errors.maxLength").optional().or(z.literal(""));

export const contactFormSchema = z.object({
  fullName: requiredString.max(CONTACT_NAME_MAX_LENGTH, "contact.form.errors.maxLength"),
  company: optionalText(CONTACT_COMPANY_MAX_LENGTH),
  email: requiredString.email("contact.form.errors.email"),
  phone: z
    .string()
    .trim()
    .max(CONTACT_PHONE_MAX_LENGTH, "contact.form.errors.maxLength")
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || CONTACT_PHONE_PATTERN.test(value), "contact.form.errors.phone"),
  country: requiredString,
  industry: requiredString,
  service: requiredString,
  budget: requiredString,
  timeline: requiredString,
  message: requiredString.max(CONTACT_MESSAGE_MAX_LENGTH, "contact.form.errors.maxMessage"),
  newsletterOptIn: z.boolean(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const defaultContactFormValues: ContactFormValues = {
  budget: "",
  company: "",
  country: "",
  email: "",
  fullName: "",
  industry: "",
  message: "",
  newsletterOptIn: false,
  phone: "",
  service: "",
  timeline: "",
};
