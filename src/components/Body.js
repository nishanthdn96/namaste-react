import RestaurantCards, { offerCard } from "./RestaurantCard";
import resInfo from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useRestaurantList();
  const [filteredRestaurants, setFilteredRestaurants] =
    useRestaurantList(listOfRestaurants);

  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Please check your internet connection.</h1>;
  }

  const RestaurantCardOffer = offerCard(RestaurantCards);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 shadow-lg">
      <div className="filter flex">
        <div className="search p-4 m-4 flex items-center">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log("eee", e.target.value);
              if (e.target.value === "") {
                setFilteredRestaurants(listOfRestaurants);
              } else {
                setFilteredRestaurants(
                  listOfRestaurants.filter((res) => {
                    const restroName = res.info.name.toLowerCase();
                    return restroName.includes(e.target.value.toLowerCase());
                  })
                );
              }
            }}
          ></input>
        </div>
        <div className="search p-4 m-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-50 m-4 rounded-xl"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((rest) => rest.info.avgRating > 4)
              );
            }}
          >
            Top rated restaurants.
          </button>
          <button
            className="px-4 py-2 bg-gray-50 m-4 rounded-xl"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
            }}
          >
            X
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <lable> User name : </lable>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredRestaurants.map((rest) => (
          <Link to={`/restaurant/${rest.info.id}`} key={rest.info.id}>
            {rest.info?.aggregatedDiscountInfoV3?.discountTag ? (
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
