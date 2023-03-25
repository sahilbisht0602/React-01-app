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
    <div className="resturant-detail">
      <div>
        <h1>Resturant name - {resturant.name}</h1>
        <h2>Area name - {resturant.areaName}</h2>
        <h2>Rating - {resturant.avgRating}</h2>
        <h2>City - {resturant.city}</h2>
        <img src={IMG_CDN + resturant.cloudinaryImageId} />
      </div>
      <div className="Menu-item">
        <h1>
          Today's Menu
          <ul className="list-items">
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
