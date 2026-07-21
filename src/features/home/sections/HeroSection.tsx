import { Box, Circle, Heading, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";

import type { HomeHero } from "@/features/home/types";
import { fadeUp, scaleIn, stagger } from "@/shared/animations";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Badge, Button, Card } from "@/shared/ui";

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
      backgroundImage="radial-gradient(circle at 1px 1px, var(--chakra-colors-border-subtle) 1px, transparent 1px)"
      backgroundSize="32px 32px"
      overflow="hidden"
      position="relative"
      pt={{ base: "12", lg: "18" }}
      _before={{
        bg: "linear-gradient(90deg, transparent, var(--chakra-colors-brand-primary), var(--chakra-colors-brand-accent), transparent)",
        content: '""',
        h: "1px",
        insetInline: "0",
        position: "absolute",
        top: "0",
        zIndex: "2",
      }}
      _after={{
        bg: "radial-gradient(circle at 12% 24%, var(--chakra-colors-brand-soft), transparent 24%), radial-gradient(circle at 86% 18%, rgba(244, 183, 89, 0.2), transparent 22%)",
        content: '""',
        inset: "0",
        pointerEvents: "none",
        position: "absolute",
        zIndex: "1",
      }}
    >
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 2 }}
        gap={{ base: "12", lg: "16" }}
        minH={{ lg: "calc(100vh - 160px)" }}
        position="relative"
        zIndex="2"
      >
        <MotionStack gap="7" initial="hidden" animate="visible" maxW="3xl" variants={stagger}>
          {t(data.eyebrowKey) ? (
            <MotionBox variants={fadeUp}>
              <Badge>{t(data.eyebrowKey)}</Badge>
            </MotionBox>
          ) : null}
          <MotionBox variants={fadeUp}>
            <Heading
              as="h1"
              m="0"
              fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
              fontWeight="extrabold"
              letterSpacing="normal"
              lineHeight="1.1"
              maxW="3xl"
              className="hds-gradient-text"
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
                    _groupHover={{ transform: "scale(1.1)" }}
                  >
                    <PlayCircle aria-hidden="true" size={18} />
                  </Box>
                  {t(data.secondaryCtaKey)}
                </a>
              </Button>
            </Stack>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Stack direction={{ base: "column", sm: "row" }} gap="4" color="fg.muted" fontSize="sm">
              {[
                "home.hero.trust.engineering",
                "home.hero.trust.security",
                "home.hero.trust.delivery",
              ].map((key) => (
                <Stack key={key} direction="row" gap="2" align="center">
                  <CheckCircle2
                    aria-hidden="true"
                    color="var(--chakra-colors-brand-primary)"
                    size={16}
                  />
                  <Text as="span" fontWeight="medium">
                    {t(key)}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </MotionBox>
        </MotionStack>

        <MotionBox initial="hidden" animate="visible" variants={scaleIn}>
          <Card
            role="group"
            overflow="visible"
            p={{ base: "1.5", md: "2" }}
            position="relative"
            rotate={{ base: "0deg", lg: "1deg" }}
            variant="feature"
            transition="transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s"
            _hover={{
              transform: "perspective(1000px) rotateX(3deg) rotateY(-3deg) translateY(-8px)",
              boxShadow: "premium",
              borderColor: "brand.primary",
            }}
            _after={{
              bg: "brand.primary",
              content: '""',
              filter: "blur(58px)",
              h: "34%",
              insetBlockEnd: "-8",
              insetInline: "14",
              opacity: "0.24",
              position: "absolute",
              zIndex: "-1",
            }}
          >
            <Box
              overflow="hidden"
              rounded="panel"
              position="relative"
              bg="bg.elevated"
              border="1px solid"
              borderColor="border.subtle"
            >
              {/* Browser mockup controls */}
              <HStack
                px="4"
                py="3.5"
                bg="bg.subtle"
                borderBottom="1px solid"
                borderColor="border.subtle"
                gap="2"
                align="center"
              >
                <Circle size="2.5" bg="red.400" />
                <Circle size="2.5" bg="yellow.400" />
                <Circle size="2.5" bg="green.400" />
                <Box
                  bg="bg.surface"
                  px="4"
                  py="1"
                  rounded="md"
                  fontSize="2xs"
                  color="fg.muted"
                  w="2xs"
                  textAlign="center"
                  mx="auto"
                  border="1px solid"
                  borderColor="border.subtle"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  opacity="0.8"
                >
                  hds-enterprise-dashboard
                </Box>
              </HStack>
              <Box position="relative">
                <Image
                  alt={t(data.imageAltKey)}
                  aspectRatio={16 / 10}
                  loading="eager"
                  objectFit="cover"
                  src={data.image}
                />
                <Box
                  aria-hidden="true"
                  bg="linear-gradient(180deg, transparent 42%, rgba(7, 17, 31, 0.62))"
                  inset="0"
                  position="absolute"
                />
              </Box>
            </Box>
            <Card
              bg="bg.glass"
              bottom={{ base: "4", md: "6" }}
              boxShadow="lift"
              insetInlineStart={{ base: "4", md: "6" }}
              maxW="72"
              p="4"
              position="absolute"
              variant="glass"
              transition="transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s"
              _groupHover={{
                transform: "translate(-8px, -8px) translateZ(10px)",
                boxShadow: "ambient",
              }}
            >
              <Text color="brand.primary" fontSize="sm" fontWeight="semibold">
                {t("home.hero.floating.title")}
              </Text>
              <Text color="fg.default" fontWeight="semibold" lineHeight="snug" mt="1">
                {t("home.hero.floating.description")}
              </Text>
            </Card>
            <Card
              display={{ base: "none", md: "block" }}
              insetBlockStart="-7"
              insetInlineEnd="-5"
              p="4"
              position="absolute"
              variant="glass"
              w="44"
              transition="transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s"
              _groupHover={{
                transform: "translate(8px, -8px) translateZ(15px)",
                boxShadow: "ambient",
              }}
            >
              <Text color="brand.primary" fontSize="2xl" fontWeight="extrabold" lineHeight="none">
                99.9%
              </Text>
              <Text color="fg.muted" fontSize="sm" mt="2">
                {t("home.hero.floating.metric")}
              </Text>
            </Card>
          </Card>
        </MotionBox>
      </SimpleGrid>
    </Section>
  );
}
