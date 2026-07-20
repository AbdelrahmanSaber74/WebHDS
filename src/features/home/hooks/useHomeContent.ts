import { homeContentService } from "@/features/home/services";

export function useHomeContent() {
  return homeContentService.getHomeContent();
}
