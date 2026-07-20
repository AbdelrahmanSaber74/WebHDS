export type MonitoringContext = Record<string, unknown>;

export type MonitoringClient = {
  captureException: (error: Error, context?: MonitoringContext) => void;
  captureMessage: (message: string, context?: MonitoringContext) => void;
};

export const monitoring: MonitoringClient = {
  captureException: () => undefined,
  captureMessage: () => undefined,
};
