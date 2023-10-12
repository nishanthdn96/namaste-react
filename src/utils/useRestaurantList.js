import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5171428&lng=78.315742&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    const listOfRestaurants =
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(listOfRestaurants);
  };
  return listOfRestaurants;
};

export default useRestaurantList;
