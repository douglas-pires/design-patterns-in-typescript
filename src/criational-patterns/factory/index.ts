import { transportTypes } from "./interfaces/transport.interface";
import { TransportCreator } from "./transport.creator";

class Application {
  start(): void {
    const train = TransportCreator.createTransport(transportTypes.train);

    train.deliver();
  }
}

new Application().start();
