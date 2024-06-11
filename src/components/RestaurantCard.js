import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("resData --> ", resData);
  const { name, avgRating, costForTwo, cloudinaryImageId } = resData;

  return (
    <div className="m-4 p-4 w-56 rounded flex flex-col gap-3 text-lg bg-[#f0f0f0] hover:bg-gray-300">
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

// Higher order component - starts
// input -> RestaurentCard ===> RestaurentCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

// Higher order component - ends

export default RestaurantCard;
