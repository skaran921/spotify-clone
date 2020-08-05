import React from "react";
import "../styles/login.css";
import logo from "../logos/logo7.png";
import { loginUrl } from "../spotify";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} className="spotifyLogo" alt="spotify logo"></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
