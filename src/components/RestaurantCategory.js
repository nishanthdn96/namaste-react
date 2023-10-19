import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ categories, showItems, setShowIndex, idx }) => {
  const handleClick = () => {
    if (showItems === true) {
      setShowIndex(null);
    } else {
      setShowIndex(idx);
    }
  };
  return (
    <div className="">
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div className="">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold  ">
              {categories.title}({categories.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
        </div>

        {showItems && <ItemList items={categories.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
