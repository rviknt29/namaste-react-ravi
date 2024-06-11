import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 flex gap-8"
        >
          <div className="w-1/5">
            <div className="absolute">
              <button className="py-1 px-3 bg-white text-green-700 font-bold shadow-lg rounded">
                Add
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="rounded" />
          </div>

          <div className="w-4/5">
            <div className="flex flex-col items-start font-semibold">
              <span className="">{item.card.info.name}</span>
              <span>₹{item.card.info.price / 100}</span>
            </div>
            <p className="my-4 text-xs text-left text-slate-600">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
