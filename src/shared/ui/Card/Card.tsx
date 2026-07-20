import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

export type CardVariant = "elevated" | "outline" | "glass" | "feature";
export type CardProps = BoxProps & {
  variant?: CardVariant;
};

const variantStyles: Record<CardVariant, BoxProps> = {
  elevated: { bg: "bg.surface", boxShadow: "premium", borderColor: "border.subtle" },
  outline: { bg: "transparent", boxShadow: "none", borderColor: "border.subtle" },
  glass: {
    bg: "bg.surface",
    boxShadow: "premium",
    borderColor: "border.subtle",
    backdropFilter: "blur(18px)",
  },
  feature: {
    bg: "bg.panelGradient",
    boxShadow: "ambient",
    borderColor: "border.strong",
    backdropFilter: "blur(18px)",
  },
};

export function Card({ children, variant = "elevated", ...props }: CardProps) {
  return (
    <Box
      border="1px solid"
      overflow="hidden"
      rounded="card"
      p="6"
      transition="transform var(--hds-transition-normal), border-color var(--hds-transition-normal), box-shadow var(--hds-transition-normal), background var(--hds-transition-normal)"
      {...variantStyles[variant]}
      {...props}
    >
      {children}
    </Box>
  );
}
