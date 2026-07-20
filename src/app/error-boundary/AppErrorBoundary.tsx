import type { ErrorInfo, PropsWithChildren, ReactNode } from "react";
import { Component } from "react";
import { reportError } from "@/lib/error";
import { ErrorFallback } from "./ErrorFallback";

type AppErrorBoundaryProps = PropsWithChildren<{
  fallback?: ReactNode;
}>;

type AppErrorBoundaryState = {
  hasError: boolean;
};

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportError(error, { componentStack: errorInfo.componentStack ?? undefined });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <ErrorFallback />;
    }

    return this.props.children;
  }
}
