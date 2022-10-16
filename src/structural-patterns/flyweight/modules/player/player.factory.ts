import { Weapon } from "../weapon/weapon.interface";
import { Player, PlayerType } from "./base-player";
import { CounterTerrorist } from "./counter-terrorist";
import { Terrorist } from "./terrorist";

export class PlayerFactory {
  private static playerMap: Map<string, Player> = new Map();

  static getPlayer(type: PlayerType): Player {
    let player;

    if (this.playerMap.has(type)) {
      return this.playerMap.get(type) as Player;
    }

    switch (type) {
      case PlayerType.TERRORIST: {
        player = new Terrorist(Weapon.AK47);
        break;
      }
      case PlayerType.COUNTER_TERRORIST: {
        player = new CounterTerrorist(Weapon.M4A4);
        break;
      }
      default: {
        throw new Error("Invalid player type");
      }
    }

    this.playerMap.set(type, player);

    return player;
  }
}
