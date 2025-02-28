import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");

  useEffect(() => {
  }, [loginLogoutBtn]);

  const onlineStatus = useNetworkStatus();

  const cartItems = useSelector((store)=>store.cart.items);;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100">
      <img className="w-56" src={APP_LOGO}></img>
      <div className=" flex items-center"> 
      {/* we have used flex items-center to make things center from top and bottom */}
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus? "✅": "❌"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
          <Link to="/cart">Cart- {cartItems.length}</Link>
          </li> 
          <li className="px-4">{loggedInUser}</li>

          <button
            className="login-btn"
            onClick={() => {
              loginLogoutBtn === "Login"
                ? setLoginLogoutBtn("Logout")
                : setLoginLogoutBtn("Login");
            }}
          >
            {loginLogoutBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
