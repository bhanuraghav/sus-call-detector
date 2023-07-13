import React from "react";
import "./ApplicationHeader.scss";
export default function ApplicationHeader(props) {
  return (
    <div className="application-header-container">
      <div className="db-logo">
        <img alt="logo" className="logo" src="../assets/logo2.png" />
      </div>
      <div className="application-name">
        <span>Sus Calls Detector</span>
      </div>
    </div>
  );
}
