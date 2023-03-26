import { ALL_RESTRO, resturantList } from "../constatnt";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
import useResturant from "./utils/useResturant";
import { filterResturant } from "../constatnt";

const Body = () => {
  const [filteredRestaurant, isLoading, filterResturantHandler] =
    useResturant();
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline Please check you network connection</h1>;
  }

  if (!filterResturant) return;

  if (filteredRestaurant?.length < 1) {
    return (
      <>
        <Search filterResturant={filterResturant} />
        <h1>Sorry no data search again!!</h1>
      </>
    );
  }
  return isLoading ? (
    <Shimmer />
  ) : (
    <>
      <Search filterResturant={filterResturantHandler} />
      <div className="flex flex-wrap">
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
