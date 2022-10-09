import type { Game } from "./game.interface";
import type { VideoGame } from "./video-game.interface";

export interface BoardGame extends Game {
  numberOfPieces: number;
  interactWithVideoGame: (videoGame: VideoGame) => void;
}
