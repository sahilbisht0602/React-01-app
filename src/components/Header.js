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
  return (
    <div className="header">
      <Title />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
