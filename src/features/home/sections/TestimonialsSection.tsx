import { Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react";

import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Avatar, Badge, Card } from "@/shared/ui";

export type TestimonialsSectionProps = {
  data: HomeContent["testimonials"];
};

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const { t } = useI18n();

  return (
    <Section>
      <Stack gap={{ base: "5", md: "6" }} align="stretch">
        <HomeSectionHeader header={data.header} />
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap="6"
          alignItems="stretch"
        >
          {data.items.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              role="group"
              p="6"
              variant="glass"
              transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.4s"
              _hover={{
                borderColor: "brand.primary",
                boxShadow: "premium",
                transform: "translateY(-6px)",
              }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              h="full"
            >
              <Stack gap="7" h="full" justify="space-between">
                <Stack gap="4">
                  <HStack justify="space-between" align="center">
                    <Badge variant="subtle" colorPalette="teal">
                      {t("home.testimonials.rating")}
                    </Badge>
                    <Text
                      aria-hidden="true"
                      color="brand.accent"
                      fontSize="xs"
                      letterSpacing="0.1em"
                    >
                      ★★★★★
                    </Text>
                  </HStack>
                  <Text color="fg.default" fontSize="md" lineHeight="relaxed" fontWeight="medium">
                    “{t(item.quoteKey)}”
                  </Text>
                </Stack>
                <HStack gap="3" align="center">
                  <Avatar name={t(item.nameKey)} size="10" />
                  <Stack gap="0">
                    <Heading as="h3" fontSize="sm" fontWeight="bold">
                      {t(item.nameKey)}
                    </Heading>
                    <Text color="fg.muted" fontSize="2xs">
                      {t(item.roleKey)} · {t(item.companyKey)}
                    </Text>
                  </Stack>
                </HStack>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}
