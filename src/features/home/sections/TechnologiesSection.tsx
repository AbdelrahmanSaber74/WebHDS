import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { Badge, Card } from "@/shared/ui";
import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type TechnologiesSectionProps = {
  data: HomeContent["technologies"];
};

export function TechnologiesSection({ data }: TechnologiesSectionProps) {
  return (
    <Section bg="bg.subtle">
      <HomeSectionHeader header={data.header} />
      <Card mt="12" p={{ base: "5", md: "8" }} variant="glass">
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap="3">
          {data.items.map((technology) => (
            <Box key={technology.id} display="flex" justifyContent="center">
              <Badge px="4" py="2" rounded="full">
                <Text as="span">{technology.label}</Text>
              </Badge>
            </Box>
          ))}
        </SimpleGrid>
      </Card>
    </Section>
  );
}
