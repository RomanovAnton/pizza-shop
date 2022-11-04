import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilterSliceState } from "../filters/types";
import { PizzaItem } from "./types";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

const fetchPizzas = createAsyncThunk<PizzaItem[], IFilterSliceState>(
  "pizzas/fetchPizzas",
  async ({ curCategory, searchValue, sortParams }) => {
    const category = curCategory > 0 ? `category=${curCategory}` : "";
    const search = searchValue ? `search=${searchValue}` : "";
    const sort = `sortBy=${sortParams.order.replace("-", "")}`;
    const order = sortParams.order.includes("-") ? `order=desc` : `order=asc`;

    const response = await axios.get(
      `${BASE_URL}?${category}&${search}&${sort}&${order}`
    );
    return response.data;
  }
);

export default fetchPizzas;
