import React from "react";

import "./UserPosts.css";
const UserPosts = ({ posts }) => {
  console.log(posts);
  return (
    <div className="posts-container">
      <div className="grid-container">
        {posts[0].map((post) => {
          console.log(post);
          return (
            <img src={post.imageUrl} className="userPost" key={post._id} />
          );
        })}
      </div>
    </div>
  );
};

export default UserPosts;
