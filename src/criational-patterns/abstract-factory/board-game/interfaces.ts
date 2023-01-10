import { Game } from "../game.interface";

export interface TerrorBoardGame extends Game {
  panic(): void;
}

export interface HorrorBoardGame extends Game {
  scare(): void;
}

export interface FantasyBoardGame extends Game {
  crash(): void;
}

export type BoardGame = TerrorBoardGame | HorrorBoardGame | FantasyBoardGame;
