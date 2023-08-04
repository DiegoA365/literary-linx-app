import { Book } from "../../Components/Book/Book";
import { useAppSelector } from "../../StoreHooks/StoreHooks";
import "./MyListBooksContainer.scss";

interface ListProps {
  showList: boolean;
}

export const MyListBooksContainer = ({ showList }: ListProps) => {
  const myListBook = useAppSelector(
    (state) => state.my_list_book_slice.myBooks
  );

  return (
    <aside
      className="mylistbook-container"
      style={showList !== true ? { top: "-100%" } : undefined}
    >
      <h3>list of added books ({myListBook.length})</h3>

      {myListBook &&
        myListBook.map((data, index) => {
          return (
            <Book
              typeAction={false}
              key={index}
              cover={data.cover}
              title={data.title}
              author={data.author}
              id={data.id}
            />
          );
        })}
    </aside>
  );
};
