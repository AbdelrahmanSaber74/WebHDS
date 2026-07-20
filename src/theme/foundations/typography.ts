export const typographyTokens = {
  fonts: {
    heading: { value: "Inter, ui-sans-serif, system-ui, sans-serif" },
    body: { value: "Inter, ui-sans-serif, system-ui, sans-serif" },
    mono: { value: "JetBrains Mono, SFMono-Regular, Consolas, monospace" },
  },
  fontSizes: {
    xs: { value: "0.75rem" },
    sm: { value: "0.875rem" },
    md: { value: "1rem" },
    lg: { value: "1.125rem" },
    xl: { value: "1.25rem" },
    "2xl": { value: "1.5rem" },
    "3xl": { value: "1.875rem" },
    "4xl": { value: "2.25rem" },
    "5xl": { value: "3rem" },
    "6xl": { value: "3.75rem" },
  },
  lineHeights: {
    tight: { value: "1.1" },
    snug: { value: "1.25" },
    normal: { value: "1.55" },
    relaxed: { value: "1.75" },
  },
  fontWeights: {
    normal: { value: "400" },
    medium: { value: "500" },
    semibold: { value: "600" },
    bold: { value: "700" },
  },
} as const;
