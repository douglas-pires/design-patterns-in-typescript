import { Game } from "../game.interface";

export interface TerrorVideoGame extends Game {
  panic(): void;
}

export interface HorrorVideoGame extends Game {
  scare(): void;
}

export interface FantasyVideoGame extends Game {
  crash(): void;
}

export type VideoGame = TerrorVideoGame | HorrorVideoGame | FantasyVideoGame;
