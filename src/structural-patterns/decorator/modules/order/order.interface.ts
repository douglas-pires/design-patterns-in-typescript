export interface Order {
  placeOrder(): Order;
  send(message: string): void;
}
