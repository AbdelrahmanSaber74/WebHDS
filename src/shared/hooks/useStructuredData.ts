import { useEffect } from "react";
import { upsertStructuredData } from "@/shared/utils";
import type { StructuredData } from "@/shared/utils";

export function useStructuredData(data: StructuredData | undefined, elementId = "structured-data") {
  useEffect(() => {
    upsertStructuredData(data, elementId);
  }, [data, elementId]);
}
