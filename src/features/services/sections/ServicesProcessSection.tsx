import { Stack } from "@chakra-ui/react";
import { ProcessList, ServicesSectionHeader } from "@/features/services/components";
import type { ServiceProcessStep, ServicesListingContent } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";

export type ServicesProcessSectionProps = {
  data: ServicesListingContent["process"];
  steps: ServiceProcessStep[];
};

export function ServicesProcessSection({ data, steps }: ServicesProcessSectionProps) {
  return (
    <SectionContainer id="process">
      <Stack gap="10">
        <ServicesSectionHeader
          description={data.description}
          eyebrow={data.eyebrow}
          title={data.title}
        />
        <ProcessList steps={steps} />
      </Stack>
    </SectionContainer>
  );
}
