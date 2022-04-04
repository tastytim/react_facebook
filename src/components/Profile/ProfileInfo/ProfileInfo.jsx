import React from "react";
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      
      <p>{props.profile.fullName}</p>
      <p>{props.profile.userId}</p>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
