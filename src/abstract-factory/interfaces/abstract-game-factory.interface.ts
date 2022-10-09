import type { BoardGame } from "./board-game.interface";
import type { VideoGame } from "./video-game.interface";

export interface AbstractGameFactory {
  createBoardGame(): BoardGame;
  createVideoGame(): VideoGame;
}
