import React from "react";
import "../styles/sidebarOption.css";
const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar-option">
      <p>{title}</p>
    </div>
  );
};

export default SidebarOption;
