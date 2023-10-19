import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cardSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="m-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 border-gray-200 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 text-left">
              <span className="font-bold">{item.card.info.name}</span>
              <br />
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-left">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative border-gray-200 border-2 h-[160px]">
            <div className="m-2">
              {item.card.info.imageId && (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="rounded-lg object-cover h-[140px] w-full"
                ></img>
              )}
            </div>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 m-2">
              <button
                className="p-1 rounded-lg bg-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
