import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://static.fanpage.it/wp-content/uploads/sites/17/2019/12/1540893430_avatar-1200x1200.jpg"
        alt=""
      />
      post 1
      <div>
        Like
      </div>
    </div>
  );
};

export default Post;
