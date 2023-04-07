import { useLayoutEffect, useState } from "react";
import styles from "./PostModal.module.css";
import { createPost } from "../actions/posts.js";
import useAuth from "../hooks/useAuth";

const PostModal = ({ hideModal }) => {
  const [img, setImg] = useState();
  const { auth } = useAuth();

  useLayoutEffect(() => {
    document.body.style = "overflow-y:hidden";

    return () => {
      document.body.style = "overflow-y:scroll";
    };
  }, []);

  const handleSubmit = async () => {
    const date = new Date();
    await createPost({
      caption: "Whatever",
      imageUrl: img,
      postedBy: auth.user,
      date: date.toJSON().slice(0, 10),
      likes: 10,
      comments: [],
    });
    hideModal();
  };

  return (
    <div id="my-modal" className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={hideModal}>
          &times;
        </span>
        <label>
          Create new post
          {/* <input
            type="file"
            name="my-image"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => setImg(e.target.files[0])}
          /> */}
          <input
            type="text"
            name="my-image"
            autoComplete="off"
            onChange={(e) => setImg(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default PostModal;
