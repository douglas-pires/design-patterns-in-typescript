import { Box } from "./modules/box";
import { Product } from "./modules/product";

class Application {
  start() {
    const box = new Box("Box 1");

    const product1 = new Product("Product 1", 100, 10, 20);
    const product2 = new Product("Product 2", 200, 20, 30);
    const product3 = new Product("Product 3", 300, 30, 40);

    box.add(product1);
    box.add(product2);
    box.add(product3);

    console.log(box.calculatePrice());
  }
}

const app = new Application();

app.start();
