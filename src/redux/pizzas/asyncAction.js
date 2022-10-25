import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (curCategory) => {
    const category = curCategory > 0 ? `category=${curCategory}` : "";
    const response = await axios.get(`${BASE_URL}${category}`);
    console.log(response);
    return response.data;
  }
);

export default fetchPizzas;
