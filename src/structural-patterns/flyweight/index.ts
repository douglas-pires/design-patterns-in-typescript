import { PlayerFactory, PlayerType } from "./modules/player";
import { Weapon } from "./modules/weapon/weapon.interface";

function getRandomPlayerType(): PlayerType {
  const values = Object.values(PlayerType);

  return values[Math.floor(Math.random() * values.length)] as PlayerType;
}

function getRandomWeapon(): Weapon {
  const values = Object.values(Weapon);

  return values[Math.floor(Math.random() * values.length)] as Weapon;
}

class CounterStrike {
  start(numOfPlayers: number) {
    for (let index = 0; index < numOfPlayers; index++) {
      const player = PlayerFactory.getPlayer(getRandomPlayerType());

      player.assignWeapon(getRandomWeapon());
    }
  }
}

const game = new CounterStrike();

game.start(10);
