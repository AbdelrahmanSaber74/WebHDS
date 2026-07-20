import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Section } from "@/shared/layouts";
import { Button, Card } from "@/shared/ui";
import { fadeUp, scaleIn, stagger } from "@/shared/animations";
import { useI18n } from "@/shared/i18n";
import type { HomeHero } from "@/features/home/types";

export type HeroSectionProps = {
  data: HomeHero;
};

const MotionStack = motion.create(Stack);
const MotionBox = motion.create(Box);

export function HeroSection({ data }: HeroSectionProps) {
  const { t } = useI18n();

  return (
    <Section
      as="section"
      bg="bg.hero"
      overflow="hidden"
      position="relative"
      pt={{ base: "10", lg: "16" }}
      _before={{
        bg: "linear-gradient(90deg, transparent, token(colors.brand.soft), transparent)",
        content: '""',
        h: "1px",
        insetInline: "0",
        position: "absolute",
        top: "0",
      }}
    >
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 2 }}
        gap={{ base: "10", lg: "14" }}
        position="relative"
      >
        <MotionStack gap="7" initial="hidden" animate="visible" variants={stagger}>
          <MotionBox variants={fadeUp}>
            <Text color="brand.primary" fontWeight="semibold">
              {t(data.eyebrowKey)}
            </Text>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
              lineHeight="tight"
              maxW="3xl"
            >
              {t(data.titleKey)}
            </Heading>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Text
              color="fg.muted"
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="relaxed"
              maxW="2xl"
            >
              {t(data.descriptionKey)}
            </Text>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Stack direction={{ base: "column", sm: "row" }} gap="3" pt="1">
              <Button asChild size="lg">
                <a href={data.primaryCtaHref}>
                  {t(data.primaryCtaKey)}
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={data.secondaryCtaHref}>
                  <PlayCircle aria-hidden="true" size={18} />
                  {t(data.secondaryCtaKey)}
                </a>
              </Button>
            </Stack>
          </MotionBox>
        </MotionStack>

        <MotionBox initial="hidden" animate="visible" variants={scaleIn}>
          <Card p={{ base: "1.5", md: "2" }} position="relative" variant="feature">
            <Box overflow="hidden" rounded="panel" position="relative">
              <Image
                alt={t(data.imageAltKey)}
                aspectRatio={16 / 10}
                loading="eager"
                objectFit="cover"
                src={data.image}
              />
              <Box
                aria-hidden="true"
                bg="linear-gradient(180deg, transparent, rgba(7, 17, 31, 0.42))"
                inset="0"
                position="absolute"
              />
            </Box>
            <Box
              bg="bg.glass"
              border="1px solid"
              borderColor="border.subtle"
              bottom={{ base: "4", md: "6" }}
              boxShadow="lift"
              insetInlineStart={{ base: "4", md: "6" }}
              maxW="72"
              p="4"
              position="absolute"
              rounded="card"
            >
              <Text color="brand.primary" fontSize="sm" fontWeight="semibold">
                {t(data.eyebrowKey)}
              </Text>
              <Text color="fg.default" fontWeight="semibold" lineHeight="snug" mt="1">
                {t(data.primaryCtaKey)}
              </Text>
            </Box>
          </Card>
        </MotionBox>
      </SimpleGrid>
    </Section>
  );
}
