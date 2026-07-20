import { Stack } from "@chakra-ui/react";
import { ServicesSectionHeader, TechnologyList } from "@/features/services/components";
import type { Service, ServicesListingContent } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";

export type ServicesTechnologiesSectionProps = {
  data: ServicesListingContent["technologies"];
  services: Service[];
};

export function ServicesTechnologiesSection({ data, services }: ServicesTechnologiesSectionProps) {
  const technologies = Array.from(
    new Map(
      services
        .flatMap((service) => service.technologies)
        .map((technology) => [technology.id, technology]),
    ).values(),
  );

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="10">
        <ServicesSectionHeader
          description={data.description}
          eyebrow={data.eyebrow}
          title={data.title}
        />
        <Card>
          <TechnologyList technologies={technologies} />
        </Card>
      </Stack>
    </SectionContainer>
  );
}
