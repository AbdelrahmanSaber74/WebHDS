import { useEffect } from "react";
import { appConfig } from "@/config";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | ${appConfig.name}`;
  }, [title]);
}
