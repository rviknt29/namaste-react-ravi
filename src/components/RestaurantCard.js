import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData --> ", resData);
  const { name, avgRating, costForTwo, cloudinaryImageId } = resData;

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} Minuts</h4>
    </div>
  );
};

export default RestaurantCard;
