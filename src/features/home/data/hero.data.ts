import { images } from "@/assets/images";
import { HOME_ANCHORS } from "@/features/home/constants";
import type { HomeHero } from "@/features/home/types";

export const homeHeroData: HomeHero = {
  eyebrowKey: "home.hero.eyebrow",
  titleKey: "home.hero.title",
  descriptionKey: "home.hero.description",
  primaryCtaKey: "home.hero.primaryCta",
  primaryCtaHref: HOME_ANCHORS.contact,
  secondaryCtaKey: "home.hero.secondaryCta",
  secondaryCtaHref: HOME_ANCHORS.services,
  image: images.hdsEnterpriseHero,
  imageAltKey: "home.hero.imageAlt",
};
