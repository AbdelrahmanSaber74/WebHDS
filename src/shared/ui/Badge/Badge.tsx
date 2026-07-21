import { Badge as ChakraBadge } from "@chakra-ui/react";
import type { BadgeProps as ChakraBadgeProps } from "@chakra-ui/react";

export type BadgeProps = ChakraBadgeProps;

export function Badge({ colorPalette = "teal", variant = "subtle", ...props }: BadgeProps) {
  return (
    <ChakraBadge
      colorPalette={colorPalette}
      variant={variant}
      fontSize="sm"
      fontWeight="extrabold"
      letterSpacing="0.05em"
      px="4.5"
      py="2"
      rounded="full"
      textTransform="uppercase"
      border="1px solid"
      borderColor="brand.soft"
      transition="all 0.3s ease"
      _hover={{
        borderColor: "brand.primary",
        transform: "translateY(-1px)",
      }}
      {...props}
    />
  );
}
