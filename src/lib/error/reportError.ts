import { logger } from "@/lib/logger";
import { monitoring } from "@/lib/monitoring";

type ErrorContext = Record<string, unknown>;

export function reportError(error: Error, context?: ErrorContext) {
  logger.error(error.message, { error, ...context });
  monitoring.captureException(error, context);
}
