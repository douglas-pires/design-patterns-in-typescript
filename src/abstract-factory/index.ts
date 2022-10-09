import { GameFactory } from "./models";

function start() {
  const gameFactory = new GameFactory();
  const boardGame = gameFactory.createBoardGame();
  const videoGame = gameFactory.createVideoGame();

  boardGame.interactWithVideoGame(videoGame);
  videoGame.interactWithBoardGame(boardGame);
}

start();
