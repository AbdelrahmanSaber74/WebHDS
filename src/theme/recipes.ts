export const componentVariants = {
  button: {
    variants: ["solid", "outline", "ghost", "subtle"],
    sizes: ["sm", "md", "lg"],
  },
  card: {
    variants: ["elevated", "outline", "glass"],
    sizes: ["sm", "md", "lg"],
  },
  input: {
    variants: ["outline", "filled", "flushed"],
    sizes: ["sm", "md", "lg"],
  },
} as const;
