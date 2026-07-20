import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutContent } from "@/features/about/types";

export type WhyChooseHdsSectionProps = {
  data: AboutContent["whyChoose"];
};

export function WhyChooseHdsSection({ data }: WhyChooseHdsSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="8">
        <AboutSectionHeader align="center" header={data.header} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="5">
          {data.items.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.id} h="full" variant="glass">
                <Stack gap="4">
                  <Box color="brand.primary">
                    <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
                  </Box>
                  <Heading as="h3" fontSize="xl">
                    {t(item.title)}
                  </Heading>
                  <Text color="fg.muted" lineHeight="relaxed">
                    {t(item.description)}
                  </Text>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
