import { ConcreteHorrorBoardGame, HorrorBoardGame } from "../board-game";
import { ConcreteHorrorCardGame, HorrorCardGame } from "../card-game";
import { ConcreteHorrorVideoGame, HorrorVideoGame } from "../video-game";
import { AbstractGamesFactory } from "./interfaces";

export class HorrorGamesFactory implements AbstractGamesFactory {
  createCardGame(name: string, players: number, price: number): HorrorCardGame {
    return new ConcreteHorrorCardGame(name, players, price);
  }

  createBoardGame(
    name: string,
    players: number,
    price: number
  ): HorrorBoardGame {
    return new ConcreteHorrorBoardGame(name, players, price);
  }

  createVideoGame(
    name: string,
    players: number,
    price: number
  ): HorrorVideoGame {
    return new ConcreteHorrorVideoGame(name, players, price);
  }
}
