import { HorrorBoardGame } from "./interfaces";

export class ConcreteHorrorBoardGame implements HorrorBoardGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  scare(): void {
    throw new Error("Method not implemented.");
  }
}
