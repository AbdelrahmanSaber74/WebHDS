import { describe, expect, it } from "vitest";
import { contactFormSchema } from "./contact.schema";

const validForm = {
  budget: "25k-50k",
  company: "Acme Health",
  country: "egypt",
  email: "lead@example.com",
  fullName: "Mona Farouk",
  industry: "healthcare",
  message: "We need a patient operations platform.",
  newsletterOptIn: false,
  phone: "+20 100 000 0000",
  service: "web-development",
  timeline: "one-to-three-months",
};

describe("contactFormSchema", () => {
  it("accepts a complete contact request", () => {
    expect(contactFormSchema.safeParse(validForm).success).toBe(true);
  });

  it("requires important lead qualification fields", () => {
    const result = contactFormSchema.safeParse({ ...validForm, email: "", message: "" });

    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.message)).toEqual(
      expect.arrayContaining(["contact.form.errors.required"]),
    );
  });

  it("rejects invalid email and phone values", () => {
    const result = contactFormSchema.safeParse({ ...validForm, email: "not-email", phone: "abc" });

    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.message)).toEqual(
      expect.arrayContaining(["contact.form.errors.email", "contact.form.errors.phone"]),
    );
  });
});
