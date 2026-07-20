import { envConfig } from "./env.config";

export const appConfig = {
  name: envConfig.appName,
  url: envConfig.appUrl,
} as const;
