export const shadowTokens = {
  shadows: {
    xs: { value: "0 1px 2px rgba(7, 17, 31, 0.06)" },
    sm: { value: "0 6px 18px rgba(7, 17, 31, 0.08)" },
    md: { value: "0 12px 32px rgba(7, 17, 31, 0.1)" },
    nav: { value: "0 10px 34px rgba(7, 17, 31, 0.08)" },
    premium: { value: "0 24px 80px rgba(7, 17, 31, 0.13)" },
    lift: { value: "0 18px 42px rgba(7, 17, 31, 0.12)" },
    ambient: {
      value: "0 30px 90px rgba(7, 17, 31, 0.16), 0 2px 0 rgba(255, 255, 255, 0.55) inset",
    },
    glow: { value: "0 0 40px rgba(0, 166, 180, 0.22)" },
  },
} as const;
