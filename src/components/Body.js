import { resturantList } from "../constatnt";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

const filterResturant = (searchText, restaurant) => {
  const filterData = restaurant.filter((restro) =>
    restro.data.name.includes(searchText)
  );
  return filterData;
};
const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurant, setResturant] = useState(resturantList);
  return (
    <>
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
            const data = filterResturant(searchText, restaurant);
            // update the UI
            setResturant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="resturant-list">
        {restaurant.map((restaurant) => {
          return (
            <ResturantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
