import { ConsoleStrategy } from "../interfaces/console-strategy.interface";

export class PlayStationStrategy implements ConsoleStrategy {
  getGame(game: string): string {
    return `PlayStation: ${game}`;
  }
}
