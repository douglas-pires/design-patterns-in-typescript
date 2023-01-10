import { ConcreteFantasyBoardGame, FantasyBoardGame } from "../board-game";
import { ConcreteFantasyCardGame, FantasyCardGame } from "../card-game";
import { ConcreteFantasyVideoGame, FantasyVideoGame } from "../video-game";
import { AbstractGamesFactory } from "./interfaces";

export class FantasyGamesFactory implements AbstractGamesFactory {
  createCardGame(
    name: string,
    players: number,
    price: number
  ): FantasyCardGame {
    return new ConcreteFantasyCardGame(name, players, price);
  }

  createBoardGame(
    name: string,
    players: number,
    price: number
  ): FantasyBoardGame {
    return new ConcreteFantasyBoardGame(name, players, price);
  }

  createVideoGame(
    name: string,
    players: number,
    price: number
  ): FantasyVideoGame {
    return new ConcreteFantasyVideoGame(name, players, price);
  }
}
