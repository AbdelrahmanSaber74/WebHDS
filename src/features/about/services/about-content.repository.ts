import { seoConfig } from "@/config";
import { aboutData } from "@/features/about/data";
import { createLocalContentRepository } from "@/lib/content";

export const aboutContentRepository = createLocalContentRepository({
  content: aboutData,
  metadata: seoConfig.about,
});

export type AboutContentRepository = typeof aboutContentRepository;
