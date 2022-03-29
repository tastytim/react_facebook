import React from "react";
import spinner from "../../assets/spinner.svg";
import s from "./../Users/Users.module.css";

let Preloader = () => {
  return (
    <div className={s.spinner_div}>
      <img className={s.spinner} src={spinner} />
    </div>
  );
};

export default Preloader;
