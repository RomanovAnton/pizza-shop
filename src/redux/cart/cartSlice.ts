import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = {
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const isExist = state.cartItems.some(
        (item) => item._id === action.payload._id
      );
      if (!isExist) {
        state.cartItems.push(action.payload);
      } else {
        const dubbleIdx = state.cartItems.findIndex(
          (item) => item._id === action.payload._id
        );
        state.cartItems[dubbleIdx].count++;
      }
    },
    incrementCount: (state, action: PayloadAction<string>) => {
      const idxCurElem = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      state.cartItems[idxCurElem].count++;
    },
    decrementCount: (state, action: PayloadAction<string>) => {
      const idxCurElem = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      state.cartItems[idxCurElem].count--;
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    setTotal: (state) => {
      state.totalCount = state.cartItems.reduce(
        (sum, cur) => sum + cur.count,
        0
      );

      state.totalPrice = state.cartItems.reduce(
        (sum, cur) => sum + cur.price * cur.count,
        0
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  incrementCount,
  decrementCount,
  deleteItem,
  setTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
