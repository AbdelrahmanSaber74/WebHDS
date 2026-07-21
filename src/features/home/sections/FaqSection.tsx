import { SimpleGrid, Stack } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { Accordion } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type FaqSectionProps = {
  data: HomeContent["faq"];
};

export function FaqSection({ data }: FaqSectionProps) {
  const { t } = useI18n();
  const items = data.items.map((item) => ({
    id: item.id,
    title: t(item.titleKey),
    content: t(item.contentKey),
  }));

  const midIndex = Math.ceil(items.length / 2);
  const leftColItems = items.slice(0, midIndex);
  const rightColItems = items.slice(midIndex);

  return (
    <Section containerSize="xl" bg="bg.subtle">
      <Stack gap={{ base: "5", md: "6" }} align="stretch">
        <HomeSectionHeader header={data.header} />
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="6" alignItems="start">
          <Accordion items={leftColItems} />
          <Accordion items={rightColItems} />
        </SimpleGrid>
      </Stack>
    </Section>
  );
}
