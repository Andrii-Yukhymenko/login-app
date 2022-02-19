import React, {createContext, useState} from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "normalize-css-ultimate/normalize-ultimate.css";
import { BrowserRouter } from "react-router-dom";
import API from './API'

export const Context = createContext(null);
// const [user, setUser] = useState(null);
let user = false;
const test = () => {
  console.log('hello')
}
const login = () => {
  API.login({
    "email": "test1@example.com",
    "password": "string"
  })
}

ReactDOM.render(
  <Context.Provider value={{user, login, test}}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById("root")
);
