import React from "react";
import "../styles/header.css";
import { Search as SearchIcon } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../context/DataLayer";
const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          type="text"
          className=""
          placeholder="Search for Artists, Songs"
        />
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt="RQ" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
