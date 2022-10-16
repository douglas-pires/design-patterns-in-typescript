export interface Player {
  assignWeapon(weapon: string): void;
  mission(): void;
}

export enum PlayerType {
  TERRORIST = "terrorist",
  COUNTER_TERRORIST = "counter-terrorist",
}
