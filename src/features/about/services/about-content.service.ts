import type { AboutContent } from "@/features/about/types";
import { aboutContentRepository } from "./about-content.repository";

export type AboutContentPort = {
  getAboutContent: () => AboutContent;
  getContent: () => AboutContent;
  getMetadata: typeof aboutContentRepository.getMetadata;
};

function getContent() {
  return aboutContentRepository.getContent();
}

export const aboutContentService: AboutContentPort = {
  getAboutContent: getContent,
  getContent,
  getMetadata: aboutContentRepository.getMetadata,
};
