import { Heading, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Mail } from "lucide-react";
import { Section } from "@/shared/layouts";
import { Button, Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { HomeCta } from "@/features/home/types";

export type CtaSectionProps = {
  data: HomeCta;
};

export function CtaSection({ data }: CtaSectionProps) {
  const { t } = useI18n();

  return (
    <Section id="contact">
      <Card p={{ base: "7", md: "12" }} textAlign="center" variant="glass">
        <Stack align="center" gap="6" maxW="containerMd" mx="auto">
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="tight">
            {t(data.titleKey)}
          </Heading>
          <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed">
            {t(data.descriptionKey)}
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} gap="3">
            <Button asChild size="lg">
              <a href={data.primaryCtaHref}>
                {t(data.primaryCtaKey)}
                <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={data.secondaryCtaHref}>
                <Mail aria-hidden="true" size={18} />
                {t(data.secondaryCtaKey)}
              </a>
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Section>
  );
}
