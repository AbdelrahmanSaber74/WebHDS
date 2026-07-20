import { Stack } from "@chakra-ui/react";
import { ProcessList, ServicesSectionHeader } from "@/features/services/components";
import type { Service } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";

export type ServiceProcessSectionProps = {
  service: Service;
};

export function ServiceProcessSection({ service }: ServiceProcessSectionProps) {
  return (
    <SectionContainer>
      <Stack gap="10">
        <ServicesSectionHeader
          description="services.details.process.description"
          eyebrow="services.details.process.eyebrow"
          title="services.details.process.title"
        />
        <ProcessList steps={service.developmentProcess} />
      </Stack>
    </SectionContainer>
  );
}
