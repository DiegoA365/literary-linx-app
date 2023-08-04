import { createSlice } from "@reduxjs/toolkit";
import { TypeCategory } from "../../TypeCategory/TypeCategory";

const initialState = {
  valueFilterByCategory: TypeCategory.all,
  valueFilterByPages: 0,
};

const FilterAndSearchSlice = createSlice({
  name: "filter_and_search_slice",
  initialState: initialState,
  reducers: {
    changeFilterByCategory: (state, action) => {
      state.valueFilterByCategory = action.payload;
    },

    changeValueFilterByPages: (state, action) => {
      state.valueFilterByPages = action.payload;
    },
  },
});

export default FilterAndSearchSlice.reducer;

export const { changeFilterByCategory, changeValueFilterByPages } =
  FilterAndSearchSlice.actions;
