import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let onPostchange = (e) => {
    let text = e.target.value;
    props.onChangeTextArea(text);
  };

  let onAddPost = () => {
    props.addPost();
  };

  let postsElement = props.posts.map((e) => (
    <Post id={e.id} key={e.id} message={e.message} likesCount={e.likesCount} />
  ));

  return (
    <div className={s.content}>
      <div>
        <h1>My Posts</h1>
        <h4>Leave your message</h4>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            ref={newPostElement}
            onChange={onPostchange}
            value={props.newPostText}
          ></textarea>
          <div className="py-2">
            <button onClick={onAddPost} className="btn btn-primary me-2">
              Add post
            </button>
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>

        <div>
          <div className={s.posts}>{postsElement}</div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
