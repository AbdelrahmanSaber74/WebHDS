import type { HomeContent } from "@/features/home/types";
import { homeContentRepository } from "./home-content.repository";

export type HomeContentService = {
  getContent: () => HomeContent;
  getHomeContent: () => HomeContent;
  getMetadata: typeof homeContentRepository.getMetadata;
};

function getContent() {
  return homeContentRepository.getContent();
}

export const homeContentService: HomeContentService = {
  getContent,
  getHomeContent: getContent,
  getMetadata: homeContentRepository.getMetadata,
};
