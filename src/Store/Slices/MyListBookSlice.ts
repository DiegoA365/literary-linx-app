import { createSlice } from "@reduxjs/toolkit";

interface List {
  myBooks: any[];
}

const initialState: List = {
  myBooks: [],
};

const MyListBookSlice = createSlice({
  name: "my_list_book_slice",
  initialState: initialState,
  reducers: {
    addBooksToMyList: (state, action) => {
      state.myBooks = [...state.myBooks, action.payload];
    },

    deleteBooksToMyList: (state, action) => {
      state.myBooks = action.payload;
    },
  },
});

export default MyListBookSlice.reducer;
export const { addBooksToMyList, deleteBooksToMyList } =
  MyListBookSlice.actions;
