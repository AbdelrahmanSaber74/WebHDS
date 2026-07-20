import type { Variants } from "framer-motion";

const entranceTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] } as const;
const hoverTransition = { duration: 0.22, ease: [0.22, 1, 0.36, 1] } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: entranceTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: entranceTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: entranceTransition,
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...entranceTransition, duration: 0.85 },
  },
};

export const hoverLift = {
  whileHover: { y: -4, transition: hoverTransition },
  whileTap: { scale: 0.98 },
} as const;

export const ctaHover = {
  whileHover: { scale: 1.02, transition: hoverTransition },
  whileTap: { scale: 0.98 },
} as const;

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};
