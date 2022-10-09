import { Transport } from "../interfaces/transport.interface";

export class TrainTransport implements Transport {
  deliver(): void {
    console.log("Delivering by train");
  }
}
