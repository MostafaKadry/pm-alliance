import React from "react";
import "./style.scss";

function Preloader() {
  return (
    <div className="preload preload-container">
      <div className="preload-logo">
        <div className="spinner" />
      </div>
    </div>
  );
}

export default Preloader;
