import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchPizzas from "./asyncAction";
import { PizzaItem, PizzaSliceState } from "./types";

const initialState: PizzaSliceState = {
  items: [],
  status: "",
  error: "",
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,

  reducers: {
    setItem: (state, action: PayloadAction<PizzaItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<PizzaItem[]>) => {
        state.items = action.payload;
        state.status = "resolved";
        state.error = "";
      }
    );
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.error = "ServerError";
    });
  },
});

export default pizzasSlice.reducer;
