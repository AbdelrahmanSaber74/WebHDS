import { SimpleGrid } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { HomeFeatureCard, HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type ServicesPreviewSectionProps = {
  data: HomeContent["servicesPreview"];
};

export function ServicesPreviewSection({ data }: ServicesPreviewSectionProps) {
  return (
    <Section id="services">
      <HomeSectionHeader header={data.header} />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="5" mt="12">
        {data.items.map((item) => (
          <HomeFeatureCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
