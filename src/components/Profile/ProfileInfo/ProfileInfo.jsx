import React from "react";
import Preloader from "../../Common/Preloader";
import s from "../Profile.module.css";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      
      <p>{props.profile.fullName}</p>
      <p>{props.profile.userId}</p>
    </div>
  );
};

export default ProfileInfo;
