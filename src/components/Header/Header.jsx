import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="img.png" alt="img"></img>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <span className="mx-2">{props.nameUser}</span>
        ) : (
          <NavLink className="mx-2" to={"/login"}>
            Login
          </NavLink>
        )}
        <NavLink to={"/logout"} onClick={props.logout}>
          Logout
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
