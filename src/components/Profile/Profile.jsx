import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className ={s.content}>
    <div> <img class= {s.hero} src="bali.jpg" alt="bali"></img></div>
    <div><img src="user.png" alt="user"></img> </div>
    <MyPosts/>
  </div>;
}


export default Profile;