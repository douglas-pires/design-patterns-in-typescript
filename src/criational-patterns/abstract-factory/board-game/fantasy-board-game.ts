import { FantasyBoardGame } from "./interfaces";

export class ConcreteFantasyBoardGame extends FantasyBoardGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  crash(): void {
    throw new Error("Method not implemented.");
  }
}
