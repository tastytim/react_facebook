import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthMeUserData } from '../../Redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {

   
  componentDidMount(){
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}
      )
      .then(resp => {
          if(resp.data.resultCode === 0){
            let {id,email,login} = resp.data.data;
            this.props.setAuthMeUserData(id,email,login);
          }
      });
  }
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



export default connect(mapStateToProps, {setAuthMeUserData}) (HeaderContainer);