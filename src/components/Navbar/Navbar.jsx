import React from "react";
import s from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
const setActive = ({isActive})=>(isActive? s.active_link : '');

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile"  className={setActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to="/dialogs" className={setActive}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to="/users" className={setActive}>Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
