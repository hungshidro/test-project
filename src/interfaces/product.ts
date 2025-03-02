export interface IProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface ICartProduct {
  id: number;
  quantity: number;
  price: number;
  product: IProductData;
}
