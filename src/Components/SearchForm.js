
import { useState } from "react";
import Svg from "./Svg";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query); // Call onSearch prop when the form is submitted
      setQuery("");
    }
  };

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-2 w-full">
          <Svg />
          <input
            type="text"
            className="bg-transparent outline-none w-full text-sm h-10"
            placeholder="Search For A Book"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update query state on input change
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white px-4 py-2 w-full md:w-auto rounded-3xl"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
