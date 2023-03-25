import { IMG_CDN } from "../constatnt";

const ResturantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card w-[300] bg-yellow-100 mx-5 my-2 border-radius rounded-lg hover:shadow-lg hover:bg-yellow-300">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      <h5>{lastMileTravelString}</h5>
    </div>
  );
};

export default ResturantCard;
