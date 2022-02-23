import React, { useState } from "react";
import { createContext } from "react";
import API from "../API";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Context = createContext(null);
const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    Cookies.get("user") ? Cookies.get("user") : false
  );
  const register = async (data) => {
    await API.register(data)
      .then((response) => {
        if (response.status === 201) {
          navigate("/me");
        }
        login(data);
      })
      .catch((e) => {
        if (e.response.status === 422) {
          console.log(e.response.data.errors.email);
        }
        if (e.response.status === 404) {
          console.log("API url error");
        }
      });
  };
  const login = (data) => {
    API.login(data)
      .then((response) => {
        if (response.status === 200) {
          setUser(true);
          Cookies.set("user", response.data.token);
          navigate("/me");
        }
      })
      .catch((e) => {
        if (e.response.status === 422) {
          console.log(e.response.data.errors.email);
        }
        if (e.response.status === 404) {
          console.log("API url error");
        }
      });
  };
  const getUserData = () => {
    API.getUserData(Cookies.get('user'))
      .then((response) => {
        if (response.status === 200) {
          console.log("success");
          console.log(response.data);
          return response;
        }
      })
      .catch((e) => {
        if (e.response.status === 422) {
          console.log(e.response.data.errors.email);
        }
        if (e.response.status === 404) {
          console.log("API url error");
        }
      });
  };
  const patchUserData = (data) => {
    API.patchUserData(data)
      .then((response) => {
        if (response.status === 200) {
          getUserData();
          console.log("patched");
        }
      })
      .catch((e) => {
        if (e.response.status === 422) {
          console.log(e.response.data.errors.email);
        }
        if (e.response.status === 404) {
          console.log("API url error");
        }
      });
  };
  const logout = () => {
    setUser(false);
    Cookies.remove("user");
  };
  return (
    <Context.Provider
      value={{ user, login, register, logout, patchUserData, getUserData }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
