import { Gear } from "./gear.interface";

export class ManualGear implements Gear {
  handleGear(): void {
    console.log("Manual gear");
  }
}
