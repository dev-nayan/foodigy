import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function RestaurantMenu() {
  const [ResMenuList, setResMenuList] = useState(null);
  const param=useParams()
  
  const MenuList = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5090543&lng=77.1916497&restaurantId=${param.resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await res.json();
    setResMenuList(json.data);
  };
  const name = ResMenuList?.cards[0]?.card?.card?.text;
  useEffect(() => {
    MenuList();
  },[]);

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Diet Coke</li>
        <li>Indian Sweets</li>
        <li>North</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
