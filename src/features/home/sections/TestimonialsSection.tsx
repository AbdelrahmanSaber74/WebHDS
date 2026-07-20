import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { Avatar, Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type TestimonialsSectionProps = {
  data: HomeContent["testimonials"];
};

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const { t } = useI18n();

  return (
    <Section>
      <HomeSectionHeader header={data.header} />
      <SimpleGrid columns={{ base: 1, lg: 3 }} gap="5" mt="12">
        {data.items.map((item) => (
          <Card key={item.id} h="full">
            <Stack gap="6">
              <Text color="fg.default" fontSize="lg" lineHeight="relaxed">
                {t(item.quoteKey)}
              </Text>
              <Stack direction="row" gap="3">
                <Avatar name={t(item.nameKey)} />
                <Stack gap="0">
                  <Heading as="h3" size="sm">
                    {t(item.nameKey)}
                  </Heading>
                  <Text color="fg.muted" fontSize="sm">
                    {t(item.roleKey)}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Section>
  );
}
