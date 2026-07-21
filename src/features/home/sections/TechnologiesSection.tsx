import { Box, Grid, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent, HomeTechnology } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Badge, Card } from "@/shared/ui";

type TechnologyGroup = {
  id: string;
  titleKey: string;
  items: HomeTechnology[];
};

function buildTechnologyGroups(items: HomeTechnology[]): TechnologyGroup[] {
  return [
    { id: "product", titleKey: "home.technologies.groups.product", items: items.slice(0, 3) },
    { id: "cloud", titleKey: "home.technologies.groups.cloud", items: items.slice(4, 8) },
    {
      id: "data",
      titleKey: "home.technologies.groups.data",
      items: [items[3], items[8], items[9]].filter(Boolean),
    },
    { id: "experience", titleKey: "home.technologies.groups.experience", items: items.slice(10) },
  ];
}

export type TechnologiesSectionProps = {
  data: HomeContent["technologies"];
};

export function TechnologiesSection({ data }: TechnologiesSectionProps) {
  const { t } = useI18n();
  const groups = buildTechnologyGroups(data.items);

  return (
    <Section bg="bg.subtle">
      <Stack gap="12">
        <HomeSectionHeader align="start" header={data.header} />
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="5">
          {groups.map((group, index) => (
            <Card
              key={group.id}
              overflow="hidden"
              p={{ base: "5", md: index === 0 ? "8" : "6" }}
              position="relative"
              variant={index === 0 ? "feature" : "glass"}
            >
              <Stack gap="6">
                <Stack direction="row" justify="space-between" align="center" gap="4">
                  <Heading as="h3" fontSize={{ base: "xl", md: index === 0 ? "3xl" : "2xl" }}>
                    {t(group.titleKey)}
                  </Heading>
                  <Text color="fg.muted" fontSize="sm" fontWeight="semibold">
                    {String(group.items.length).padStart(2, "0")}
                  </Text>
                </Stack>
                <SimpleGrid columns={{ base: 2, sm: index === 0 ? 3 : 2 }} gap="3">
                  {group.items.map((technology) => (
                    <Box
                      key={technology.id}
                      bg="bg.surface"
                      border="1px solid"
                      borderColor="border.subtle"
                      px="4"
                      py="3"
                      rounded="card"
                    >
                      <Badge variant="subtle">{technology.label}</Badge>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}
