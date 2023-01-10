import { TerrorVideoGame } from "./interfaces";

export class ConcreteTerrorVideoGame implements TerrorVideoGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  panic(): void {
    throw new Error("Method not implemented.");
  }
}
