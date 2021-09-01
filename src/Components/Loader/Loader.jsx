import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="lds-container">
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default Loader;
