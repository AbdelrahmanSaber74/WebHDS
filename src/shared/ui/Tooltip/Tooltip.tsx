import { Box } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export type TooltipProps = PropsWithChildren<{
  label: string;
}>;

export function Tooltip({ children, label }: TooltipProps) {
  return (
    <Box as="span" position="relative" role="group" display="inline-flex">
      {children}
      <Box
        as="span"
        role="tooltip"
        opacity="0"
        pointerEvents="none"
        position="absolute"
        bottom="calc(100% + 0.5rem)"
        insetInlineStart="50%"
        transform="translateX(-50%)"
        bg="fg.default"
        color="bg.canvas"
        fontSize="xs"
        px="2"
        py="1"
        rounded="sm"
        whiteSpace="nowrap"
        _groupHover={{ opacity: 1 }}
        _groupFocusWithin={{ opacity: 1 }}
      >
        {label}
      </Box>
    </Box>
  );
}
