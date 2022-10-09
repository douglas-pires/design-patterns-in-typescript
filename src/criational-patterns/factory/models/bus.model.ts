import { Transport } from "../interfaces/transport.interface";

export class BusTransport implements Transport {
  deliver(): void {
    console.log("Delivering by bus");
  }
}
