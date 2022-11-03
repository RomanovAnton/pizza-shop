export type CartItem = {
  category: number;
  id: string;
  _id: string;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
  count: number;
};

export interface CartSliceState {
  cartItems: CartItem[];
  totalCount: number;
  totalPrice: number;
}
