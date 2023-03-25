import { useState } from "react";
import { filterResturant } from "../constatnt";
const Search = (props) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className="search-container bg-green-300 mt-5 p-5 shadow-lg">
      <input
        className="p-2 w-[350]"
        type="text"
        placeholder="search here"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="rounded-lg bg-red-300 p-2 mx-5  hover:bg-pink-600"
        onClick={() => {
          //filter restro
          props.filterResturant(searchText);
          // update the UI
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
