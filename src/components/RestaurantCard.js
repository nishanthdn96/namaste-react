import { CDN_URL } from "../utils/constants";

const RestaurantCards = ({ resObj }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resObj.info;
  const cuisinesText = cuisines.join(", ");
  const truncatedCuisine =
    cuisinesText.length > 25 ? cuisinesText.slice(0, 25) + "..." : cuisinesText;
  const restroName = name.length > 20 ? name.slice(0, 20) + "..." : name;
  return (
    <div className="m-4 p-4 w-[260px] rounded-lg min-h-[360px] bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg w-[240px] h-[180px] object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h4 className="font-bold py-2 text-lg">{restroName}</h4>
      <h4 className="font-extralight py-2">{costForTwo}</h4>
      <h4 className="font-serif py-2">{truncatedCuisine}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export const offerCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-4 p-[1px] rounded-lg">
          {props.resObj.info.aggregatedDiscountInfoV3.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
