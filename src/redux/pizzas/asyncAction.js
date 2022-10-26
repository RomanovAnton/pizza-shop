import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async ({ curCategory, searchValue }) => {
    const category = curCategory > 0 ? `category=${curCategory}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    const response = await axios.get(`${BASE_URL}${category}${search}`);
    return response.data;
  }
);

export default fetchPizzas;
