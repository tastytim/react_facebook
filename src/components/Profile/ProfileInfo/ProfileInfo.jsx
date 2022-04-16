import React from "react";
import Preloader from "../../Common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      
      <p>{props.profile.fullName}</p>
      <p>{props.profile.userId}</p>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
