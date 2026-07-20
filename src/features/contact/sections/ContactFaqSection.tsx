import { Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Accordion } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { ContactSectionHeader } from "@/features/contact/components";
import type { ContactContent } from "@/features/contact/types";

export type ContactFaqSectionProps = {
  data: ContactContent["faq"];
};

export function ContactFaqSection({ data }: ContactFaqSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <Stack gap="10" maxW="containerLg" mx="auto">
        <ContactSectionHeader align="center" header={data} />
        <Accordion
          items={data.items.map((item) => ({
            content: t(item.answer),
            id: item.id,
            title: t(item.question),
          }))}
        />
      </Stack>
    </SectionContainer>
  );
}
