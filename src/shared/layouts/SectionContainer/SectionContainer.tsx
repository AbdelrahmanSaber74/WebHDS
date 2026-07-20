import type { BoxProps } from "@chakra-ui/react";
import type { ContainerSize } from "../Container";
import { Section } from "../Section";
import type { SectionSpacing } from "../Section";

export type SectionContainerProps = BoxProps & {
  containerSize?: ContainerSize;
  spacing?: SectionSpacing;
};

export function SectionContainer({
  children,
  containerSize = "xl",
  spacing = "default",
  ...props
}: SectionContainerProps) {
  return (
    <Section containerSize={containerSize} spacing={spacing} {...props}>
      {children}
    </Section>
  );
}
