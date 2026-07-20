import { ErrorFallback } from "@/app/error-boundary";
import { useSeo } from "@/shared/hooks";

export function AppRouteErrorPage() {
  useSeo("error");

  return <ErrorFallback />;
}
