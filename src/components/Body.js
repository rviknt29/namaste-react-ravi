import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resList.filter((res) => res.rating > 4);
            console.log(filteredResList);
            setListOfRestaurents(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurantCard key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
