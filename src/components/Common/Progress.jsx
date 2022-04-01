import React from "react";
import spinner from "../../assets/spinner.svg";

let Preloader = () => {
  return (
    <div>
      <img src={spinner} alt={spinner} />
    </div>
  );
};

export default Preloader;
