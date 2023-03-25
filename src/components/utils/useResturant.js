import { useEffect, useState } from "react";
import { ALL_RESTRO } from "../../constatnt";
let allResturant = [];
const useResturant = () => {
  const [resturant, setResturant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filterResturant = (searchText) => {
    const filterData = allResturant.filter((restro) =>
      restro.data.name.toLowerCase().includes(searchText?.toLowerCase())
    );
    setResturant(filterData);
  };
  useEffect(() => {
    getResturantData();
  }, []);

  async function getResturantData() {
    try {
      const response = await fetch(ALL_RESTRO);
      const data = await response.json();
      setResturant(data?.data.cards[2]?.data?.data?.cards);
      allResturant = data?.data.cards[2]?.data?.data?.cards;
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }
  return [resturant, isLoading, filterResturant];
};
export default useResturant;
