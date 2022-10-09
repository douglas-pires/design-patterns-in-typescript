import { Transport } from "../interfaces/transport.interface";

export class ShipTransport implements Transport {
  deliver(): void {
    console.log("Delivering by sea");
  }
}
