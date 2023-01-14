import {
  TransportTypes,
  transportTypes,
} from "./interfaces/transport.interface";
import { TransportFactory } from "./transport.factory";

/**
 * This way we can use the factory to create different types of transports
 * without having to know how to create them. We just need to know the type
 * of transport we want to create.
 */
class Application {
  constructor(public vehicle: TransportTypes) {}
  start(): void {
    const transport = TransportFactory.createTransport(this.vehicle);

    transport.deliver();
  }
}

new Application(transportTypes.car).start();
