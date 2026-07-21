import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { Container } from "../Container";
import type { ContainerSize } from "../Container";

export type SectionSpacing = "default" | "compact";

export type SectionProps = BoxProps & {
  containerSize?: ContainerSize;
  spacing?: SectionSpacing;
};

export function Section({
  children,
  containerSize = "xl",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <Box
      as="section"
      py={spacing === "default" ? "sectionY" : "sectionYCompact"}
      position="relative"
      {...props}
    >
      <Container size={containerSize} position="relative" zIndex="2">
        {children}
      </Container>
    </Box>
  );
}
