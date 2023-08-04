import "./FilterByPages.scss";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../StoreHooks/StoreHooks";
import { changeValueFilterByPages } from "../../Store/Slices/FilterAndSearchSlice";

export const FilterByPages = () => {
  const books = useAppSelector((state) => state.book_slice.books.library);
  const dispatch = useAppDispatch();

  const [pages, setPages] = useState<number[]>([]);
  const [inputPages, setInputPages] = useState<number>(0);

  /*====adding to a new array the number of pages to filter dynamically====*/
  useEffect(() => {
    const updatedPages = books.map((data) => data.book.pages);
    dispatch(changeValueFilterByPages(inputPages));
    setPages(updatedPages);
  }, [inputPages]);

  return (
    <form className="form-pages">
      <p>filter by pages ({inputPages})</p>

      {/*====requesting the minimum and maximum value of the array of numbers====*/}
      <input
        onChange={(e) => setInputPages(Number.parseInt(e.target.value))}
        max={Math.max.apply(null, pages)}
        min={Math.min.apply(null, pages)}
        type="range"
      />
    </form>
  );
};
