import {
  Transport,
  TransportTypes,
  transportTypes,
} from "./interfaces/transport.interface";
import { CarTransport } from "./models/car.model";
import { DroneTransport } from "./models/drone.model";
import { TruckTransport } from "./models/truck.model";

export class TransportFactory {
  public static createTransport(transport: TransportTypes): Transport {
    switch (transport) {
      case transportTypes.car:
        return new CarTransport();
      case transportTypes.truck:
        return new TruckTransport();
      case transportTypes.drone:
        return new DroneTransport();
      default:
        throw new Error("Transport not implemented");
    }
  }
}
