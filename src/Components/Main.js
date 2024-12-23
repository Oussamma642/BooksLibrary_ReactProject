
import { useEffect, useState } from "react";
import BooksCards from "./BooksCards";
import Pagination from "./Pagination";
import SearchForm from "./SearchForm";
import BookCategory from "./BookCategory";

function Main({UserInofs}) {
  const [bookData, setBookData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [params, setParams] = useState("programming");
  const [loading, setLoading] = useState(true);
  const [favBook, setFavBook] = useState(false);
  const [error, setError] = useState(null);

  const BaseURL = "https://openlibrary.org/search.json";
  const FavBooksURL = "http://localhost:3000/api/book";

  async function FetchBooksData() {
    setLoading(true);
    setError(null);
    try {
      
      const respo = favBook
        ? await fetch(FavBooksURL)
        : await fetch(`${BaseURL}?q=${params}`);

      const Data = await respo.json();

      setBookData(()=>
        favBook?
        Data.filter((book)=>book.userID === UserInofs.id):
        Data.docs || []
      );

    } catch (err) {
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchBooksData();
  }, [params, favBook]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = bookData.slice(firstPostIndex, lastPostIndex);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query) => {

    if (query === "FavBooks")
      setFavBook(true);
    else
      setParams(query);
    
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto bg-gray-900 text-white">
      <div className="flex flex-row justify-center mt-4">
      <h1>Books Library</h1>
      </div>
      <div className="container flex flex-col lg:flex-row md:flex-row gap-6  justify-evenly p-10">
        <BookCategory OnSearch={handleSearch}  />
        <SearchForm onSearch={handleSearch} />
      </div>

      {loading && (
        <div className="text-center pr-48">
          <span className="alert alert-success">
            Loading, please wait, it may takes a while...
          </span>
        </div>
      )}

      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && bookData.length === 0 && (
        <div className="text-center text-gray-400">
          No books found. Try a different search query.
        </div>
      )}

      {!loading && bookData.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <BooksCards isFavSection={favBook} currentPost={currentPost} User={UserInofs} />
          </div>
          <div className="mt-4">
            <Pagination
              totalPosts={bookData.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              changePage={changePage}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
