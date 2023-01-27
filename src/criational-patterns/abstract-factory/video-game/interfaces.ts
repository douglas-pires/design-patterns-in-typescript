import { Game } from "../game.interface";

export abstract class TerrorVideoGame extends Game {
  abstract panic(): void;
}

export abstract class HorrorVideoGame extends Game {
  abstract scare(): void;
}

export abstract class FantasyVideoGame extends Game {
  abstract crash(): void;
}

export type VideoGame = TerrorVideoGame | HorrorVideoGame | FantasyVideoGame;
