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

  return (
    <Section containerSize="md" bg="bg.subtle">
      <HomeSectionHeader header={data.header} />
      <Accordion items={items} />
    </Section>
  );
}
