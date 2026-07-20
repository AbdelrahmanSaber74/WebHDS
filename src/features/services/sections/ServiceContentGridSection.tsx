import { Stack } from "@chakra-ui/react";
import { ContentGrid, ServicesSectionHeader } from "@/features/services/components";
import { SectionContainer } from "@/shared/layouts";

export type ServiceContentGridSectionProps = {
  description: string;
  eyebrow: string;
  items: string[];
  title: string;
};

export function ServiceContentGridSection({
  description,
  eyebrow,
  items,
  title,
}: ServiceContentGridSectionProps) {
  return (
    <SectionContainer>
      <Stack gap="10">
        <ServicesSectionHeader description={description} eyebrow={eyebrow} title={title} />
        <ContentGrid items={items} />
      </Stack>
    </SectionContainer>
  );
}
