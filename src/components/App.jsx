import React, {useContext} from "react";
import Login from "../pages/Login/Login";
import Navbar from "./Navbar";
import CustomRoutes from "../routes/CustomRoutes";
import {Context} from "../context/Context";

function App() {
const {test} = useContext(Context);
  return (
    <>
      <Navbar/>
      <CustomRoutes/>
      <button onClick={test}>Нажми</button>
    </>
  );
}

export default App;
