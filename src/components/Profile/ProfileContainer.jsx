import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../Redux/profile-reducer';
import { withRouter } from '../../Redux/withrouter';


class ProfileContainer extends Component {
  componentDidMount(){
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0${this.props.location.pathname}`
      )
      .then((resp) => {
          this.props.setUserProfile(resp.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props}  />
      </div>
    );
  }
}

let mapStateToProps = (state)=>({
   profile : state.profilePage.profile
})

export default connect ( mapStateToProps,{setUserProfile} )(withRouter(ProfileContainer));
