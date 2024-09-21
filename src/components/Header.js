import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import useNetworkStatus from "../utils/useNetworkStatus";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");

  useEffect(() => {
  }, [loginLogoutBtn]);

  const onlineStatus = useNetworkStatus();

  return (
    <div className="header-class">
      <img className="img-class" src={APP_LOGO}></img>
      <div className="header-list">
        <ul>
          <li>
            Online Status : {onlineStatus? "✅": "❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
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
