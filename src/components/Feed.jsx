import React, { useEffect, useLayoutEffect, useState } from "react";

// import Image from "./Image";
import "./Feed.css";
import Post from "./Post";
import { getPosts } from "../actions/posts";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const results = await getPosts();
      setPosts(results);
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </div>
  );
};

export default Feed;
