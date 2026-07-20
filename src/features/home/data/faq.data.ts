import type { HomeContent } from "@/features/home/types";

export const homeFaqData: HomeContent["faq"] = {
  header: {
    eyebrowKey: "home.faq.eyebrow",
    titleKey: "home.faq.title",
    descriptionKey: "home.faq.description",
  },
  items: ["scope", "timeline", "ownership", "support"].map((id) => ({
    id,
    titleKey: `home.faq.${id}.title`,
    contentKey: `home.faq.${id}.content`,
  })),
};
