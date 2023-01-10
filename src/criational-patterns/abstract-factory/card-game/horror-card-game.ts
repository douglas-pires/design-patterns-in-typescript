import { HorrorCardGame } from "./interfaces";

export class ConcreteHorrorCardGame implements HorrorCardGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  scare(): void {
    throw new Error("Method not implemented.");
  }
}
