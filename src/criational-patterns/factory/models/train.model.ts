import { Transport } from "../interfaces/transport.interface";

export class DroneTransport implements Transport {
  deliver(): void {
    console.log("Delivering by train");
  }
}
