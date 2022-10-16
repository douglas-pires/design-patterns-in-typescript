import { Order } from "../../../modules/order";

export class Notifier implements Order {
  constructor(protected order: Order) {}

  public placeOrder(): Order {
    return this;
  }

  public send(message: string): void {
    console.log(`Sending message: ${message}`);

    this.order.send(message);
  }
}
