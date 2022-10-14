import { Gear } from "../gears";
import { AbstractVehicle } from "./abstract-vehicle";

export class Truck extends AbstractVehicle {
  constructor(gear: Gear) {
    super(gear);
  }

  addGear(): void {
    this.gear.handleGear();
  }
}
