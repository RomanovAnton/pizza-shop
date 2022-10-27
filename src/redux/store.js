import { configureStore } from "@reduxjs/toolkit";
import pizzas from "./pizzas/pizzaSlice";
import filters from "./filters/filtersSlice";
import cart from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    pizzas,
    filters,
    cart,
  },
});
