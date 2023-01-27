import { BoardGame } from "./board-game";
import { CardGame } from "./card-game";
import { AbstractGamesFactory } from "./factories/interfaces";
import { TerrorGamesFactory } from "./factories/terror-games-factory";
import { VideoGame } from "./video-game";

class Client {
  constructor(private factory: AbstractGamesFactory) {}

  public wantsAvailableGames(): [BoardGame, VideoGame, CardGame] {
    const boardGame = this.factory.createBoardGame("Zombicide", 1, 10);
    const videoGame = this.factory.createVideoGame("Silent Hill", 1, 10);
    const cardGame = this.factory.createCardGame("Magic the Gathering", 1, 10);

    // you don't have access to specifics of terror board game classes implementations
    // because you are using an abstract factory
    // and hence are only able to use properties and methods defined in the abstract class

    return [boardGame, videoGame, cardGame];
  }
}

function start(): void {
  const client = new Client(new TerrorGamesFactory());

  const games = client.wantsAvailableGames();

  for (const game of games) {
    game.play();
  }
}

start();
