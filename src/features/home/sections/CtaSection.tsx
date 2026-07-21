import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

import type { HomeCta } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Button, Card } from "@/shared/ui";

export type CtaSectionProps = {
  data: HomeCta;
};

export function CtaSection({ data }: CtaSectionProps) {
  const { t } = useI18n();

  return (
    <Section id="contact">
      <Card
        overflow="hidden"
        p={{ base: "8", md: "14" }}
        position="relative"
        variant="feature"
        backgroundImage="radial-gradient(circle at 1px 1px, var(--chakra-colors-border-subtle) 1px, transparent 1px)"
        backgroundSize="32px 32px"
        transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s"
        _hover={{ boxShadow: "premium" }}
      >
        {/* Layered Colorful Glow Blobs */}
        <Box
          aria-hidden="true"
          bg="radial-gradient(circle at 80% 30%, var(--chakra-colors-brand-soft) 0%, transparent 45%), radial-gradient(circle at 20% 70%, rgba(244, 183, 89, 0.18) 0%, transparent 40%)"
          inset="0"
          position="absolute"
          pointerEvents="none"
          zIndex="0"
        />
        
        <Grid
          gap="8"
          position="relative"
          zIndex="1"
          templateColumns={{ base: "1fr", lg: "1.15fr 0.85fr" }}
          alignItems="center"
        >
          {/* Main Copy Left Column */}
          <Stack gap="6">
            <Heading
              as="h2"
              m="0"
              fontSize={{ base: "3xl", md: "5xl", xl: "6xl" }}
              lineHeight="tight"
              fontWeight="extrabold"
              className="hds-gradient-text"
            >
              {t(data.titleKey)}
            </Heading>
            <Text
              color="fg.muted"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="relaxed"
              maxW="2xl"
            >
              {t(data.descriptionKey)}
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap="4.5" pt="2">
              <Button asChild size="lg" role="group">
                <a href={data.primaryCtaHref}>
                  {t(data.primaryCtaKey)}
                  <Box
                    as="span"
                    display="inline-flex"
                    transition="transform 0.2s ease"
                    _groupHover={{ transform: "translateX(4px)" }}
                  >
                    <ArrowRight aria-hidden="true" size={18} />
                  </Box>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" role="group">
                <a href={data.secondaryCtaHref}>
                  <Box
                    as="span"
                    display="inline-flex"
                    transition="transform 0.2s ease"
                    _groupHover={{ transform: "scale(1.1) rotate(5deg)" }}
                  >
                    <Mail aria-hidden="true" size={18} />
                  </Box>
                  {t(data.secondaryCtaKey)}
                </a>
              </Button>
            </Stack>
          </Stack>

          {/* Trust Items Right Column */}
          <Stack gap="4" justify="center">
            {[
              "home.cta.trust.discovery",
              "home.cta.trust.architecture",
              "home.cta.trust.delivery",
            ].map((key) => (
              <Card
                key={key}
                role="group"
                p="4.5"
                variant="glass"
                transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s"
                _hover={{
                  borderColor: "brand.primary",
                  boxShadow: "lift",
                  transform: "translateY(-3px)",
                }}
              >
                <Stack direction="row" gap="3.5" align="center">
                  <Box
                    color="brand.primary"
                    transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                    _groupHover={{ transform: "scale(1.1) rotate(5deg)" }}
                  >
                    <CheckCircle2 aria-hidden="true" size={20} />
                  </Box>
                  <Text color="fg.default" fontWeight="semibold" fontSize="sm">
                    {t(key)}
                  </Text>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Card>
    </Section>
  );
}
