export enum TransportEnum {
  Ship = "Ship",
  Bus = "Bus",
  Train = "Train",
}

export interface Transport {
  deliver(): void;
}
