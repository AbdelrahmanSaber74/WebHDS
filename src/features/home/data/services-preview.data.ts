import { Bot, CloudCog, Code2, LayoutDashboard, PanelsTopLeft, Smartphone } from "lucide-react";
import type { HomeContent } from "@/features/home/types";

export const homeServicesPreviewData: HomeContent["servicesPreview"] = {
  header: {
    eyebrowKey: "home.services.eyebrow",
    titleKey: "home.services.title",
    descriptionKey: "home.services.description",
  },
  items: [
    {
      id: "custom-software",
      titleKey: "home.services.customSoftware.title",
      descriptionKey: "home.services.customSoftware.description",
      icon: Code2,
    },
    {
      id: "web-apps",
      titleKey: "home.services.webApps.title",
      descriptionKey: "home.services.webApps.description",
      icon: PanelsTopLeft,
    },
    {
      id: "mobile-apps",
      titleKey: "home.services.mobileApps.title",
      descriptionKey: "home.services.mobileApps.description",
      icon: Smartphone,
    },
    {
      id: "enterprise-systems",
      titleKey: "home.services.enterprise.title",
      descriptionKey: "home.services.enterprise.description",
      icon: LayoutDashboard,
    },
    {
      id: "cloud-devops",
      titleKey: "home.services.cloud.title",
      descriptionKey: "home.services.cloud.description",
      icon: CloudCog,
    },
    {
      id: "ai-solutions",
      titleKey: "home.services.ai.title",
      descriptionKey: "home.services.ai.description",
      icon: Bot,
    },
  ],
};
