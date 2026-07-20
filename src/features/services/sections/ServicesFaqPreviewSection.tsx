import { Stack } from "@chakra-ui/react";
import { ServicesFaq, ServicesSectionHeader } from "@/features/services/components";
import type { ServicesListingContent } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";

export type ServicesFaqPreviewSectionProps = {
  data: ServicesListingContent["faq"];
};

export function ServicesFaqPreviewSection({ data }: ServicesFaqPreviewSectionProps) {
  return (
    <SectionContainer>
      <Stack gap="10">
        <ServicesSectionHeader
          description={data.description}
          eyebrow={data.eyebrow}
          title={data.title}
        />
        <ServicesFaq items={data.items} />
      </Stack>
    </SectionContainer>
  );
}
