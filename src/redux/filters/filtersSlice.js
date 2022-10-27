import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    curCategory: 0,
    sortParams: { name: "по популярности", order: "-rating" },
    searchValue: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.curCategory = action.payload;
    },
    setSortParams: (state, action) => {
      state.sortParams = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategory, setSortParams, setSearchValue } =
  filtersSlice.actions;
export default filtersSlice.reducer;
