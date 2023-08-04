import "./HomePage.scss";
import { FilterByCategory } from "../../Components/FilterByCategory/FilterByCategory";
import { FilterByPages } from "../../Components/FilterByPages/FilterByPages";
import { Navbar } from "../../Components/Navbar/Navbar";
import { BooksContainer } from "../../Container/BooksContainer/BooksContainer";

export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="home-page">
        <div className="filter-container">
          <FilterByPages />
          <FilterByCategory />
        </div>

        <section className="home-data">
          <BooksContainer />
        </section>
      </main>
    </>
  );
};
