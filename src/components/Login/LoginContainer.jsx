import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signInThunkCreator} from './../../Redux/auth-reducer'
import Login from './Login';

class LoginContainer extends Component {
    render() {
        return (
            <div>
                <Login {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state)=> {
    return {
         state : state,
    }
}

export default connect(
    mapStateToProps,
    {signIn: signInThunkCreator}
)(LoginContainer);