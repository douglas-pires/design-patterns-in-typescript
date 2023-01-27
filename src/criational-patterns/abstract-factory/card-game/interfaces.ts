import { Game } from "../game.interface";

export abstract class TerrorCardGame extends Game {
  abstract panic(): void;
}

export abstract class HorrorCardGame extends Game {
  abstract scare(): void;
}

export abstract class FantasyCardGame extends Game {
  abstract crash(): void;
}

export type CardGame = TerrorCardGame | HorrorCardGame | FantasyCardGame;
