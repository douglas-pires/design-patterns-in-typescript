import { Gear } from "../gears";

export abstract class AbstractVehicle {
  constructor(public gear: Gear) {}

  abstract addGear(): void;
}
