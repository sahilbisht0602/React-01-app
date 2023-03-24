import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="http://images.squarespace-cdn.com/content/v1/57afadd3e3df28c4ce9b419c/1488265898063-D5HHHS234NM9V24QM4XL/boulevardlogo.png?format=1500w"
      />
    </a>
  );
};
const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-links">
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/"}>Cart</Link>
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
