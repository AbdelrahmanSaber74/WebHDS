import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/shared/i18n";
import { Card } from "@/shared/ui";

export type ContentGridProps = {
  items: string[];
};

export function ContentGrid({ items }: ContentGridProps) {
  const { t } = useI18n();

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="5">
      {items.map((item) => (
        <Card key={item} h="full">
          <Stack direction="row" gap="3">
            <CheckCircle2 aria-hidden="true" color="var(--chakra-colors-brand-primary)" size={20} />
            <Text color="fg.muted" lineHeight="relaxed">
              {t(item)}
            </Text>
          </Stack>
        </Card>
      ))}
    </SimpleGrid>
  );
}
