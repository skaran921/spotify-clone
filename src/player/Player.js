import React from "react";
import SideBar from "../components/SideBar";
import Body from "../components/Body";
import "../styles/player.css";
import Footer from "../context/Footer";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player-body">
        <SideBar />
        <Body />
        {/* sidebar */}
        {/* body */}
      </div>
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Player;
