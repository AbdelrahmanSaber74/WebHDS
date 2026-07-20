import { seoConfig } from "@/config";
import { homeData } from "@/features/home/data";
import type { HomeContent } from "@/features/home/types";
import { createLocalContentRepository } from "@/lib/content";

export const homeContentRepository = createLocalContentRepository({
  content: homeData,
  metadata: seoConfig.home,
});

export type HomeContentRepository = typeof homeContentRepository;
export type HomeMetadata = ReturnType<HomeContentRepository["getMetadata"]>;
export type HomeRepositoryContent = HomeContent;
