import { Component } from "../common/interfaces/component.interface";
import { Product } from "../product/product.interface";

export interface Box extends Component {
  add(product: Product): void;
  remove(product: Product): void;
  get(index: number): Product | undefined;
}
