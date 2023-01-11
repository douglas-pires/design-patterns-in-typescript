export const transportTypes = {
  ship: "Ship",
  bus: "Bus",
  train: "Train",
} as const;

export type TransportTypes = typeof transportTypes[keyof typeof transportTypes];

export interface Transport {
  deliver(): void;
}
