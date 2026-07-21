import { SimpleGrid, Stack } from "@chakra-ui/react";
import { ServiceCard, ServicesSectionHeader } from "@/features/services/components";
import type { Service } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";

export type RelatedServicesSectionProps = {
  services: Service[];
};

export function RelatedServicesSection({ services }: RelatedServicesSectionProps) {
  if (services.length === 0) {
    return null;
  }

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="10">
        <ServicesSectionHeader
          description="services.details.related.description"
          eyebrow="services.details.related.eyebrow"
          title="services.details.related.title"
        />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
