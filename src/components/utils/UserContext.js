import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "default name",
    location: "default location",
  },
});

export default UserContext;
