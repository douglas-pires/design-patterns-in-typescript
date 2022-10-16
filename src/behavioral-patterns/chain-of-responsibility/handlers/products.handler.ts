import { AbstractHandler } from "./abstract-handler.handler";

export class ProductsHandler extends AbstractHandler {
  override handle(request: string): string | null {
    if (request === "products") {
      return `ProductsHandler: Hello, ${request}!`;
    }

    return super.handle(request);
  }
}
