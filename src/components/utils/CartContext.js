import { createContext } from "react";

const cartContext = createContext({
  items: [],
});

export default cartContext;
