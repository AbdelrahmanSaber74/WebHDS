import { HOME_ANCHORS } from "@/features/home/constants";
import type { HomeCta } from "@/features/home/types";

export const homeCtaData: HomeCta = {
  titleKey: "home.cta.title",
  descriptionKey: "home.cta.description",
  primaryCtaKey: "home.cta.primary",
  primaryCtaHref: HOME_ANCHORS.contact,
  secondaryCtaKey: "home.cta.secondary",
  secondaryCtaHref: "mailto:hello@hds.example",
};
