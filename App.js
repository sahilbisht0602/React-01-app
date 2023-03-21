import React from "react";
import ReactDOM from "react-dom/client";

const Test = () => {
  return <div>this is main div</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Test />);
