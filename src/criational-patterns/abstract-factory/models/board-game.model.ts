import type { BoardGame as IBoardGame } from "../interfaces/board-game.interface";
import { VideoGame } from "../interfaces/video-game.interface";

export class BoardGame implements IBoardGame {
  constructor(
    public name: string,
    public numberOfPieces: number,
    public numberOfPlayers: number
  ) {}

  play(): void {
    console.log(`${this.name} is being played.`);
  }

  interactWithVideoGame(videoGame: VideoGame): void {
    console.log(`${this.name} is interacting with ${videoGame.name}.`);
    videoGame.play();
  }
}
