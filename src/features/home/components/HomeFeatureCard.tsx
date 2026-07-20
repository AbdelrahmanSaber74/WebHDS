import { Circle, Heading, Stack, Text } from "@chakra-ui/react";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { HomeFeatureCard as HomeFeatureCardData } from "@/features/home/types";

export type HomeFeatureCardProps = {
  item: HomeFeatureCardData;
};

export function HomeFeatureCard({ item }: HomeFeatureCardProps) {
  const { t } = useI18n();
  const Icon = item.icon;

  return (
    <Card
      h="full"
      transition="transform 220ms ease, box-shadow 220ms ease"
      _hover={{ transform: "translateY(-4px)", boxShadow: "lift" }}
    >
      <Stack gap="5">
        <Circle bg="bg.subtle" color="brand.primary" size="12">
          <Icon aria-hidden="true" size={22} />
        </Circle>
        <Stack gap="2">
          <Heading as="h3" size="md">
            {t(item.titleKey)}
          </Heading>
          <Text color="fg.muted" lineHeight="relaxed">
            {t(item.descriptionKey)}
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}
