import type { HomeContent } from "@/features/home/types";

export const homeProcessData: HomeContent["process"] = {
  header: {
    eyebrowKey: "home.process.eyebrow",
    titleKey: "home.process.title",
    descriptionKey: "home.process.description",
  },
  items: ["discover", "architect", "design", "build", "launch", "optimize"].map((id) => ({
    id,
    titleKey: `home.process.${id}.title`,
    descriptionKey: `home.process.${id}.description`,
  })),
};
