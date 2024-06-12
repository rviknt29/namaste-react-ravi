import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-24" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 p-4 m-4">
          <li>Online Status: {onlineStatus ? "🟢" : "🟤"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About Us</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setNameReact("logout");
            }}
          >
            {btnNameReact}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
