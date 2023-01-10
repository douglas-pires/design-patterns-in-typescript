import { TerrorCardGame } from "./interfaces";

export class ConcreteTerrorCardGame implements TerrorCardGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  panic(): void {
    throw new Error("Method not implemented.");
  }
}
