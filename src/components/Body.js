import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestauraent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("listOfRestaurents --> ", listOfRestaurents);

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
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-black"
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
            className="px-4 py-1 rounded border shadow-md bg-green-100 m-4"
          >
            Search
          </button>
          <button
            onClick={handleFilterTopRatedRestaurents}
            className="px-4 py-1 rounded border shadow-md bg-gray-100"
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        {filteredRestauraent.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={`/restaurants/${restaurent.info.id}`}
            className="m-0 p-0"
          >
          {/* if the restaurent is promoted then add a promoted label to it - avgRating */}
            <RestaurantCard resData={restaurent.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
