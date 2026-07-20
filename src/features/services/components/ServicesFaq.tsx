import { Accordion } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { ServiceFaqItem } from "@/features/services/types";

export type ServicesFaqProps = {
  items: ServiceFaqItem[];
};

export function ServicesFaq({ items }: ServicesFaqProps) {
  const { t } = useI18n();

  return (
    <Accordion
      items={items.map((item) => ({
        content: t(item.answer),
        id: item.id,
        title: t(item.question),
      }))}
    />
  );
}
