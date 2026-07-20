import type { HomeContent } from "@/features/home/types";

export const homeStatisticsData: HomeContent["statistics"] = {
  header: {
    eyebrowKey: "home.statistics.eyebrow",
    titleKey: "home.statistics.title",
    descriptionKey: "home.statistics.description",
  },
  items: [
    { id: "products", value: "120+", labelKey: "home.statistics.products" },
    { id: "disciplines", value: "14", labelKey: "home.statistics.disciplines" },
    { id: "uptime", value: "99.9%", labelKey: "home.statistics.uptime" },
    { id: "industries", value: "8+", labelKey: "home.statistics.industries" },
  ],
};
