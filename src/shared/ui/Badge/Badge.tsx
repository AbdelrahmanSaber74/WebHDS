import { Badge as ChakraBadge } from "@chakra-ui/react";
import type { BadgeProps as ChakraBadgeProps } from "@chakra-ui/react";

export type BadgeProps = ChakraBadgeProps;

export function Badge({ colorPalette = "teal", variant = "subtle", ...props }: BadgeProps) {
  return <ChakraBadge colorPalette={colorPalette} variant={variant} {...props} />;
}
