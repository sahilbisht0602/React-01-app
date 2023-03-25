import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constatnt";
import Shimmer from "./Shimmer";
import useMenu from "./utils/useMenu";

const ResturantMenu = () => {
  const { id } = useParams();

  const [resturant, menu] = useMenu(id);

  return resturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex mx-10 mt-7">
      <div className="flex">
        <img
          className="w-[300] h-[300]"
          src={IMG_CDN + resturant.cloudinaryImageId}
        />
        <div className="mx-7">
          <h1>Resturant name - {resturant.name}</h1>
          <h2>Area name - {resturant.areaName}</h2>
          <h2>Rating - {resturant.avgRating}</h2>
          <h2>City - {resturant.city}</h2>
        </div>
      </div>
      <div className=" ml-8">
        <h1>
          <span className="border-b-4 border-indigo-500 text-7xl">
            Today's Menu
          </span>
          <ul className="mt-7 text-lg">
            {menu.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default ResturantMenu;
