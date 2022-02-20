import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "normalize-css-ultimate/normalize-ultimate.css";
import { BrowserRouter } from "react-router-dom";
import API from "./API";
import ContextProvider from "./context/Context";

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
