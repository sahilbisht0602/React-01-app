import { useState } from "react";
import { filterResturant } from "../constatnt";
const Search = (props) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search here"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="btn-search"
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
