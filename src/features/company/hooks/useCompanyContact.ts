import { companyService } from "@/features/company/services";

export function useCompanyContact() {
  return companyService.getContact();
}
