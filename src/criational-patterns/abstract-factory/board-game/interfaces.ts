import { Game } from "../game.interface";

export abstract class TerrorBoardGame extends Game {
  abstract panic(): void;
}

export abstract class HorrorBoardGame extends Game {
  abstract scare(): void;
}

export abstract class FantasyBoardGame extends Game {
  abstract crash(): void;
}

export type BoardGame = TerrorBoardGame | HorrorBoardGame | FantasyBoardGame;
