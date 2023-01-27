import { TerrorCardGame } from "./interfaces";

export class ConcreteTerrorCardGame extends TerrorCardGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  panic(): void {
    throw new Error("Method not implemented.");
  }
}
