import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

import { HomeSectionHeader } from "../components/HomeSectionHeader";
import type { HomeContent } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Card } from "@/shared/ui";

export type ServicesPreviewSectionProps = {
  data: HomeContent["servicesPreview"];
};

export function ServicesPreviewSection({ data }: ServicesPreviewSectionProps) {
  const { t } = useI18n();

  return (
    <Section id="services" bg="bg.subtle">
      <Stack gap={{ base: "5", md: "6" }} align="stretch">
        {/* Centered Section Header */}
        <HomeSectionHeader header={data.header} />

        {/* Unified 3-Column Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap="6"
          alignItems="stretch"
        >
          {data.items.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                role="group"
                h="full"
                p={{ base: "6", md: "7" }}
                variant="glass"
                transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.4s"
                _hover={{
                  borderColor: "brand.primary",
                  boxShadow: "premium",
                  transform: "translateY(-4px)",
                }}
              >
                <Stack gap="5" h="full" justify="space-between">
                  <Stack gap="4">
                    <Box
                      color="brand.primary"
                      transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                      _groupHover={{ transform: "scale(1.1) translateY(-2px)" }}
                      display="inline-block"
                      alignSelf="flex-start"
                    >
                      <Icon aria-hidden="true" size={28} />
                    </Box>
                    <Stack gap="2">
                      <Heading as="h3" fontSize="xl" fontWeight="bold">
                        {t(item.titleKey)}
                      </Heading>
                      <Text color="fg.muted" fontSize="sm" lineHeight="relaxed">
                        {t(item.descriptionKey)}
                      </Text>
                    </Stack>
                  </Stack>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="1.5"
                    color="brand.primary"
                    fontSize="sm"
                    fontWeight="bold"
                    mt="4"
                  >
                    {t("home.services.learnMore")}
                    <Box
                      as="span"
                      display="inline-flex"
                      transition="transform 0.2s ease"
                      _groupHover={{ transform: "translateX(4px)" }}
                    >
                      <ArrowRight aria-hidden="true" size={14} />
                    </Box>
                  </Box>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Section>
  );
}
