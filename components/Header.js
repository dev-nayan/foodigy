import React, { useContext, useState } from "react";
import ReactDom from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AppContext ,MyContext} from "../App";

const Header = () => {
  const [Value, setValue] = useState("search");
  const{ AppResList, setAppResList }=useContext(AppContext)
  const{ FilterList, setFilterList }=useContext(MyContext)

  const handleSearch = () => {
    {
      if (!Value) {
        console.log({ Value });

        setFilterList([]);
      } else {
        setFilterList(
          AppResList.filter((obj) => {
            const myData = obj?.info;
            const res = Value.toLowerCase();
            setValue("");
            return myData.name.toLowerCase().includes(res);
          })
        );
        // setResList(FilterList);
      }
    }
  };

  return (
    <div className="header">
      <div className="logo-cont">
        <img
          className="logo"
          src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg"
          alt="image not found"
        />
      </div>
      <div className="search-tab">
        <input
          type="text"
          value={Value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <div className="nav-items">
        <ul>
          <li className="Li">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li className="Li">
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>
          </li>
          <li className="Li"> <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link></li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
