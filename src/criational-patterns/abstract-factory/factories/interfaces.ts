import { BoardGame } from "../board-game";
import { CardGame } from "../card-game";
import { VideoGame } from "../video-game";

export interface AbstractGamesFactory {
  createBoardGame(name: string, players: number, price: number): BoardGame;
  createVideoGame(name: string, players: number, price: number): VideoGame;
  createCardGame(name: string, players: number, price: number): CardGame;
}
