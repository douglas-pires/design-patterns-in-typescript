import { HorrorCardGame } from "./interfaces";

export class ConcreteHorrorCardGame extends HorrorCardGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  scare(): void {
    throw new Error("Method not implemented.");
  }
}
