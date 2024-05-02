import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import MyLocation from "./components/MyLocation";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
    
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Location",
        element: <MyLocation />,
      },
      {
        path: "/Contact",
        element:<Contact/>
      },
      {
        path :"/Restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
