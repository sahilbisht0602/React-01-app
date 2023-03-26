import { IMG_CDN } from "../constatnt";
const FoodCard = ({ name, category, imageId, price }) => {
  return (
    <div className="card w-[300] bg-yellow-100 mx-5 my-2 border-radius rounded-lg hover:shadow-lg hover:bg-yellow-300">
      <img src={IMG_CDN + imageId} />
      <h2>{name}</h2>
      <h4>{category}</h4>
      <h3>{price / 100}</h3>
    </div>
  );
};

export default FoodCard;
