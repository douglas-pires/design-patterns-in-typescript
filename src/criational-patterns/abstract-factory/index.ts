import { AbstractGamesFactory } from "./factories/interfaces";
import { TerrorGamesFactory } from "./factories/terror-games-factory";

class Client {
  constructor(private factory: AbstractGamesFactory) {}

  public wantsAvailableGames() {
    const gameA = this.factory.createBoardGame("Zombicide", 1, 10);
    const gameB = this.factory.createVideoGame("Silent Hill", 1, 10);
    const gameC = this.factory.createCardGame("Magic the Gathering", 1, 10);

    // you don't have access to specifics of terror board game classes implementations
    // because you are using an abstract factory
    // and hence are only able to use properties and methods defined in the abstract class

    return [gameA, gameB, gameC];
  }
}

const client = new Client(new TerrorGamesFactory());

client.wantsAvailableGames();
