import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import type { MarketingHeroContent } from "@/shared/types";
import { Badge } from "../Badge";
import { Breadcrumbs } from "../Breadcrumbs";
import { Button } from "../Button";
import { Card } from "../Card";

export type PageHeroProps = BoxProps & {
  breadcrumbLabel?: string;
  content: MarketingHeroContent;
};

function HeroAction({
  action,
  variant,
}: {
  action: NonNullable<MarketingHeroContent["primaryAction"]>;
  variant: "solid" | "outline";
}) {
  return (
    <Button asChild size="lg" variant={variant}>
      <a
        href={action.href}
        rel={action.external ? "noreferrer" : undefined}
        target={action.external ? "_blank" : undefined}
      >
        {action.icon}
        {action.label}
      </a>
    </Button>
  );
}

export function PageHero({ breadcrumbLabel, content, ...props }: PageHeroProps) {
  const hasVisual = Boolean(content.backgroundImage);

  return (
    <Box
      as="header"
      bg="bg.hero"
      border="1px solid"
      borderColor="border.subtle"
      boxShadow="premium"
      minH={{ lg: hasVisual ? "xl" : "auto" }}
      overflow="hidden"
      position="relative"
      px={{ base: "5", md: "8", lg: "12" }}
      py={{ base: "12", md: "16", lg: "20" }}
      rounded="panel"
      _before={{
        bg: "linear-gradient(90deg, transparent, token(colors.brand.primary), token(colors.brand.accent), transparent)",
        content: '\"\"',
        h: "1px",
        insetInline: "0",
        opacity: "0.65",
        position: "absolute",
        top: "0",
      }}
      _after={{
        bg: "radial-gradient(circle at 18% 20%, token(colors.brand.soft), transparent 28%), radial-gradient(circle at 88% 18%, rgba(244, 183, 89, 0.16), transparent 26%), linear-gradient(135deg, transparent 0 42%, token(colors.brand.soft) 42% 43%, transparent 43% 100%)",
        content: '\"\"',
        inset: "0",
        opacity: "0.72",
        pointerEvents: "none",
        position: "absolute",
      }}
      {...props}
    >
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: hasVisual ? 2 : 1 }}
        gap={{ base: "9", lg: "16" }}
        position="relative"
        zIndex="1"
      >
        <Stack gap="6" maxW={hasVisual ? "containerMd" : "containerLg"}>
          {content.breadcrumbs && breadcrumbLabel ? (
            <Breadcrumbs ariaLabel={breadcrumbLabel} items={content.breadcrumbs} />
          ) : null}
          {content.badge ? <Badge alignSelf="flex-start">{content.badge}</Badge> : null}
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", xl: hasVisual ? "6xl" : "7xl" }}
            fontWeight="extrabold"
            lineHeight="0.95"
            maxW="containerLg"
          >
            {content.title}
          </Heading>
          {content.subtitle ? (
            <Text
              color="fg.muted"
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="relaxed"
              maxW="containerSm"
            >
              {content.subtitle}
            </Text>
          ) : null}
          {content.primaryAction || content.secondaryAction ? (
            <Stack direction={{ base: "column", sm: "row" }} gap="3" pt="2">
              {content.primaryAction ? (
                <HeroAction action={content.primaryAction} variant="solid" />
              ) : null}
              {content.secondaryAction ? (
                <HeroAction action={content.secondaryAction} variant="outline" />
              ) : null}
            </Stack>
          ) : null}
        </Stack>
        {content.backgroundImage ? (
          <Card
            overflow="visible"
            p={{ base: "1.5", md: "2" }}
            position="relative"
            rotate={{ base: "0deg", lg: "1.2deg" }}
            transformOrigin="center"
            variant="feature"
            _after={{
              bg: "brand.primary",
              content: '\"\"',
              filter: "blur(42px)",
              h: "32%",
              insetBlockEnd: "-8",
              insetInline: "14",
              opacity: "0.2",
              position: "absolute",
              zIndex: "-1",
            }}
            _hover={{ boxShadow: "ambient", rotate: "0deg", transform: "translateY(-4px)" }}
          >
            <Box overflow="hidden" rounded="panel">
              <Image
                alt={content.backgroundImageAlt ?? ""}
                aspectRatio={16 / 10}
                loading="eager"
                objectFit="cover"
                src={content.backgroundImage}
                transition="transform var(--hds-transition-slow), filter var(--hds-transition-slow)"
                _hover={{ filter: "saturate(1.08) contrast(1.04)", transform: "scale(1.035)" }}
              />
            </Box>
          </Card>
        ) : null}
      </SimpleGrid>
    </Box>
  );
}
