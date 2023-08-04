import "./BooksContainer.scss";
import { useAppSelector } from "../../StoreHooks/StoreHooks";
import { TypeCategory } from "../../TypeCategory/TypeCategory";
import { useEffect, useState } from "react";
import { Book } from "../../Components/Book/Book";

export const BooksContainer: React.FC = () => {
  const books = useAppSelector((state) => state.book_slice.books.library);
  const filterByCategory = useAppSelector(
    (state) => state.filter_and_search_slice.valueFilterByCategory
  );

  const filterByPages = useAppSelector(
    (state) => state.filter_and_search_slice.valueFilterByPages
  );

  const [newBooks, setNewBooks] = useState<React.ReactElement[]>();

  /*====we filter the books and map them later we store them in a new state to 
  be able to read the length dynamically====*/
  useEffect(() => {
    const filterBooks = books
      .filter(
        (data) =>
          filterByCategory === TypeCategory.all ||
          (data.book.genre === filterByCategory &&
            data.book.pages >= filterByPages)
      )
      .map((b, index) => (
        <Book
          id={b.book.id}
          typeAction={true}
          key={index}
          cover={b.book.cover}
          title={b.book.title}
          author={b.book.author.name}
        />
      ));

    setNewBooks(filterBooks);
  }, [filterByCategory, filterByPages]);

  return (
    <section className="books-container">
      <header className="books-header">
        <div>{newBooks?.length}</div>
        <h3>
          {newBooks && newBooks?.length > 0
            ? "books available"
            : "no books available"}
        </h3>
      </header>

      <div className="book-list">{newBooks}</div>
    </section>
  );
};
