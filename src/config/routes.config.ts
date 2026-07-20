export const routesConfig = {
  home: {
    id: "home",
    path: "/",
  },
  about: {
    id: "about",
    path: "/about",
  },
  services: {
    id: "services",
    path: "/services",
  },
  serviceDetails: {
    id: "serviceDetails",
    path: "/services/:slug",
  },
  portfolio: {
    id: "portfolio",
    path: "/portfolio",
  },
  portfolioDetails: {
    id: "portfolioDetails",
    path: "/portfolio/:slug",
  },
  contact: {
    id: "contact",
    path: "/contact",
  },
  notFound: {
    id: "notFound",
    path: "*",
  },
} as const;

export type RouteId = keyof typeof routesConfig;
