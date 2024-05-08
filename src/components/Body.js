import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const resListFromAPI =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurents(resListFromAPI);
  };

  const handleFilterTopRatedRestaurents = () => {
    const filteredResList = listOfRestaurents.filter(
      (res) => res.info.avgRating > 4
    );
    console.log(filteredResList);
    setListOfRestaurents(filteredResList);
  };

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={handleFilterTopRatedRestaurents}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
