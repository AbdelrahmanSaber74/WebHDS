import { Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { ContactForm, ContactSectionHeader } from "@/features/contact/components";
import type { ContactRepository } from "@/features/contact/repository";
import type { ContactFormContent } from "@/features/contact/types";

export type ContactFormSectionProps = {
  data: ContactFormContent;
  repository?: ContactRepository;
};

export function ContactFormSection({ data, repository }: ContactFormSectionProps) {
  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="10" align="stretch" maxW="3xl" mx="auto">
        <ContactSectionHeader align="center" header={data} />
        <ContactForm content={data} repository={repository} />
      </Stack>
    </SectionContainer>
  );
}
