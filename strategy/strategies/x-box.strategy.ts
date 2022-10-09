import { ConsoleStrategy } from "../interfaces/console-strategy.interface";

export class XBoxStrategy implements ConsoleStrategy {
  getGame(game: string): string {
    return `XBox: ${game}`;
  }
}
