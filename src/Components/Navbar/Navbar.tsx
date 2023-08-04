import "./Navbar.scss";
import { useState, useEffect } from "react";
import LogoIcon from "../../Assets/Icons/icons8-react-native.svg";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../StoreHooks/StoreHooks";
import { SearchForm } from "../SearchForm/SearchForm";
import { Bars, BookIcon } from "../IconsSvg/IconSvg";
import { MyListBooksContainer } from "../../Container/MyListBooksContainer/MyListBooksContainer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface FoundBooks {
  title: string;
  cover: string;
}

export const Navbar = () => {
  const myAlertSearch = withReactContent(Swal);

  const [searchBook, setSearchBook] = useState<string>("");
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);

  const books = useAppSelector((state) => state.book_slice.books.library);

  const [foundBooks, setFoundBooks] = useState<FoundBooks[]>([]);

  /*====function in charge of searching for books and storing previous searches====*/
  const searchBooks = () => {
    books
      .filter((data) =>
        data.book.title.toLowerCase().includes(searchBook.toLowerCase())
      )
      .map((searchData) => {
        setFoundBooks([
          ...foundBooks,
          { title: searchData.book.title, cover: searchData.book.cover },
        ]);
      });
  };

  useEffect(() => {
    searchBooks();

    if (foundBooks.length > 0) {
      myAlertSearch.fire({
        title: "your searches",
        html: (
          <div className="found-books">
            {foundBooks.map((found, index) => {
              return (
                <div key={index}>
                  <img src={found.cover} alt="cover" />
                  <h3>{found.title}</h3>
                </div>
              );
            })}
          </div>
        ),
      });
    }
  }, [searchBook]);

  return (
    <>
      {/*====desktop version====*/}
      <header className="navbar-container">
        <div className="logo-container">
          <img src={LogoIcon} alt="logo-icon" />
          <h3>literary linx</h3>
        </div>

        <nav className="nav-menu">
          <SearchForm
            regex={undefined}
            titleButtonSearch="search book"
            placeholder="search for books"
            setSearchData={setSearchBook}
          />

          <NavLink to="">project link</NavLink>

          <button
            className="nav-menu__btn__book"
            onClick={() => setShowList(!showList)}
          >
            <BookIcon colorFill="#eff0ee" />
          </button>
          <MyListBooksContainer showList={showList} />
        </nav>
      </header>

      {/*====mobile version====*/}
      <header className="navbar-mobile">
        <div>
          <div className="logo-container">
            <img src={LogoIcon} alt="logo-icon" />
            <h3>literary linx</h3>
          </div>

          <button onClick={() => setShowMenuMobile(!showMenuMobile)}>
            <Bars colorFill="#eff0ee" />
          </button>
        </div>

        <nav
          className={
            showMenuMobile !== true ? "mobile-menu desactive" : "mobile-menu"
          }
        >
          <SearchForm
            regex={undefined}
            titleButtonSearch="search book"
            placeholder="search for books"
            setSearchData={setSearchBook}
          />

          <div className="mobile-menu-elements">
            <NavLink to="">project link</NavLink>

            <button
              className="mobile-menu-elements__btn__book"
              onClick={() => setShowList(!showList)}
            >
              <BookIcon colorFill="#eff0ee" />
            </button>
          </div>
          <MyListBooksContainer showList={showList} />
        </nav>
      </header>
    </>
  );
};
