import { SimpleGrid, Text } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type ClientsSectionProps = {
  data: HomeContent["clients"];
};

export function ClientsSection({ data }: ClientsSectionProps) {
  return (
    <Section spacing="compact">
      <HomeSectionHeader header={data.header} />
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} gap="4" mt="10">
        {data.items.map((client) => (
          <Card key={client.name} p="5" textAlign="center" variant="outline">
            <Text color="fg.muted" fontWeight="semibold">
              {client.name}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Section>
  );
}
