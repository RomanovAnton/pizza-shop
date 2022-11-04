export type TCartItem = {
  category: number;
  id: string;
  _id: string;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number;
  title: string;
  types: string;
  count: number;
};

export interface CartSliceState {
  cartItems: TCartItem[];
  totalCount: number;
  totalPrice: number;
}
