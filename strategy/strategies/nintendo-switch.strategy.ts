import { ConsoleStrategy } from "../interfaces/console-strategy.interface";

export class NintendoSwitchStrategy implements ConsoleStrategy {
  getGame(game: string): string {
    return `Nintendo Switch: ${game}`;
  }
}
