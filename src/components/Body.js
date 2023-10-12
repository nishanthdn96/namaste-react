import RestaurantCards, { offerCard } from "./RestaurantCard";
import resInfo from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const listOfRestaurants = useRestaurantList();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Please check your internet connection.</h1>;
  }

  const RestaurantCardOffer = offerCard(RestaurantCards);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name.includes(searchText);
              });
              console.log(filteredRestaurant);
              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4">
          <button
            className="px-4 py-2 bg-gray-50 m-4 rounded-xl"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (rest) => rest.info.avgRating > 4
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Top rated restaurants.
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {listOfRestaurants.map((rest) => (
          <Link to={`/restaurant/${rest.info.id}`} key={rest.info.id}>
            {rest.info.aggregatedDiscountInfoV3.discountTag ? (
              <RestaurantCardOffer resObj={rest} />
            ) : (
              <RestaurantCards resObj={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
