import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

export type CardVariant = "elevated" | "outline" | "glass" | "feature";
export type CardProps = BoxProps & {
  variant?: CardVariant;
};

const variantStyles: Record<CardVariant, BoxProps> = {
  elevated: {
    bg: "bg.elevated",
    borderColor: "border.subtle",
    boxShadow: "sm",
  },
  outline: {
    bg: "transparent",
    borderColor: "border.strong",
    boxShadow: "none",
  },
  glass: {
    bg: "bg.glass",
    borderColor: "border.subtle",
    boxShadow: "premium",
    backdropFilter: "blur(20px) saturate(160%)",
  },
  feature: {
    bg: "bg.panelGradient",
    borderColor: "border.subtle",
    boxShadow: "ambient",
    backdropFilter: "blur(20px) saturate(160%)",
  },
};

export function Card({ children, variant = "elevated", ...props }: CardProps) {
  return (
    <Box
      border="1px solid"
      overflow="hidden"
      p="6"
      position="relative"
      rounded="card"
      transition="all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
      _before={
        variant === "feature"
          ? {
              bg: "linear-gradient(90deg, transparent, var(--chakra-colors-brand-primary), var(--chakra-colors-brand-accent), transparent)",
              content: '\"\"',
              h: "1.5px",
              insetInline: "0",
              opacity: "0.85",
              position: "absolute",
              top: "0",
              zIndex: "1",
            }
          : variant === "glass"
          ? {
              bg: "linear-gradient(90deg, transparent, var(--chakra-colors-brand-primary), transparent)",
              content: '\"\"',
              h: "1px",
              insetInline: "0",
              opacity: "0.6",
              position: "absolute",
              top: "0",
              zIndex: "1",
            }
          : undefined
      }
      _hover={{
        borderColor: "brand.primary",
        boxShadow: "lift",
        transform: "translateY(-4px)",
      }}
      {...variantStyles[variant]}
      {...props}
    >
      {children}
    </Box>
  );
}
