export interface ProductData {
  title: string;
  price: number;
}

export class ProductStructure {
  title: string;
  price: number;

  constructor({ title, price }: ProductData) {
    this.title = title;
    this.price = price;
  }
}
