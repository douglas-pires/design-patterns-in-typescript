import { Game } from "../game.interface";

export interface TerrorCardGame extends Game {
  panic(): void;
}

export interface HorrorCardGame extends Game {
  scare(): void;
}

export interface FantasyCardGame extends Game {
  crash(): void;
}

export type CardGame = TerrorCardGame | HorrorCardGame | FantasyCardGame;
