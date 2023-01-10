import { FantasyBoardGame } from "./interfaces";

export class ConcreteFantasyBoardGame implements FantasyBoardGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  crash(): void {
    throw new Error("Method not implemented.");
  }
}
