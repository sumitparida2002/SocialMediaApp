import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../actions/posts";

import Navbar from "../components/Navbar";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import "./User.css";

const User = () => {
  const [userPosts, setUserPosts] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchUserPosts = async () => {
      const results = await getUserPosts(params);
      setUserPosts(() => [...userPosts, results]);
    };

    fetchUserPosts();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <UserHeader />
      <UserPosts posts={userPosts} />
    </div>
  );
};

export default User;
