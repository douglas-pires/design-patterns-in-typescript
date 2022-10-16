import { Player } from "../base-player";

export class Terrorist implements Player {
  private task = "DIFFUSE BOMB";

  constructor(private weapon: string) {}

  assignWeapon(weapon: string): void {
    this.weapon = weapon;
  }

  mission(): void {
    console.log(`Terrorist Task: ${this.task} | Weapon: ${this.weapon}`);
  }
}
