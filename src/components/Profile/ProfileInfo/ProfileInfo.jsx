import React from "react";
import Preloader from "../../Common/Preloader";
import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }return (
    <div>
      <div>
        <img className={s.hero} src="bali.jpg" alt="bali"></img>
      </div>
      <p>{props.profile.fullName}</p>
      <p>{props.profile.userId}</p> 
    </div>
  );
};

export default ProfileInfo;
