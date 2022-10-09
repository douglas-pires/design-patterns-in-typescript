import { BoardGame, VideoGame } from ".";
import type { AbstractGameFactory } from "../interfaces/abstract-game-factory.interface";
import type { BoardGame as IBoardGame } from "../interfaces/board-game.interface";
import type { VideoGame as IVideoGame } from "../interfaces/video-game.interface";

export class GameFactory implements AbstractGameFactory {
  createBoardGame(): IBoardGame {
    return new BoardGame("Monopoly", 22, 4);
  }

  createVideoGame(): IVideoGame {
    return new VideoGame("Call of Duty", 4, 2);
  }
}
