import axios from "axios";
import { envConfig } from "@/config";

export const axiosInstance = axios.create({
  baseURL: envConfig.apiBaseUrl,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});
