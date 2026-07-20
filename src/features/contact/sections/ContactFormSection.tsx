import { SimpleGrid, Stack } from "@chakra-ui/react";
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
      <SimpleGrid alignItems="start" columns={{ base: 1, lg: 2 }} gap="10">
        <Stack gap="6" position={{ lg: "sticky" }} top={{ lg: "28" }}>
          <ContactSectionHeader header={data} />
        </Stack>
        <ContactForm content={data} repository={repository} />
      </SimpleGrid>
    </SectionContainer>
  );
}
