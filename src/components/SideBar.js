import React from "react";
import "../styles/sidebar.css";
import logo from "../logos/logo7.png";
import SidebarOption from "./SidebarOption";
const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </div>
  );
};

export default SideBar;
