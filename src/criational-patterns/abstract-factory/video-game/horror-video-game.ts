import { HorrorVideoGame } from "./interfaces";

export class ConcreteHorrorVideoGame extends HorrorVideoGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  scare(): void {
    throw new Error("Method not implemented.");
  }
}
