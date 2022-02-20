import React, { useState } from "react";
import { createContext } from "react";
import API from "../API";

export const Context = createContext(null);
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const test = () => {
    setUser(!user);
    alert(user);
  };
  const login = () => {
    API.login({
      email: "test1@example.com",
      password: "string",
    });
  };
  return (
    <Context.Provider value={{ user, test, login }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
