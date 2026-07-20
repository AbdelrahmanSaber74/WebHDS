export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, unknown>;
};

export type AnalyticsClient = {
  page: (path: string, title?: string) => void;
  track: (event: AnalyticsEvent) => void;
};

export const analytics: AnalyticsClient = {
  page: () => undefined,
  track: () => undefined,
};
