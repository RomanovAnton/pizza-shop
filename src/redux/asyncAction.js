import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const fetchPizzas = createAsyncThunk("pizzas/fetchPizzas", async (parametr) => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export default fetchPizzas;
