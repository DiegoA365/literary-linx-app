import {
  addBooksToMyList,
  deleteBooksToMyList,
} from "../../Store/Slices/MyListBookSlice";
import { useAppDispatch, useAppSelector } from "../../StoreHooks/StoreHooks";
import "./Book.scss";

interface BookProps {
  cover: string;
  title: string;
  author: string;
  typeAction: boolean;
  id: number;
}

export const Book = ({ cover, title, author, id, typeAction }: BookProps) => {
  const myListBook = useAppSelector(
    (state) => state.my_list_book_slice.myBooks
  );
  const dispatch = useAppDispatch();

  /*====add books to my list====*/
  const addNewBooksToMyList = (
    cover: string,
    title: string,
    author: string,
    id: number
  ) => {
    /*====if there are no repeated books add them to the list====*/
    const isRepeated = myListBook.some((book) => book.id === id);

    if (!isRepeated) {
      dispatch(
        addBooksToMyList({
          id: id,
          cover: cover,
          title: title,
          author: author,
        })
      );
    }
  };

  const deleteBook = (id: number) => {
    const newMyListBook = myListBook.filter((data) => data.id !== id);

    dispatch(deleteBooksToMyList(newMyListBook));
  };

  return (
    <div className="book-card">
      <div className="book-data">
        <img src={cover} alt="cover" />

        <div className="book-info">
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
      </div>
      {typeAction === true ? (
        <button onClick={() => addNewBooksToMyList(cover, title, author, id)}>
          add to the list
        </button>
      ) : (
        <button onClick={() => deleteBook(id)}>delete book</button>
      )}
    </div>
  );
};
