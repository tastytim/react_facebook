import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {required , maxLengthThunk} from "../../utils/validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";


let maxLengthThunk10 = maxLengthThunk(10);


let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"postMessage"}
        component={TextArea}
        placeholder={"Enter your post.."}
        type="text"
        validate={[required,maxLengthThunk10]}
      ></Field>
      <div className="py-2">
        <button className="btn btn-primary me-2" type="submit">
          Add post
        </button>
        <button className="btn btn-primary">Remove</button>
      </div>
    </form>
  );
};

const ReduxAddPostForm = reduxForm({ form: "addpost" })(AddNewPostForm);

const MyPosts = (props) => {
  let postsElement = props.posts.map((e) => (
    <Post id={e.id} key={e.id} message={e.message} likesCount={e.likesCount} />
  ));

  let onSubmit = (data) => {
    props.addPost(data);
  };

  return (
    <div className={s.content}>
      <div>
        <h1>My Posts</h1>
        <h4>Leave your message</h4>
        <div>
          <ReduxAddPostForm onSubmit={onSubmit} />
        </div>
        <div>
          <div className={s.posts}>{postsElement}</div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
