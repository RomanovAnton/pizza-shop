import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState, TypeSortParams } from "./types";

const initialState: IFilterSliceState = {
  curCategory: 0,
  sortParams: { name: "по популярности", order: "-rating" },
  searchValue: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.curCategory = action.payload;
    },
    setSortParams: (state, action: PayloadAction<TypeSortParams>) => {
      state.sortParams = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategory, setSortParams, setSearchValue } =
  filtersSlice.actions;
export default filtersSlice.reducer;
