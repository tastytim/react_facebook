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
import { initializeAppThunk } from "./Redux/app-reducer";
import { connect } from "react-redux";
import { withRouter } from "./Redux/withrouter";
import { compose } from "redux";
import Preloader from "./components/Common/Preloader";

class App extends Component {
  // Download user data
  componentDidMount() {
    this.props.initializeAppThunk();
  }

  render() {
    //  if didn t download
    if (!this.props.initialized) {
      return <Preloader></Preloader>;
    }

    // downloaded data user
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

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized,
});


// compose wraps components in order
export default compose(
  // Component wraps child and return component with router location props
  withRouter,
  // connect function connect to component props from state redux store , and second parametr pass thunk
  connect(mapStatetoProps, { initializeAppThunk })
)(App);
