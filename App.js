import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export const AppContext = createContext();
export const MyContext = createContext();
const App = () => {
  const [AppResList, setAppResList] = useState([]);
  const [FilterList, setFilterList] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ AppResList, setAppResList }}>
        <MyContext.Provider value={{ FilterList, setFilterList }}>
          <Header />
          <Outlet/>
        </MyContext.Provider>
      </AppContext.Provider>
    </>
  );
};
export default App;
