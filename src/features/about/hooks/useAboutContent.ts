import { aboutContentService } from "@/features/about/services";

export function useAboutContent() {
  return aboutContentService.getAboutContent();
}
