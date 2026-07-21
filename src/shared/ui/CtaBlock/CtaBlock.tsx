import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import type { CtaBlockContent } from "@/shared/types";
import { Button } from "../Button";
import { Card } from "../Card";

export type CtaBlockProps = BoxProps & {
  content: CtaBlockContent;
};

function ActionLink({
  action,
  variant,
}: {
  action: NonNullable<CtaBlockContent["primaryAction"]>;
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

export function CtaBlock({ content, ...props }: CtaBlockProps) {
  return (
    <Card
      overflow="hidden"
      p={{ base: "8", md: "12", lg: "14" }}
      position="relative"
      textAlign="center"
      variant="feature"
      _before={{
        bg: "linear-gradient(90deg, transparent, token(colors.brand.primary), token(colors.brand.accent), transparent)",
        content: '\"\"',
        h: "1px",
        insetInline: "10",
        opacity: "0.75",
        position: "absolute",
        top: "0",
      }}
      _after={{
        bg: "radial-gradient(circle at 18% 30%, token(colors.brand.soft), transparent 34%), radial-gradient(circle at 82% 20%, rgba(244, 183, 89, 0.18), transparent 30%)",
        content: '\"\"',
        inset: "0",
        opacity: "0.85",
        pointerEvents: "none",
        position: "absolute",
      }}
      {...props}
    >
      <Stack align="center" gap="6" maxW="containerMd" mx="auto" position="relative" zIndex="1">
        {content.illustration ? <Box aria-hidden="true">{content.illustration}</Box> : null}
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="extrabold"
          lineHeight="0.98"
          maxW="containerMd"
        >
          {content.title}
        </Heading>
        {content.description ? (
          <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed" maxW="xl">
            {content.description}
          </Text>
        ) : null}
        {content.primaryAction || content.secondaryAction ? (
          <Stack direction={{ base: "column", sm: "row" }} gap="3" pt="2">
            {content.primaryAction ? (
              <ActionLink action={content.primaryAction} variant="solid" />
            ) : null}
            {content.secondaryAction ? (
              <ActionLink action={content.secondaryAction} variant="outline" />
            ) : null}
          </Stack>
        ) : null}
      </Stack>
    </Card>
  );
}
