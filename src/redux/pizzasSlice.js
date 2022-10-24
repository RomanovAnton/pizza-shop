import { createSlice } from "@reduxjs/toolkit";
import fetchPizzas from "./asyncAction";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    items: [],
    status: "",
    error: "",
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload.slice(0, 10);
      state.error = "";
    },
    [fetchPizzas.rejected]: (state) => {
      state.error = "ServerError";
    },
  },
});

export const {} = pizzasSlice.actions;
export default pizzasSlice.reducer;
