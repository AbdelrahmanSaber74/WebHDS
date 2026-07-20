import { describe, expect, it } from "vitest";
import type { ContactRequest } from "@/features/contact/types";
import { createMockContactRepository } from "./contact.repository";

const request: ContactRequest = {
  budget: "25k-50k",
  country: "egypt",
  email: "lead@example.com",
  fullName: "Mona Farouk",
  industry: "healthcare",
  inquiryType: "project",
  message: "We need a patient operations platform.",
  newsletterOptIn: true,
  service: "web-development",
  source: "website-contact",
  timeline: "one-to-three-months",
};

describe("contactRepository", () => {
  it("submits a lead through the mock repository", async () => {
    const repository = createMockContactRepository({ delayMs: 0 });

    const lead = await repository.submitLead(request);

    expect(lead.id).toMatch(/^lead-/);
    expect(lead.status).toBe("submitted");
    expect(lead.email).toBe(request.email);
    expect(lead.submittedAt).toEqual(expect.any(String));
  });

  it("normalizes mock submission failures", async () => {
    const repository = createMockContactRepository({ delayMs: 0, shouldFail: () => true });

    await expect(repository.submitLead(request)).rejects.toThrow(
      "contact.repository.submissionFailed",
    );
  });
});
