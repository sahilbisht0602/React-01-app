import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartContext from "./utils/CartContext";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <a href="/">
      <img
        className="logo h-28"
        src="http://images.squarespace-cdn.com/content/v1/57afadd3e3df28c4ce9b419c/1488265898063-D5HHHS234NM9V24QM4XL/boulevardlogo.png?format=1500w"
      />
    </a>
  );
};
const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { item } = useContext(cartContext);
  return (
    <div className="header flex items-center justify-between p-2 bg-green-400 shadow-lg">
      <Title />
      <div className="nav-links">
        <ul className="p-2">
          <Link className="mx-4" to={"/"}>
            Home
          </Link>
          <Link className="mx-4" to={"/about"}>
            About
          </Link>
          <Link className="mx-4" to={"/contact"}>
            Contact
          </Link>
          <Link className="mx-4" to={"/cart"}>
            Cart {cartItems.length}
          </Link>
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <button
          onClick={(e) => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={(e) => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Login
        </button>
      )} */}
    </div>
  );
};

export default HeaderComponent;
