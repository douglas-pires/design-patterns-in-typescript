import { Gear } from "./gear.interface";

export class AutomaticGear implements Gear {
  handleGear(): void {
    console.log("Automatic gear");
  }
}
