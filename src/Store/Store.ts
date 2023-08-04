import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./Slices/BookSlice";
import FilterAndSearchSlice from "./Slices/FilterAndSearchSlice";
import MyListBookSlice from "./Slices/MyListBookSlice";

export const store = configureStore({
  reducer: {
    book_slice: BookSlice,
    filter_and_search_slice: FilterAndSearchSlice,
    my_list_book_slice: MyListBookSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
