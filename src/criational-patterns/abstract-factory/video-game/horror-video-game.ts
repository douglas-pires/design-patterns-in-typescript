import { HorrorVideoGame } from "./interfaces";

export class ConcreteHorrorVideoGame implements HorrorVideoGame {
  constructor(
    public name: string,
    public players: number,
    public price: number
  ) {}

  scare(): void {
    throw new Error("Method not implemented.");
  }
}
