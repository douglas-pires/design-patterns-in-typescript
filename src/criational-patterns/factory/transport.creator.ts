import {
  Transport,
  TransportTypes,
  transportTypes,
} from "./interfaces/transport.interface";
import { BusTransport } from "./models/bus.model";
import { ShipTransport } from "./models/ship.model";
import { TrainTransport } from "./models/train.model";

export class TransportCreator {
  public static createTransport(transport: TransportTypes): Transport {
    switch (transport) {
      case transportTypes.bus:
        return new BusTransport();
      case transportTypes.ship:
        return new ShipTransport();
      case transportTypes.train:
        return new TrainTransport();
      default:
        throw new Error("Transport not implemented");
    }
  }
}
