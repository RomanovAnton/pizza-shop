import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
