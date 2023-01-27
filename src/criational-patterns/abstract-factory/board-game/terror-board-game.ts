import { TerrorBoardGame } from "./interfaces";

export class ConcreteTerrorBoardGame extends TerrorBoardGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  panic(): void {
    throw new Error("Method not implemented.");
  }
}
