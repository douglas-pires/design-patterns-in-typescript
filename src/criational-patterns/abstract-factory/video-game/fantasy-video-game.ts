import { FantasyVideoGame } from "./interfaces";

export class ConcreteFantasyVideoGame extends FantasyVideoGame {
  constructor(name: string, players: number, price: number) {
    super(name, players, price);
  }

  crash(): void {
    throw new Error("Method not implemented.");
  }
}
