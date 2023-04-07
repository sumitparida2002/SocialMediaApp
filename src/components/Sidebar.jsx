import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/users";
import useAuth from "../hooks/useAuth";

import { ReactComponent as Avatar } from "../assets/avatar.svg";
import "./Sidebar.css";

const Sidebar = ({ showModal }) => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const handleLogOut = async () => {
    const response = await logout({ userName: auth.user });
    console.log(response);
    setAuth({ user: null, accessToken: null });
    navigate("/login");
  };
  const userName = "Profile";
  return (
    <div className="sidebar">
      <div className="header1">
        <img src="https://i.imgur.com/zqpwkLQ.png" className="profile" />
      </div>
      <a className="">Home</a>
      <a className="">Explore</a>
      <a className="">Messages</a>
      <a onClick={showModal} className="">
        Create
      </a>
      <a href={`/${auth.user}`} className="avatar1">
        <span>
          <Avatar className="avatar-img" />
        </span>
        <span>{auth.user}</span>
      </a>
      <a onClick={handleLogOut} className="logout-btn">
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
