import { Box, Circle, Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

import type { HomeContent } from "@/features/home/types";
import { HOME_ANCHORS } from "@/features/home/constants";
import { HomeSectionHeader } from "@/features/home/components";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Button, Card } from "@/shared/ui";

export type ProcessSectionProps = {
  data: HomeContent["process"];
};

export function ProcessSection({ data }: ProcessSectionProps) {
  const { t } = useI18n();

  return (
    <Section>
      <Stack gap={{ base: "5", md: "6" }} align="stretch">
        <HomeSectionHeader header={data.header} />

        <Box position="relative">
          <Grid
            gap="6"
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          >
            {data.items.map((step, index) => (
              <Card
                key={step.id}
                role="group"
                p="6"
                position="relative"
                variant="glass"
                transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s"
                _hover={{
                  borderColor: "brand.primary",
                  boxShadow: "premium",
                  transform: "translateY(-4px)",
                }}
              >
                {/* Visual Connector Line */}
                <Box
                  aria-hidden="true"
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  h="1"
                  bg="border.subtle"
                  _groupHover={{
                    bg: "linear-gradient(90deg, var(--chakra-colors-brand-primary), var(--chakra-colors-brand-accent))",
                  }}
                  transition="background 0.4s"
                />

                <Stack gap="4">
                  <HStack justify="space-between" align="center">
                    {/* Glowing indicator dot */}
                    <Circle
                      size="7"
                      bg="brand.soft"
                      color="brand.primary"
                      fontSize="xs"
                      fontWeight="bold"
                      shadow="sm"
                      transition="all 0.4s"
                      _groupHover={{
                        bg: "brand.primary",
                        color: "bg.elevated",
                        transform: "scale(1.1)",
                      }}
                    >
                      {index + 1}
                    </Circle>
                    {/* Huge decorative step number in bg */}
                    <Text
                      aria-hidden="true"
                      fontSize="5xl"
                      fontWeight="black"
                      color="border.strong"
                      userSelect="none"
                      lineHeight="none"
                      opacity="0.8"
                      transition="color 0.4s, opacity 0.4s"
                      _groupHover={{ color: "brand.primary", opacity: "0.3" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                  </HStack>

                  <Stack gap="2">
                    <Heading as="h3" fontSize="lg" fontWeight="bold">
                      {t(step.titleKey)}
                    </Heading>
                    <Text color="fg.muted" fontSize="xs" lineHeight="relaxed">
                      {t(step.descriptionKey)}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Grid>

          <Box display="flex" justifyContent="center" mt="10">
            <Button asChild role="group">
              <a href={HOME_ANCHORS.contact}>
                {t("home.process.cta")}
                <Box
                  as="span"
                  display="inline-flex"
                  transition="transform 0.2s ease"
                  _groupHover={{ transform: "translateX(4px)" }}
                >
                  <ArrowRight aria-hidden="true" size={16} />
                </Box>
              </a>
            </Button>
          </Box>
        </Box>
      </Stack>
    </Section>
  );
}
