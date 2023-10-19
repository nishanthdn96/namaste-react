import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import logoImg from "../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faPhone,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  useEffect(() => {}, [login]);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("Hello", cartItems);
  return (
    <div className="shadow-sm">
      <div className="w-8/12 mx-auto">
        <div className="flex justify-between m-2">
          <div className="w-16">
            <Link to="/">
              {/* <div className="w-10"> */}
              <img className="w-full" src={logoImg}></img>
              {/* </div> */}
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4 ">
              {/* <li className="px-4">
                Online: {onlineStatus === true ? "✅" : "⛔️"}
              </li> */}

              <li className="px-4 hover:text-orange-500 text-slate-600">
                <FontAwesomeIcon icon={faHome} />
                <Link to="/"> Home</Link>
              </li>
              <li className="px-4 hover:text-orange-500 text-slate-600">
                <FontAwesomeIcon icon={faPhone} />
                <Link to="/contact"> Contact</Link>
              </li>
              <li className="px-4 hover:text-orange-500 text-slate-600">
                <FontAwesomeIcon icon={faInfoCircle} size="1x" />
                <Link to="/about"> About us</Link>
              </li>
              <li className="px-4 font-bold text-xl hover:text-orange-500 text-slate-600">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                <Link to="/cart"> Cart ({cartItems.length})</Link>
              </li>
              {/* <button
                className="login-btn hover:text-orange-500 text-slate-600"
                onClick={() => {
                  login === " Login" ? setLogin(" Logout") : setLogin(" Login");
                }}
              >
                {login}
              </button> */}
              {/* <li className="px-4 font-bold hover:text-orange-500">
                {loggedInUser}
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
