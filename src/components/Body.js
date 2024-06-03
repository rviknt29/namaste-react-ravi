import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestauraent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilteredRestaurent(resListFromAPI);
  };

  const onlineStatus = useOnlineStatus();

  const handleFilterTopRatedRestaurents = () => {
    const filteredResList = listOfRestaurents.filter(
      (res) => res.info.avgRating > 4
    );
    console.log(filteredResList);
    setFilteredRestaurent(filteredResList);
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestauraents = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestauraents);
              setFilteredRestaurent(filteredRestauraents);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={handleFilterTopRatedRestaurents}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestauraent.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={`/restaurants/${restaurent.info.id}`}
          >
            <RestaurantCard resData={restaurent.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
