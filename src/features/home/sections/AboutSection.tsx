import { Box, Circle, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Cpu, Database, Network } from "lucide-react";

import { HomeSectionHeader } from "../components/HomeSectionHeader";
import type { HomeContent } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Badge, Card } from "@/shared/ui";

export type AboutSectionProps = {
  data: HomeContent["about"];
};

const MotionBox = motion.create(Box);

function EnterpriseMockup() {
  const { t } = useI18n();
  return (
    <Card
      overflow="hidden"
      p="7"
      position="relative"
      variant="feature"
      minH={{ base: "340px", md: "420px" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      _after={{
        bg: "brand.primary",
        content: '""',
        filter: "blur(90px)",
        h: "50%",
        w: "50%",
        insetBlockEnd: "10%",
        insetInlineStart: "25%",
        opacity: "0.22",
        position: "absolute",
        zIndex: "-1",
      }}
    >
      {/* Background decoration grid */}
      <Box
        aria-hidden="true"
        backgroundImage="radial-gradient(circle at 1px 1px, var(--chakra-colors-border-subtle) 1px, transparent 1px)"
        backgroundSize="20px 20px"
        inset="0"
        opacity="0.25"
        position="absolute"
      />
      
      {/* Flow visualization */}
      <Stack gap="6" w="full" maxW="xs" zIndex="1" position="relative">
        <Card variant="glass" p="4" boxShadow="lift" borderLeft="3px solid" borderLeftColor="brand.primary">
          <Stack direction="row" align="center" gap="3.5">
            <Circle size="10" bg="brand.soft" color="brand.primary" shadow="sm">
              <Cpu size={18} />
            </Circle>
            <Box>
              <Text fontSize="xs" fontWeight="bold" color="fg.default" letterSpacing="tight">
                {t("home.hero.trust.engineering")}
              </Text>
              <Text fontSize="10px" color="fg.muted">
                Active Cluster Nodes
              </Text>
            </Box>
            <Badge colorPalette="teal" variant="subtle" size="sm" ms="auto" px="2">
              v3.5
            </Badge>
          </Stack>
        </Card>

        {/* Central visual connection */}
        <Box h="12" position="relative" w="full">
          <Box
            w="2px"
            bg="linear-gradient(to bottom, var(--chakra-colors-brand-primary), var(--chakra-colors-brand-accent))"
            h="full"
            mx="auto"
            position="relative"
            opacity="0.8"
          >
            <MotionBox
              w="6px"
              h="6px"
              bg="brand.accent"
              rounded="full"
              position="absolute"
              left="-2px"
              animate={{
                top: ["0%", "100%"],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </Box>
        </Box>

        <SimpleGrid columns={2} gap="4">
          <Card variant="glass" p="4" boxShadow="sm" borderLeft="3px solid" borderLeftColor="colors.hds.blue">
            <Stack gap="3" align="center" textAlign="center">
              <Circle size="9" bg="brand.soft" color="colors.hds.blue">
                <Database size={16} />
              </Circle>
              <Text fontSize="11px" fontWeight="bold" color="fg.default">
                {t("home.hero.trust.security")}
              </Text>
            </Stack>
          </Card>
          <Card variant="glass" p="4" boxShadow="sm" borderLeft="3px solid" borderLeftColor="brand.accent">
            <Stack gap="3" align="center" textAlign="center">
              <Circle size="9" bg="brand.soft" color="brand.accent">
                <Network size={16} />
              </Circle>
              <Text fontSize="11px" fontWeight="bold" color="fg.default">
                {t("home.hero.trust.delivery")}
              </Text>
            </Stack>
          </Card>
        </SimpleGrid>
      </Stack>
    </Card>
  );
}

export function AboutSection({ data }: AboutSectionProps) {
  const { t } = useI18n();

  return (
    <Section spacing="compact">
      <Box
        overflow="hidden"
        position="relative"
        rounded="section"
        px={{ base: "5", md: "10" }}
        py={{ base: "8", md: "12", lg: "14" }}
      >
        <Box
          aria-hidden="true"
          bg="radial-gradient(circle at 50% 8%, var(--chakra-colors-brand-soft), transparent 28%), radial-gradient(circle at 12% 72%, rgba(244, 183, 89, 0.08), transparent 22%), linear-gradient(180deg, var(--chakra-colors-bg-canvas), var(--chakra-colors-bg-subtle))"
          inset="0"
          position="absolute"
        />
        <Box
          aria-hidden="true"
          backgroundImage="linear-gradient(var(--chakra-colors-border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--chakra-colors-border-subtle) 1px, transparent 1px)"
          backgroundSize="44px 44px"
          inset="0"
          opacity="0.08"
          position="absolute"
        />

        <Box position="relative" zIndex="1">
          <Stack gap={{ base: "5", md: "6" }} align="stretch">
            {/* Centered Section Header */}
            <HomeSectionHeader header={data.header} />

            {/* Two-Column Grid below Header */}
            <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: "10", lg: "16" }} alignItems="center">
              {/* Interactive Visual Mockup (Left Column) */}
              <Box gridColumn={{ base: "span 1", lg: "span 5" }} w="full">
                <EnterpriseMockup />
              </Box>

              {/* Description and Highlights (Right Column) */}
              <Stack gridColumn={{ base: "span 1", lg: "span 7" }} gap="6">
                <Text
                  color="fg.muted"
                  fontSize="sm"
                  lineHeight="relaxed"
                >
                  {t(data.bodyKey)}
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4" mt="2">
                  {data.highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Card
                        key={item.id}
                        role="group"
                        p="5"
                        variant="glass"
                        transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.4s"
                        _hover={{
                          borderColor: "brand.primary",
                          boxShadow: "premium",
                          transform: "translateY(-4px)",
                        }}
                      >
                        <Stack align="flex-start" gap="4">
                          <Circle
                            bg="brand.soft"
                            color="brand.primary"
                            size="10"
                            transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                            _groupHover={{ transform: "scale(1.1) rotate(5deg)" }}
                          >
                            <Icon aria-hidden="true" size={18} />
                          </Circle>
                          <Stack gap="1.5">
                            <Heading as="h3" color="fg.default" fontSize="md" fontWeight="bold">
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
              </Stack>
            </SimpleGrid>
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}
