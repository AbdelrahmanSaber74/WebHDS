import { Stack } from "@chakra-ui/react";
import { ServicesFaq, ServicesSectionHeader } from "@/features/services/components";
import type { Service } from "@/features/services/types";
import { SectionContainer } from "@/shared/layouts";

export type ServiceFaqSectionProps = {
  service: Service;
};

export function ServiceFaqSection({ service }: ServiceFaqSectionProps) {
  return (
    <SectionContainer>
      <Stack gap="10">
        <ServicesSectionHeader
          description="services.details.faq.description"
          eyebrow="services.details.faq.eyebrow"
          title="services.details.faq.title"
        />
        <ServicesFaq items={service.faq} />
      </Stack>
    </SectionContainer>
  );
}
