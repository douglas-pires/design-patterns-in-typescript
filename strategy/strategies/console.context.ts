import {
  Console,
  ConsoleStrategy,
} from "../interfaces/console-strategy.interface";
import { NintendoSwitchStrategy } from "./nintendo-switch.strategy";
import { PlayStationStrategy } from "./playstation.strategy";
import { XBoxStrategy } from "./x-box.strategy";

export class ConsoleContext {
  constructor(private strategy: ConsoleStrategy) {}

  setStrategy(strategy: ConsoleStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(game: string): string {
    return this.strategy.getGame(game);
  }

  getStrategy(console: string): ConsoleStrategy {
    switch (console) {
      case Console.NintendoSwitch:
        return new NintendoSwitchStrategy();
      case Console.XBox:
        return new XBoxStrategy();
      case Console.PlayStation:
        return new PlayStationStrategy();
      default:
        throw new Error("Invalid console");
    }
  }
}
