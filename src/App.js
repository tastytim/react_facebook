import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
                store={props.store}
              />
            }
          />

          <Route
            path="/dialogs"
            element={
              <DialogsContainer
              store={props.store}
              />
            }
          />
          <Route
            path="/users"
            element={
              <UsersContainer
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
