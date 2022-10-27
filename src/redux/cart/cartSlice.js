import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    test: null,
  },
  reducers: {
    addItem: (state, action) => {
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
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
