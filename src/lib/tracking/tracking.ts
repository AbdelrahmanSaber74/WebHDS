export type TrackingPayload = Record<string, unknown>;

export type TrackingClient = {
  identify: (userId: string, traits?: TrackingPayload) => void;
  reset: () => void;
};

export const tracking: TrackingClient = {
  identify: () => undefined,
  reset: () => undefined,
};
