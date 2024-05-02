import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ResCard = ({ resData }) => {
  const myData = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          myData.cloudinaryImageId
        }
      />

      <h3 style={{color:"Red"}}>{myData.name}</h3>
      <h5>
        <FontAwesomeIcon icon={faStar} />
        {myData.avgRating} <b>{myData.sla.deliveryTime} min</b>
      </h5>
      <h5>{myData.cuisines.join(", ")}</h5>

      <h5>
        {myData.areaName} <FontAwesomeIcon icon={faLocationDot} />
      </h5>
    </div>
  );
};
export default ResCard;

export const EnhancedResCard = (ResCard) => {
  return ({props}) => {
    return (
      <>
        <label>Promoted</label>
        <ResCard {...props}/>
      </>
    );
  };
};
