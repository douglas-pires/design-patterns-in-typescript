import { FantasyVideoGame } from "./interfaces";

export class ConcreteFantasyVideoGame implements FantasyVideoGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  crash(): void {
    throw new Error("Method not implemented.");
  }
}
