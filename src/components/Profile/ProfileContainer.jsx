import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileThunkCreator } from "../../Redux/profile-reducer";
import { withRouter } from "../../Redux/withrouter";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    let path = this.props.location.pathname.split("/");
    let userId = path[2];
    if (!userId) {
      userId = 2;
    }
    this.props.getProfileThunkCreator(userId);
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
});

export default compose(
  connect(mapStateToProps,
  {getProfileThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
