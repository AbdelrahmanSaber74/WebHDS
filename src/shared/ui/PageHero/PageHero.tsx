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
      overflow="hidden"
      position="relative"
      px={{ base: "5", md: "8", lg: "10" }}
      py={{ base: "12", md: "14", lg: "18" }}
      rounded="panel"
      _before={{
        bg: "linear-gradient(90deg, transparent, token(colors.brand.soft), transparent)",
        content: '""',
        h: "1px",
        insetInline: "0",
        position: "absolute",
        top: "0",
      }}
      _after={{
        bg: "linear-gradient(135deg, transparent 0 38%, token(colors.brand.soft) 38% 39%, transparent 39% 100%)",
        content: '""',
        inset: "0",
        opacity: "0.55",
        pointerEvents: "none",
        position: "absolute",
      }}
      {...props}
    >
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: hasVisual ? 2 : 1 }}
        gap={{ base: "8", lg: "14" }}
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
            fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
            lineHeight="tight"
            maxW="containerLg"
          >
            {content.title}
          </Heading>
          {content.subtitle ? (
            <Text
              color="fg.muted"
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="relaxed"
              maxW="containerMd"
            >
              {content.subtitle}
            </Text>
          ) : null}
          {content.primaryAction || content.secondaryAction ? (
            <Stack direction={{ base: "column", sm: "row" }} gap="3" pt="1">
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
          <Card p={{ base: "1.5", md: "2" }} position="relative" variant="feature">
            <Box overflow="hidden" rounded="panel">
              <Image
                alt={content.backgroundImageAlt ?? ""}
                aspectRatio={16 / 10}
                loading="eager"
                objectFit="cover"
                src={content.backgroundImage}
                transition="transform var(--hds-transition-slow)"
                _hover={{ transform: "scale(1.025)" }}
              />
            </Box>
          </Card>
        ) : null}
      </SimpleGrid>
    </Box>
  );
}
