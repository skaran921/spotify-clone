import React from "react";
import "../styles/body.css";
import Header from "./Header";
import logo from "../logos/logo7.png";
const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img src={logo} alt="" />
        <div className="body-info-Text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
