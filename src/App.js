import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {  getUserDataThunk } from './Redux/auth-reducer';
import { connect } from "react-redux";
import { withRouter } from "./Redux/withrouter";
import { compose } from "redux";

class App extends Component {

  componentDidMount(){
    this.props.getUserDataThunk();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer {...this.props} />
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/profile"
              element={<ProfileContainer store={this.props.store} />}
            ></Route>
            <Route
              path="/profile/*"
              element={<ProfileContainer store={this.props.store} />}
            ></Route>
            <Route
              path="/dialogs"
              element={<DialogsContainer store={this.props.store} />}
            />
            <Route
              path="/users"
              element={<UsersContainer store={this.props.store} />}
            />
            <Route
              path="/login"
              element={<LoginContainer store={this.props.store} />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
   connect(null, {getUserDataThunk}))
   (App);
