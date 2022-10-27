import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const fetchPizzas = createAsyncThunk(
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
