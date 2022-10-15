import { Product as IProduct } from "./product.interface";

export class Product implements IProduct {
  constructor(
    public name: string,
    public basePrice: number,
    public discount: number,
    public taxes: number
  ) {}

  calculatePrice(): number {
    return this.basePrice - this.discount + this.taxes;
  }
}
