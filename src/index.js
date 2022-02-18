import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "normalize-css-ultimate/normalize-ultimate.css";
import { BrowserRouter } from "react-router-dom";

const Context = createContext(null);
const user = true;

ReactDOM.render(
  <Context.Provider value={user}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById("root")
);
