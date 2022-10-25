import { configureStore } from "@reduxjs/toolkit";
import pizzas from "./pizzas/pizzaSlice";
import filters from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    pizzas,
    filters,
  },
});
