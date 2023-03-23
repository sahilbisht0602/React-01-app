import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constatnt";

const ResturantMenu = () => {
  const { id } = useParams();
  const [resturant, setResturant] = useState(null);
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getResturantData();
  }, []);

  async function getResturantData() {
    const response = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.69217&lng=77.298004&restaurantId=${id}&submitAction=ENTER`
    );
    const data = await response.json();
    setMenu(
      data.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
        (menuItem) => {
          return menuItem.card.info.name;
        }
      )
    );
    setResturant(data.data.cards[0].card.card.info);
  }

  if (!resturant) return;
  return (
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
