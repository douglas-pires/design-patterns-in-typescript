import { Product } from "../product/product.interface";
import { Box as IBox } from "./box.interface";

export class Box implements IBox {
  private products: Product[] = [];

  constructor(public name: string) {}

  add(product: Product): void {
    this.products.push(product);
  }

  remove(product: Product): void {
    const index = this.products.indexOf(product);

    this.products.splice(index, 1);
  }

  get(index: number): Product | undefined {
    return this.products[index];
  }

  calculatePrice(): number {
    return this.products.reduce((sum, product) => {
      return sum + product.calculatePrice();
    }, 0);
  }
}
