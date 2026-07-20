import { companyService } from "@/features/company/services";

export function useSocialLinks() {
  return companyService.getSocialLinks();
}
