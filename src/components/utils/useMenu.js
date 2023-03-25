import { useState, useEffect } from "react";

const useMenu = (id) => {
  const [resturant, setResturant] = useState([]);
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
      data.data?.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
        (menuItem) => {
          return menuItem.card.info.name;
        }
      )
    );
    setResturant(data.data.cards[0].card.card.info);
  }
  return [resturant, menu];
};

export default useMenu;
