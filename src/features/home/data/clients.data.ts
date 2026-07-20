import type { HomeContent } from "@/features/home/types";

export const homeClientsData: HomeContent["clients"] = {
  header: {
    eyebrowKey: "home.clients.eyebrow",
    titleKey: "home.clients.title",
    descriptionKey: "home.clients.description",
  },
  items: [
    { name: "NovaPay" },
    { name: "AstraGov" },
    { name: "MedCore" },
    { name: "RetailOS" },
    { name: "CloudPort" },
  ],
};
