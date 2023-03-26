import { useContext, useState } from "react";
import { filterResturant } from "../constatnt";
import UserContext from "./utils/UserContext";
import UserContext from "./utils/UserContext";
import CartContext from "./utils/CartContext";
const Search = (props) => {
  const [searchText, setSearchText] = useState();
  const { user, setUser } = useContext(UserContext);

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
      <input
        value={user.name}
        onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value,
          });
        }}
      />
      <input
        className="ml-2"
        value={user.location}
        onChange={(e) => {
          setUser({
            ...user,
            location: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default Search;
