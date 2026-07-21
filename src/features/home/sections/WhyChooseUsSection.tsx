import { Box, Heading, SimpleGrid, Stack, Stat, Text } from "@chakra-ui/react";

import { HomeSectionHeader } from "../components/HomeSectionHeader";
import type { HomeContent } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Card } from "@/shared/ui";

export type WhyChooseUsSectionProps = {
  data: HomeContent["whyChooseUs"];
  statistics: HomeContent["statistics"];
};

export function WhyChooseUsSection({ data, statistics }: WhyChooseUsSectionProps) {
  const { t } = useI18n();

  return (
    <Section bg="bg.subtle">
      <Stack gap={{ base: "5", md: "6" }} align="stretch">
        {/* Centered Section Header */}
        <HomeSectionHeader header={data.header} />

        {/* 4 Feature Cards in a uniform row */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="6">
          {data.items.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                role="group"
                p="6"
                variant="glass"
                transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.4s"
                _hover={{
                  borderColor: "brand.primary",
                  boxShadow: "premium",
                  transform: "translateY(-4px)",
                }}
              >
                <Stack gap="4">
                  <Box
                    color="brand.primary"
                    transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                    _groupHover={{ transform: "scale(1.1) translateY(-2px)" }}
                  >
                    <Icon aria-hidden="true" size={24} />
                  </Box>
                  <Stack gap="2">
                    <Heading as="h3" fontSize="lg" fontWeight="bold">
                      {t(item.titleKey)}
                    </Heading>
                    <Text color="fg.muted" fontSize="xs" lineHeight="relaxed">
                      {t(item.descriptionKey)}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>

        {/* Statistics Banner */}
        <Card
          overflow="hidden"
          p={{ base: "6", md: "8", lg: "10" }}
          position="relative"
          variant="feature"
          transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s"
          _hover={{ boxShadow: "premium" }}
          mt="4"
        >
          <Box
            aria-hidden="true"
            bg="linear-gradient(90deg, transparent, var(--chakra-colors-brand-primary), var(--chakra-colors-brand-accent), transparent)"
            h="1px"
            insetInline="0"
            position="absolute"
            top="0"
          />
          <SimpleGrid columns={{ base: 2, lg: 4 }} gap={{ base: "6", lg: "2" }}>
            {statistics.items.slice(0, 4).map((item, index) => (
              <Stat.Root
                key={item.id}
                textAlign={{ base: "start", sm: "center" }}
                borderInlineEnd={{ lg: index < 3 ? "1px solid" : "none" }}
                borderColor="border.subtle"
                px="4"
              >
                <Stat.ValueText
                  fontSize={{ base: "3xl", md: "5xl" }}
                  fontWeight="extrabold"
                  lineHeight="1.15"
                  py="1.5"
                  px="1"
                  className="hds-gradient-brand"
                >
                  {item.value}
                </Stat.ValueText>
                <Stat.Label color="fg.muted" fontSize="sm" mt="2" fontWeight="medium">
                  {t(item.labelKey)}
                </Stat.Label>
              </Stat.Root>
            ))}
          </SimpleGrid>
        </Card>
      </Stack>
    </Section>
  );
}
