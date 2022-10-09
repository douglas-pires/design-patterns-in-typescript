import { TransportEnum } from "./interfaces/transport.interface";
import { TransportCreator } from "./transport.creator";

class Application {
  start(): void {
    const train = TransportCreator.createTransport(TransportEnum.Train);

    train.deliver();
  }
}

new Application().start();
