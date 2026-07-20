import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestProviders } from "@/shared/utils/TestProviders";
import { useCompany } from "./useCompany";
import { useCompanyStats } from "./useCompanyStats";
import { useLeadership } from "./useLeadership";
import { useOffices } from "./useOffices";
import { useSocialLinks } from "./useSocialLinks";

describe("company hooks", () => {
  it("exposes the canonical company profile", () => {
    const { result } = renderHook(() => useCompany(), { wrapper: TestProviders });

    expect(result.current.name).toBe("HDS");
    expect(result.current.legalName).toBe("HDS Company LLC");
  });

  it("exposes company statistics and offices", () => {
    const stats = renderHook(() => useCompanyStats(), { wrapper: TestProviders });
    const offices = renderHook(() => useOffices(), { wrapper: TestProviders });

    expect(stats.result.current).toHaveLength(4);
    expect(offices.result.current).toHaveLength(2);
  });

  it("exposes leadership and social links", () => {
    const leadership = renderHook(() => useLeadership(), { wrapper: TestProviders });
    const socialLinks = renderHook(() => useSocialLinks(), { wrapper: TestProviders });

    expect(leadership.result.current).toHaveLength(2);
    expect(socialLinks.result.current).toHaveLength(9);
  });
});
