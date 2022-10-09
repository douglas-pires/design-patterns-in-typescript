import type { BoardGame } from "../interfaces/board-game.interface";
import type { VideoGame as IVideoGame } from "../interfaces/video-game.interface";

export class VideoGame implements IVideoGame {
  constructor(
    public name: string,
    public numberOfPlayers: number,
    public numberOfControllers: number
  ) {}

  play(): void {
    console.log(`${this.name} is being played.`);
  }

  interactWithBoardGame(boardGame: BoardGame): void {
    console.log(`${this.name} is interacting with ${boardGame.name}.`);
    boardGame.play();
  }
}
