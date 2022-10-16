import { AbstractHandler } from "./abstract-handler.handler";

export class OrdersHandler extends AbstractHandler {
  override handle(request: string): string | null {
    if (request === "orders") {
      return `OrdersHandler: Hello, ${request}!`;
    }

    return super.handle(request);
  }
}
