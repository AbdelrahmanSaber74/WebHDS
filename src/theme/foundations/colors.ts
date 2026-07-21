export const colorTokens = {
  hds: {
    ink: { value: "#09111f" },
    cloud: { value: "#f7f9fc" },
    surface: { value: "#ffffff" },
    graphite: { value: "#152033" },
    muted: { value: "#5b677a" },
    teal: { value: "#00a6b4" },
    tealDark: { value: "#007782" },
    blue: { value: "#235cff" },
    blueDark: { value: "#153aa8" },
    amber: { value: "#f4b759" },
    success: { value: "#1f9d66" },
    warning: { value: "#d28a00" },
    danger: { value: "#e5484d" },
    neutral50: { value: "#f7f9fc" },
    neutral100: { value: "#edf2f7" },
    neutral200: { value: "#dce4ee" },
    neutral300: { value: "#c2ccd9" },
    neutral400: { value: "#8d99aa" },
    neutral500: { value: "#687588" },
    neutral600: { value: "#465366" },
    neutral700: { value: "#2c384b" },
    neutral800: { value: "#172235" },
    neutral900: { value: "#07111f" },
  },
} as const;

export const semanticColorTokens = {
  "bg.canvas": { value: { base: "#f7f9fc", _dark: "#07111f" } },
  "bg.surface": { value: { base: "rgba(255, 255, 255, 0.9)", _dark: "rgba(11, 24, 42, 0.78)" } },
  "bg.glass": { value: { base: "rgba(255, 255, 255, 0.76)", _dark: "rgba(7, 17, 31, 0.76)" } },
  "bg.elevated": { value: { base: "#ffffff", _dark: "#0b182a" } },
  "bg.footer": { value: { base: "#eef4f8", _dark: "#081322" } },
  "bg.hero": {
    value: {
      base: "linear-gradient(135deg, rgba(247, 249, 252, 0.98) 0%, rgba(237, 247, 250, 0.92) 48%, rgba(255, 255, 255, 0.98) 100%)",
      _dark:
        "linear-gradient(135deg, rgba(7, 17, 31, 0.98) 0%, rgba(9, 37, 52, 0.9) 52%, rgba(11, 24, 42, 0.98) 100%)",
    },
  },
  "bg.panelGradient": {
    value: {
      base: "linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(237, 247, 250, 0.78))",
      _dark: "linear-gradient(145deg, rgba(13, 29, 48, 0.96), rgba(7, 17, 31, 0.82))",
    },
  },
  "bg.subtle": { value: { base: "#edf2f7", _dark: "#172235" } },
  "fg.default": { value: { base: "#09111f", _dark: "#f7fbff" } },
  "fg.muted": { value: { base: "#5b677a", _dark: "#aab5c5" } },
  "border.subtle": {
    value: { base: "rgba(20, 32, 52, 0.12)", _dark: "rgba(255, 255, 255, 0.12)" },
  },
  "border.strong": {
    value: { base: "rgba(20, 32, 52, 0.18)", _dark: "rgba(255, 255, 255, 0.18)" },
  },
  "brand.primary": { value: { base: "#00a6b4", _dark: "#20d5df" } },
  "brand.primaryHover": { value: { base: "#007782", _dark: "#5debf2" } },
  "brand.accent": { value: { base: "#f4b759", _dark: "#ffd27a" } },
  "brand.soft": { value: { base: "rgba(0, 166, 180, 0.12)", _dark: "rgba(32, 213, 223, 0.14)" } },
} as const;
