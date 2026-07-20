import { companyService } from "@/features/company/services";

export function useLeadership() {
  return companyService.getLeadership();
}
