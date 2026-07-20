import { Box } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

export type ContainerSize = "sm" | "md" | "lg" | "xl";

export type ContainerProps = BoxProps & {
  size?: ContainerSize;
};

const maxWidths: Record<ContainerSize, string> = {
  sm: "containerSm",
  md: "containerMd",
  lg: "containerLg",
  xl: "containerXl",
};

export function Container({ children, size = "xl", ...props }: ContainerProps) {
  return (
    <Box mx="auto" maxW={maxWidths[size]} px="containerX" w="full" {...props}>
      {children}
    </Box>
  );
}
