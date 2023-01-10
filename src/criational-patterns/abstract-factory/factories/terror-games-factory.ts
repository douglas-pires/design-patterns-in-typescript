import { ConcreteTerrorBoardGame, TerrorBoardGame } from "../board-game";
import { ConcreteTerrorCardGame, TerrorCardGame } from "../card-game";
import { ConcreteTerrorVideoGame, TerrorVideoGame } from "../video-game";
import { AbstractGamesFactory } from "./interfaces";

export class TerrorGamesFactory implements AbstractGamesFactory {
  createCardGame(name: string, players: number, price: number): TerrorCardGame {
    return new ConcreteTerrorCardGame(name, players, price);
  }

  createBoardGame(
    name: string,
    players: number,
    price: number
  ): TerrorBoardGame {
    return new ConcreteTerrorBoardGame(name, players, price);
  }

  createVideoGame(
    name: string,
    players: number,
    price: number
  ): TerrorVideoGame {
    return new ConcreteTerrorVideoGame(name, players, price);
  }
}
