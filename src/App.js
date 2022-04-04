import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer {...props} />
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/profile"
            element={<ProfileContainer store={props.store} />}
          ></Route>
          <Route
            path="/profile/*"
            element={<ProfileContainer store={props.store} />}
          ></Route>
          <Route
            path="/dialogs"
            element={<DialogsContainer store={props.store} />}
          />
          <Route
            path="/users"
            element={<UsersContainer store={props.store} />}
          />
          <Route path="/login" element={<LoginContainer store={props.store} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
