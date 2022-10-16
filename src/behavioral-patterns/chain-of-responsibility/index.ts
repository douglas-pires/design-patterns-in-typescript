import { AuthenticationHandler, OrdersHandler } from "./handlers";
import { ProductsHandler } from "./handlers/products.handler";

class Application {
  private authenticationHandler: AuthenticationHandler;
  private ordersHandler: OrdersHandler;
  private productsHandler: ProductsHandler;

  constructor() {
    this.authenticationHandler = new AuthenticationHandler();
    this.ordersHandler = new OrdersHandler();
    this.productsHandler = new ProductsHandler();

    this.authenticationHandler
      .next(this.ordersHandler)
      .next(this.productsHandler);
  }

  public start(request: string): string | null {
    return this.authenticationHandler.handle(request);
  }
}

const app = new Application();

app.start("orders");
