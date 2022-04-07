import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthMeUserData ,logoutThunk} from '../../Redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {

  
  render() {
    return (
        <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state)=>({
   isAuth : state.auth.isAuth,
   nameUser : state.auth.login
})



export default connect(mapStateToProps,
   {setAuthMeUserData,
     logout: logoutThunk
    }) (HeaderContainer);