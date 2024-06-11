import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg mb-6">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h2>
      {/* Categories Accordian */}
      {categories.map((category) => (
        <div key={category?.card?.card.title}>
          <RestaurantCategory data={category?.card?.card} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
