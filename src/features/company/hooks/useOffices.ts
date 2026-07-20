import { companyService } from "@/features/company/services";

export function useOffices() {
  return companyService.getOffices();
}
