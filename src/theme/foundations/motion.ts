export const motionTokens = {
  durations: {
    fast: { value: "120ms" },
    normal: { value: "220ms" },
    slow: { value: "420ms" },
  },
  easings: {
    standard: { value: "cubic-bezier(0.2, 0, 0, 1)" },
    entrance: { value: "cubic-bezier(0.22, 1, 0.36, 1)" },
    exit: { value: "cubic-bezier(0.4, 0, 1, 1)" },
  },
} as const;
