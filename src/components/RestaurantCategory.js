import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/2 bg-gray-100 shadow-lg p-4 gap-6 mb-6">
        {/* Accordian Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-base font-bold">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordian Body */}
        {showItems && (
          <div>
            <ItemsList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
