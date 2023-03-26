import { useContext } from "react";
import { IMG_CDN } from "../constatnt";
import UserContext from "./utils/UserContext";
import UserContext from "./utils/UserContext";
const ResturantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card w-[300] bg-yellow-100 mx-5 my-2 border-radius rounded-lg hover:shadow-lg hover:bg-yellow-300">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      <h5>{lastMileTravelString}</h5>
      <h3>{user.name}</h3>
      <h3>{user.location}</h3>
    </div>
  );
};

export default ResturantCard;
