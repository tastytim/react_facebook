import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className ={s.content}>
    
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        New Post
      </div>
      <div>
        <div className={s.posts}>
          <Post/>
        </div>
      </div>
    </div>
    

   
    
  </div>;
}


export default MyPosts;