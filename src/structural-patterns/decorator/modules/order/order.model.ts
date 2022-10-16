import { Order as IOrder } from "./order.interface";

export class Order implements IOrder {
  public placeOrder(): Order {
    console.log("Order placed");

    return this;
  }

  public send(message: string): void {
    console.log(`Sending message: ${message}`);
    console.log("Customer notified");
  }
}
