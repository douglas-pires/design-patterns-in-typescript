import { Transport } from "../interfaces/transport.interface";

export class CarTransport implements Transport {
  deliver(): void {
    console.log("Delivering by car");
  }
}
