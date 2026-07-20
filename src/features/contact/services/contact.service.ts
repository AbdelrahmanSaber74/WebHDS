import { seoConfig } from "@/config";
import { contactContent } from "@/features/contact/data";
import type { ContactRequest } from "@/features/contact/types";
import { createLocalContentRepository } from "@/lib/content";
import { contactRepository } from "@/features/contact/repository";
import type { ContactRepository } from "@/features/contact/repository";

export const contactContentRepository = createLocalContentRepository({
  content: contactContent,
  metadata: seoConfig.contact,
});

export type ContactServicePort = {
  getContent: typeof contactContentRepository.getContent;
  getMetadata: typeof contactContentRepository.getMetadata;
  submitLead: (
    request: ContactRequest,
    repository?: ContactRepository,
  ) => ReturnType<ContactRepository["submitLead"]>;
};

function submitLead(request: ContactRequest, repository: ContactRepository = contactRepository) {
  return repository.submitLead(request);
}

export const contactService: ContactServicePort = {
  getContent: contactContentRepository.getContent,
  getMetadata: contactContentRepository.getMetadata,
  submitLead,
};
