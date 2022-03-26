import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state}
                dispatch = {props.dispatch}
              />
            }
          />

          <Route
            path="/dialogs"
            element={
              <Dialogs
              state={props.state}
              dispatch = {props.dispatch}
              store={props.store}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
