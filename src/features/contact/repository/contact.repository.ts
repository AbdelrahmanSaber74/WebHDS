import type { ContactRequest, Lead } from "@/features/contact/types";

export type ContactRepository = {
  submitLead: (request: ContactRequest) => Promise<Lead>;
};

export type MockContactRepositoryOptions = {
  delayMs?: number;
  shouldFail?: (request: ContactRequest) => boolean;
};

function createLeadId() {
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function wait(delayMs: number) {
  return new Promise((resolve) => {
    globalThis.setTimeout(resolve, delayMs);
  });
}

export function createMockContactRepository({
  delayMs = 450,
  shouldFail = (request) => request.email.toLowerCase().includes("fail"),
}: MockContactRepositoryOptions = {}): ContactRepository {
  return {
    async submitLead(request) {
      if (delayMs > 0) {
        await wait(delayMs);
      }

      if (shouldFail(request)) {
        throw new Error("contact.repository.submissionFailed");
      }

      return {
        ...request,
        id: createLeadId(),
        status: "submitted",
        submittedAt: new Date().toISOString(),
      };
    },
  };
}

export const contactRepository = createMockContactRepository();
