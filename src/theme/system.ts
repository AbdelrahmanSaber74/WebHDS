import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import {
  breakpoints,
  colorTokens,
  motionTokens,
  radiiTokens,
  semanticColorTokens,
  shadowTokens,
  spacingTokens,
  typographyTokens,
} from "./foundations";

const config = defineConfig({
  globalCss: {
    ":root": {
      "--hds-transition-normal": "220ms cubic-bezier(0.2, 0, 0, 1)",
    },
    "html, body": {
      minW: "320px",
      bg: "bg.canvas",
      color: "fg.default",
    },
    body: {
      fontFamily: "body",
      textRendering: "optimizeLegibility",
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible":
      {
        outline: "3px solid",
        outlineColor: "brand.primary",
        outlineOffset: "3px",
      },
  },
  theme: {
    breakpoints,
    tokens: {
      ...colorTokens,
      ...typographyTokens,
      ...spacingTokens,
      ...radiiTokens,
      ...shadowTokens,
      ...motionTokens,
    },
    semanticTokens: {
      colors: semanticColorTokens,
    },
  },
});

export const system = createSystem(defaultConfig, config);
