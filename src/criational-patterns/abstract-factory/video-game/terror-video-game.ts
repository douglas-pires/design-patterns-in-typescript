import { TerrorVideoGame } from "./interfaces";

export class ConcreteTerrorVideoGame extends TerrorVideoGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  panic(): void {
    throw new Error("Method not implemented.");
  }
}
