import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Shimmer from "./Shimmer";
import ResCard, { EnhancedResCard } from "./ResCard";
import { menuApi, Api } from "../utills";
import { AppContext, MyContext } from "../App";
import { Link } from "react-router-dom";

function Body() {
  const { AppResList, setAppResList } = useContext(AppContext);
  const { FilterList, setFilterList } = useContext(MyContext);

  const VegResCard = EnhancedResCard(ResCard);

  useEffect(() => {
    findRes();
  }, []);

  async function findRes() {
    const res = await fetch(Api);
    const req = await res.json();

    const resList =
      req?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setFilterList(resList);
    setAppResList(resList);
  }

  const handleRating = () => {
    setFilterList(
      FilterList.filter((obj) => {
        return obj?.info?.avgRating > 4.2;
      })
    );
  };
  const handleGo = () => {
    console.log("button clicked");
    setFilterList(
      AppResList.filter((obj) => {
        return true;
      })
    );
  };
  return AppResList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <button
          className="rating-btn"
          onClick={() => {
            handleRating();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="body">
        <div className="res-cont">
          {FilterList.length === 0 ? (
            <div className="main-cont">
              <div className="img-con">
                <img
                  className="dog-img"
                  src="https://t4.ftcdn.net/jpg/01/64/97/85/360_F_164978534_Nt7VabnGZa7XqyLKvu9ZWIjuP2AIwlH9.jpg"
                  alt="not found"
                />
              </div>
              <div className="dog-tit">
                <h1>
                  {" "}
                  <b style={{ color: "red", textAlign: "center" }}>
                    OOps Restraunt Not Found!!!
                  </b>
                </h1>
                <button
                  className="dog-btn"
                  onClick={() => {
                    handleGo();
                  }}
                >
                  {" "}
                  Go Home
                </button>
              </div>
            </div>
          ) : (
            FilterList.map((obj) => {
              const id=obj?.info?.id
              return (
                <Link  className="link "to={"Restaurant/" + id} key={obj?.info?.id}>
                  <ResCard  resData={obj} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Body;
