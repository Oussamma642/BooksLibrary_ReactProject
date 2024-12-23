import { useState } from "react";
import Svg from "./Svg";

function BookCategory({ OnSearch }) {
  
  const [query, setQuery] = useState("");

  function handleOnchange(e) {
    const value = e.target.value;

    setQuery(value);  // Update state with the selected value
    OnSearch(value);  // Pass the updated value to the parent component immediately
  
  }

  return (
    <div className="w-full md:w-1/4">  
      <form>
        <select
          className="bg-gray-900 text-slate-400 border border-gray-300 rounded-3xl px-5 py-3 w-full"
          value={query}
          onChange={handleOnchange}
        >

          <option value="Programming">Search By Category</option>
          <option value="FavBooks" >My Favorite Books</option>
          <option value="Science">Science</option>
          <option value="Romance">Romance</option>
          <option value="History">History</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Detective Stories">Detective Stories</option>
        </select>
      </form>
    </div>
  );
}

export default BookCategory;
