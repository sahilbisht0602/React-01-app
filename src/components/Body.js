import { resturantList } from "../constatnt";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";

let allResturant = [];

const filterResturant = (searchText) => {
  const filterData = allResturant.filter((restro) =>
    restro.data.name.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filterData;
};
const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const updateFilterResturant = (filteredRestaurant) => {
    setFilteredResturant(filteredRestaurant);
  };
  useEffect(() => {
    getResturantData();
  }, []);

  async function getResturantData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setFilteredResturant(data?.data.cards[2]?.data?.data?.cards);
      allResturant = data?.data.cards[2]?.data?.data?.cards;
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  const [filteredRestaurant, setFilteredResturant] = useState(null);
  if (!filterResturant) return;

  if (filteredRestaurant?.length < 1) {
    return (
      <>
        <Search
          updateResturantHandler={updateFilterResturant}
          filterResturant={filterResturant}
        />
        <h1>Sorry no data search again!!</h1>
      </>
    );

    <h1>sorry no result</h1>;
  }
  return isLoading ? (
    <Shimmer />
  ) : (
    <>
      <Search
        updateResturantHandler={updateFilterResturant}
        filterResturant={filterResturant}
      />
      <div className="resturant-list">
        {filteredRestaurant?.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={`resturant/${restaurant.data.id}`}
            >
              <ResturantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
