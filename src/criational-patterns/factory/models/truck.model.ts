import { Transport } from "../interfaces/transport.interface";

export class TruckTransport implements Transport {
  deliver(): void {
    console.log("Delivering by sea");
  }
}
