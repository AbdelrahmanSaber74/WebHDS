import type { AxiosRequestConfig } from "axios";
import { axiosInstance } from "@/lib/axios";
import { normalizeApiError, showGlobalErrorToast } from "@/lib/error";

export type ApiClient = {
  get: <TResponse>(url: string, config?: AxiosRequestConfig) => Promise<TResponse>;
  post: <TResponse, TPayload = unknown>(
    url: string,
    payload?: TPayload,
    config?: AxiosRequestConfig,
  ) => Promise<TResponse>;
};

async function request<TResponse>(config: AxiosRequestConfig): Promise<TResponse> {
  try {
    const response = await axiosInstance.request<TResponse>(config);
    return response.data;
  } catch (error) {
    const normalizedError = normalizeApiError(error);
    showGlobalErrorToast(normalizedError);
    throw normalizedError;
  }
}

export const apiClient: ApiClient = {
  get: (url, config) => request({ ...config, method: "GET", url }),
  post: (url, payload, config) => request({ ...config, data: payload, method: "POST", url }),
};
