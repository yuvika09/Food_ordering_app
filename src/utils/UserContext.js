import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy",
    address: "dummy00@gmail.com",
  },
});

export default UserContext;
