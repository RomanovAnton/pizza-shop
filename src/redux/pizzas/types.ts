export type PizzaItem = {
  category: number;
  id: string;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
};

export interface PizzaSliceState {
    items: PizzaItem[];
    status: string;
    error: string;
}
