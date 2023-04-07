import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as Comment } from "../assets/comment.svg";

import "./Post.css";
import dogImg from "../dogthumb.webp";
import { like } from "../actions/posts";
import { getUserLikes } from "../actions/users";
import useAuth from "../hooks/useAuth";

const Post = ({ imageUrl, postedBy, caption, _id, likes }) => {
  const { auth } = useAuth();
  const userLikes = async () => {
    const response = await getUserLikes({ userName: auth.user });
    let filterLikes = response.likes?.filter((post) => post.like === _id);

    console.log(response);
  };

  const handleLike = async () => {
    const response = await like({ postID: _id, likes: likes });
  };
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={dogImg} className="avatar" alt="avatar" />
        <p className="username">{postedBy}</p>
      </div>
      <div className="post-content">
        <img src={imageUrl} className="content-img" />
      </div>
      <div className="stats">
        <div className="btn-row">
          <button className="like-btn" onClick={userLikes}>
            <Like className="like" />
          </button>
          <Comment />
        </div>
        <p>likes</p>
        <p>username {caption}</p>
        <p>view all comments</p>
        <p>2 days</p>
      </div>
    </div>
  );
};

export default Post;
