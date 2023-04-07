import React, { useState } from "react";

import Sidebar from "../components/Sidebar.jsx";
import Feed from "../components/Feed.jsx";
import PostModal from "../components/PostModal.jsx";
import "./Home.css";

const Home = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  return (
    <div className="home">
      <Sidebar user={user} showModal={showModal} />
      <div className="main">
        <Feed />
      </div>
      {isModalOpen && <PostModal hideModal={hideModal} />}
    </div>
  );
};

export default Home;
