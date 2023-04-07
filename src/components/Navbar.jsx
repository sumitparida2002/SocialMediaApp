import React from "react";

import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as DM } from "../assets/dm.svg";
import { ReactComponent as Create } from "../assets/create.svg";
import { ReactComponent as Explore } from "../assets/explore.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sticky">
      <div className="navbar-container">
        <div className="navbar">
          <img src="https://i.imgur.com/zqpwkLQ.png" />
          <input className="search" type="text" placeholder="Search" />
          <div className="btn-ctrl">
            <a href="/">
              <Home />
            </a>
            <a href="">
              <DM />
            </a>
            <a href="">
              <Create />
            </a>
            <a href="">
              <Explore />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
