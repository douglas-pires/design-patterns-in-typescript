import type { BoardGame } from "./board-game.interface";
import type { Game } from "./game.interface";

export interface VideoGame extends Game {
  numberOfControllers: number;
  interactWithBoardGame: (boardGame: BoardGame) => void;
}
