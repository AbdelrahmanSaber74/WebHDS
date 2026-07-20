import { Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ContentGrid } from "@/features/services/components";
import type { Service } from "@/features/services/types";
import { useI18n } from "@/shared/i18n";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";

export type ServiceOverviewSectionProps = {
  service: Service;
};

export function ServiceOverviewSection({ service }: ServiceOverviewSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "8", lg: "12" }} alignItems="center">
        <Stack gap="5">
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="tight">
            {t("services.details.overview.title")}
          </Heading>
          <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed">
            {t(service.fullDescription)}
          </Text>
          <ContentGrid items={service.highlights} />
        </Stack>
        <Card p="2" variant="glass">
          <Image
            alt={t(service.coverImageAlt)}
            aspectRatio={16 / 10}
            objectFit="cover"
            rounded="panel"
            src={service.coverImage}
          />
        </Card>
      </SimpleGrid>
    </SectionContainer>
  );
}
