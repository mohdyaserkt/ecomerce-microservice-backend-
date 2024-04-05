export interface ProductData {
  id: string;
  title: string;
  price: number;
}

export class ProductStructure {
  id: string;
  title: string;
  price: number;

  constructor({ id, title, price }: ProductData) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}
