import { SimpleGrid, Stack } from "@chakra-ui/react";
import { ServiceCard, ServicesSectionHeader } from "@/features/services/components";
import type { Service } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";

export type ServicesGridSectionProps = {
  services: Service[];
};

export function ServicesGridSection({ services }: ServicesGridSectionProps) {
  return (
    <SectionContainer>
      <Stack gap="10">
        <ServicesSectionHeader
          description="services.grid.description"
          eyebrow="services.grid.eyebrow"
          title="services.grid.title"
        />
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
