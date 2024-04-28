import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, rating, time } = resData;

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img alt="res-logo" className="res-logo" src={CDN_URL} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{time}</h4>
    </div>
  );
};

export default RestaurantCard;
