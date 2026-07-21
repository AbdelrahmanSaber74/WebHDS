import { Handshake, Layers3, ShieldCheck, Sparkles } from "lucide-react";

import { routesConfig } from "@/config";
import type { HomeContent } from "@/features/home/types";

export const homeAboutData: HomeContent["about"] = {
  header: {
    eyebrowKey: "home.about.eyebrow",
    titleKey: "home.about.title",
    descriptionKey: "home.about.description",
  },
  bodyKey: "home.about.body",
  ctaKey: "home.about.cta",
  ctaHref: routesConfig.about.path,
  highlights: [
    {
      id: "engineering",
      titleKey: "home.about.highlights.engineering.title",
      descriptionKey: "home.about.highlights.engineering.description",
      icon: Sparkles,
    },
    {
      id: "security",
      titleKey: "home.about.highlights.security.title",
      descriptionKey: "home.about.highlights.security.description",
      icon: ShieldCheck,
    },
    {
      id: "scalable",
      titleKey: "home.about.highlights.scalable.title",
      descriptionKey: "home.about.highlights.scalable.description",
      icon: Layers3,
    },
    {
      id: "partnership",
      titleKey: "home.about.highlights.partnership.title",
      descriptionKey: "home.about.highlights.partnership.description",
      icon: Handshake,
    },
  ],
};
