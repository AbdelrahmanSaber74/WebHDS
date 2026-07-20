import type { NormalizedApiError } from "./apiError";

type ErrorToastHandler = (error: NormalizedApiError) => void;

let activeHandler: ErrorToastHandler | null = null;

export function registerGlobalErrorToast(handler: ErrorToastHandler) {
  activeHandler = handler;

  return () => {
    activeHandler = null;
  };
}

export function showGlobalErrorToast(error: NormalizedApiError) {
  activeHandler?.(error);
}
