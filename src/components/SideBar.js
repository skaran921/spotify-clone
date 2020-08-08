import React from "react";
import "../styles/sidebar.css";
import logo from "../logos/logo7.png";
import SidebarOption from "./SidebarOption";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  LibraryMusic as LibraryMusicIcon,
} from "@material-ui/icons";
import { useDataLayerValue } from "../context/DataLayer";

const SideBar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist, index) => {
        return <SidebarOption title={playlist.name} key={index} />;
      })}
    </div>
  );
};

export default SideBar;
