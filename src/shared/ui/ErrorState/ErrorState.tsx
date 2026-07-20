import { AlertTriangle } from "lucide-react";
import { EmptyState } from "../EmptyState";
import type { EmptyStateProps } from "../EmptyState";

export type ErrorStateProps = Omit<EmptyStateProps, "icon">;

export function ErrorState(props: ErrorStateProps) {
  return <EmptyState icon={<AlertTriangle aria-hidden="true" size={28} />} {...props} />;
}
