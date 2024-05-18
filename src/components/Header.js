import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setNameReact] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={'/'}>Home</Link> </li>
          <li><Link to={'about'}>About Us</Link> </li>
          <li><Link to={'contact'}>Contact Us</Link> </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setNameReact("logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
