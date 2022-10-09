export enum Console {
  NintendoSwitch = "Nintendo Switch",
  PlayStation = "PlayStation",
  XBox = "XBox",
}

export interface ConsoleStrategy {
  getGame(string: string): string;
}
