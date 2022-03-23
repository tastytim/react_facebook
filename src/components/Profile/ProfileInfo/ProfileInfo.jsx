import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <img className={s.hero} src="bali.jpg" alt="bali"></img>
      <div>
        <img src="user.png" alt="user"></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
