import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("resData --> ", resData);
  const { name, avgRating, costForTwo, cloudinaryImageId } = resData;

  return (
    <div
      className="m-4 p-4 w-56 rounded flex flex-col gap-3 text-lg bg-[#f0f0f0] hover:bg-gray-300"
    >
      <img
        alt="res-logo"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} Minuts</h4>
    </div>
  );
};

export default RestaurantCard;
