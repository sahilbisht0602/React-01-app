import { useState } from "react";
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
        onClick={(e) => {
          //filter restro
          const data = props.filterResturant(searchText);
          // update the UI
          props.updateResturantHandler(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
