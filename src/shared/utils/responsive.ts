import type { SystemStyleObject } from "@chakra-ui/react";

export const marketingGridColumns = {
  two: { base: 1, lg: 2 },
  three: { base: 1, md: 2, lg: 3 },
  four: { base: 1, sm: 2, lg: 4 },
} as const;

export const marketingStackDirections = {
  actions: { base: "column", sm: "row" },
  split: { base: "column", lg: "row" },
} as const;

export const focusRingStyles: SystemStyleObject = {
  outline: "2px solid",
  outlineColor: "brand.primary",
  outlineOffset: "3px",
};
