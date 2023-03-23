import { IMG_CDN } from "../constatnt";

const ResturantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      <h5>{lastMileTravelString}</h5>
    </div>
  );
};

export default ResturantCard;
