import Cookies from "js-cookie";
import { useContext } from "react";
import { Context } from "../index";

export const useAuth = () => {
  const { user } = useContext(Context);
  return user;
};
