import { TerrorBoardGame } from "./interfaces";

export class ConcreteTerrorBoardGame implements TerrorBoardGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  panic(): void {
    throw new Error("Method not implemented.");
  }
}
