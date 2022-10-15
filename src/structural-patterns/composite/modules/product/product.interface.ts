import { Component } from "../common/interfaces/component.interface";

export interface Product extends Component {
  name: string;
  basePrice: number;
  discount: number;
  taxes: number;
}
