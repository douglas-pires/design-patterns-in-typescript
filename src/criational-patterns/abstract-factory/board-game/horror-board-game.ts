import { HorrorBoardGame } from "./interfaces";

export class ConcreteHorrorBoardGame extends HorrorBoardGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  scare(): void {
    throw new Error("Method not implemented.");
  }
}
