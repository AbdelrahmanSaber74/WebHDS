import { companyService } from "@/features/company/services";

export function useCompanyStats() {
  return companyService.getStatistics();
}
