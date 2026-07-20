import { BadgeCheck, Gauge, LockKeyhole, Workflow } from "lucide-react";
import type { HomeContent } from "@/features/home/types";

export const homeWhyChooseUsData: HomeContent["whyChooseUs"] = {
  header: {
    eyebrowKey: "home.why.eyebrow",
    titleKey: "home.why.title",
    descriptionKey: "home.why.description",
  },
  items: [
    {
      id: "business-first",
      titleKey: "home.why.business.title",
      descriptionKey: "home.why.business.description",
      icon: Gauge,
    },
    {
      id: "secure-by-default",
      titleKey: "home.why.security.title",
      descriptionKey: "home.why.security.description",
      icon: LockKeyhole,
    },
    {
      id: "delivery-clarity",
      titleKey: "home.why.delivery.title",
      descriptionKey: "home.why.delivery.description",
      icon: Workflow,
    },
    {
      id: "launch-partner",
      titleKey: "home.why.partner.title",
      descriptionKey: "home.why.partner.description",
      icon: BadgeCheck,
    },
  ],
};
