import { FantasyCardGame } from "./interfaces";

export class ConcreteFantasyCardGame implements FantasyCardGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  crash(): void {
    throw new Error("Method not implemented.");
  }
}
