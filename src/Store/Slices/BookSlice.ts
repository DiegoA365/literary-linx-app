import Books from "../../Json/books.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: Books,
};

const BookSlice = createSlice({
  name: "book_slice",
  initialState: initialState,
  reducers: {},
});

export default BookSlice.reducer;
