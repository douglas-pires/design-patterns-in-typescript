import { Transport, TransportEnum } from "./interfaces/transport.interface";
import { BusTransport } from "./models/bus.model";
import { ShipTransport } from "./models/ship.model";
import { TrainTransport } from "./models/train.model";

export class TransportCreator {
  public static createTransport(transport: TransportEnum): Transport {
    switch (transport) {
      case TransportEnum.Bus:
        return new BusTransport();
      case TransportEnum.Ship:
        return new ShipTransport();
      case TransportEnum.Train:
        return new TrainTransport();
      default:
        throw new Error("Transport not implemented");
    }
  }
}
