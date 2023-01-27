import { FantasyCardGame } from "./interfaces";

export class ConcreteFantasyCardGame extends FantasyCardGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  crash(): void {
    throw new Error("Method not implemented.");
  }
}
