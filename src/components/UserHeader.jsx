import React from "react";

import "./UserHeader.css";
import DogImg from "../dogthumb.webp";

const UserHeader = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="img-section">
          <img src={DogImg} className="dp" alt="dp" />
        </div>
        <div className="info-section">
          <div className="username">
            <h1>UserName</h1>
            <button>Message</button>
          </div>
          <div>
            <p className="postno">10 Posts</p>
          </div>
          <div>Description</div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
