import { Stack } from "@chakra-ui/react";
import { ServicesSectionHeader, TechnologyList } from "@/features/services/components";
import type { Service } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";

export type ServiceTechnologiesSectionProps = {
  service: Service;
};

export function ServiceTechnologiesSection({ service }: ServiceTechnologiesSectionProps) {
  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="10">
        <ServicesSectionHeader
          description="services.details.technologies.description"
          eyebrow="services.details.technologies.eyebrow"
          title="services.details.technologies.title"
        />
        <Card>
          <TechnologyList technologies={service.technologies} />
        </Card>
      </Stack>
    </SectionContainer>
  );
}
