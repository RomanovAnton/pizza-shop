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
      state.items = action.payload;
      state.status = "resolved";
      state.error = "";
    },
    [fetchPizzas.rejected]: (state) => {
      state.error = "ServerError";
    },
  },
});

export default pizzasSlice.reducer;
