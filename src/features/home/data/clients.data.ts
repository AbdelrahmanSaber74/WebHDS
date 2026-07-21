import type { HomeContent } from "@/features/home/types";

export const homeClientsData: HomeContent["clients"] = {
  header: {
    eyebrowKey: "home.clients.eyebrow",
    titleKey: "home.clients.title",
    descriptionKey: "home.clients.description",
  },
  items: [
    {
      id: "atlas",
      labelKey: "home.clients.logos.atlas",
      accent: "hds.blue",
      logoUrl: "/clients/1.png",
    },
    {
      id: "medcore",
      labelKey: "home.clients.logos.medcore",
      accent: "hds.success",
      logoUrl: "/clients/2.png",
    },
    {
      id: "novapay",
      labelKey: "home.clients.logos.novapay",
      accent: "hds.teal",
      logoUrl: "/clients/3.png",
    },
    {
      id: "retailos",
      labelKey: "home.clients.logos.retailos",
      accent: "hds.amber",
      logoUrl: "/clients/4.png",
    },
    {
      id: "fleetpulse",
      labelKey: "home.clients.logos.fleetpulse",
      accent: "hds.blueDark",
      logoUrl: "/clients/5.png",
    },
    {
      id: "learnsphere",
      labelKey: "home.clients.logos.learnsphere",
      accent: "hds.warning",
      logoUrl: "/clients/6.jpg",
    },
    {
      id: "estateos",
      labelKey: "home.clients.logos.estateos",
      accent: "hds.tealDark",
      logoUrl: "/clients/7.png",
    },
    {
      id: "factorygrid",
      labelKey: "home.clients.logos.factorygrid",
      accent: "hds.graphite",
      logoUrl: "/clients/8.jpg",
    },
  ],
};
