import { envConfig } from "./env.config";

export const featureFlagsConfig = envConfig.flags;

export type FeatureFlagKey = keyof typeof featureFlagsConfig;

export function isFeatureEnabled(flag: FeatureFlagKey): boolean {
  return featureFlagsConfig[flag];
}
