import "./FilterByCategory.scss";
import { useAppSelector, useAppDispatch } from "../../StoreHooks/StoreHooks";
import { useEffect, useState } from "react";
import { changeFilterByCategory } from "../../Store/Slices/FilterAndSearchSlice";
import { TypeCategory } from "../../TypeCategory/TypeCategory";

export const FilterByCategory = () => {
  const books = useAppSelector((state) => state.book_slice.books.library);
  const dispatch = useAppDispatch();

  const [categoryBooks, setCategoryBooks] = useState<string[]>([]);

  /*====adding the genres to filter dynamically without repetition of data====*/
  useEffect(() => {
    const category = new Set<string>();

    books.map((data) => {
      category.add(data.book.genre);
    });

    const uniqueCategoryArray = Array.from(category);

    setCategoryBooks(uniqueCategoryArray);
  }, []);

  return (
    <form className="form-category">
      <p>filter by category</p>

      <select
        onChange={(e) => dispatch(changeFilterByCategory(e.target.value))}
      >
        <option value={TypeCategory.all}>All</option>

        {categoryBooks &&
          categoryBooks.map((data, index) => {
            return (
              <option value={data} key={index}>
                {data}
              </option>
            );
          })}
      </select>
    </form>
  );
};
