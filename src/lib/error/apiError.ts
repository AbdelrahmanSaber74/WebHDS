import axios from "axios";

export type NormalizedApiError = {
  message: string;
  statusCode?: number;
  code?: string;
  details?: unknown;
};

type ErrorResponsePayload = {
  message?: unknown;
  code?: unknown;
  details?: unknown;
};

const DEFAULT_ERROR_MESSAGE = "Unexpected API error.";

function isErrorResponsePayload(value: unknown): value is ErrorResponsePayload {
  return typeof value === "object" && value !== null;
}

export function normalizeApiError(error: unknown): NormalizedApiError {
  if (axios.isAxiosError(error)) {
    const payload = isErrorResponsePayload(error.response?.data) ? error.response?.data : undefined;

    return {
      message:
        typeof payload?.message === "string"
          ? payload.message
          : error.message || DEFAULT_ERROR_MESSAGE,
      statusCode: error.response?.status,
      code: typeof payload?.code === "string" ? payload.code : error.code,
      details: payload?.details,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: DEFAULT_ERROR_MESSAGE, details: error };
}
