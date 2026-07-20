import { SimpleGrid } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { HomeFeatureCard, HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type WhyChooseUsSectionProps = {
  data: HomeContent["whyChooseUs"];
};

export function WhyChooseUsSection({ data }: WhyChooseUsSectionProps) {
  return (
    <Section>
      <HomeSectionHeader align="start" header={data.header} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="5" mt="10">
        {data.items.map((item) => (
          <HomeFeatureCard key={item.id} item={item} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
