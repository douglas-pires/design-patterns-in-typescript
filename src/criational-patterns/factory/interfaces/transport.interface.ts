export const transportTypes = {
  car: "Car",
  truck: "Truck",
  drone: "Drone",
} as const;

export type TransportTypes = typeof transportTypes[keyof typeof transportTypes];

export interface Transport {
  deliver(): void;
}
