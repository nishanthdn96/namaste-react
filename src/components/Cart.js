import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-10 m-10">
      <h1 className="text-xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {!cartItems.length && <h1>Cart is Empty. Please add items.</h1>}

        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default Cart;
