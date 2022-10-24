import { configureStore } from "@reduxjs/toolkit";
import pizzasSlice from "./pizzasSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasSlice,
  },
});
