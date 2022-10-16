import { Player } from "../base-player";

export class CounterTerrorist implements Player {
  private task = "DIFFUSE BOMB";

  constructor(private weapon: string) {}

  assignWeapon(weapon: string): void {
    this.weapon = weapon;
  }

  mission(): void {
    console.log(
      `Counter Terrorist Task: ${this.task} | Weapon: ${this.weapon}`
    );
  }
}
