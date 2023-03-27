import { useContext } from "react";
import FoodCard from "./FoodCard";
import cartContext from "./utils/CartContext";
import { useSelector } from "react-redux";
const Cart = () => {
  const item = useSelector((store) => store.cart.items);
  return (
    <>
      <h1 className="text-4xl">Cart component-{item.length}</h1>
      <div className="flex">
        {item.map((item) => (
          <FoodCard {...item.card.info} />
        ))}
      </div>
    </>
  );
};

export default Cart;
