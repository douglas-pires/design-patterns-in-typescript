import {
  ConsoleContext,
  NintendoSwitchStrategy,
  PlayStationStrategy,
} from "./strategies";

class App {
  constructor(
    private context: ConsoleContext = new ConsoleContext(
      new NintendoSwitchStrategy()
    )
  ) {}

  start(console: string, game: string): void {
    this.context.getStrategy(console).getGame(game);
    this.context.setStrategy(new PlayStationStrategy());
    this.context.executeStrategy("Final Fantasy VII");
  }
}

new App().start("Nintendo Switch", "Super Mario Odyssey");
