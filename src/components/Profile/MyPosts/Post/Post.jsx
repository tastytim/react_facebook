import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://static.fanpage.it/wp-content/uploads/sites/17/2019/12/1540893430_avatar-1200x1200.jpg"
        alt="img"
      />
      <h3>Post {props.id}</h3>
      <div>Like {props.likesCount}</div>
      <p>{props.message}</p>
    </div>
  );
};

export default Post;
