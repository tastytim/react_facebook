import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileThunkCreator,updateProfileStatusThunkCreator,getProfileStatusThunkCreator } from "../../Redux/profile-reducer";
import { withRouter } from "../../Redux/withrouter";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let path = this.props.location.pathname.split("/");
    let userId = path[2];
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status : state.profilePage.status,
  authorizedUserId : state.auth.userId,
  isAuth : state.auth.isAuth
});

export default compose(
  connect(mapStateToProps,
  {getProfile:getProfileThunkCreator,
    getStatus:getProfileStatusThunkCreator,
    updateStatus:updateProfileStatusThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
