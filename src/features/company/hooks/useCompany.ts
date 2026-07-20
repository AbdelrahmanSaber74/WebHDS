import { companyService } from "@/features/company/services";

export function useCompany() {
  return companyService.getCompany();
}
