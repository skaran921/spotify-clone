import React, { useEffect, useState } from "react";
import Login from "./auth/Login";
import { getAuthTokenFromSpotifyResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
const App = () => {
  const [token, setToken] = useState(null);
  // runCode
  useEffect(() => {
    const hash = getAuthTokenFromSpotifyResponse();
    const _token = hash.access_token;
    window.location.hash = "";
    if (_token) {
      setToken(_token);
    }
    console.log("token", _token);
    spotify.setAccessToken(_token);
    spotify
      .getMe()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>{token ? <h1>i am logged in</h1> : <Login />}</div>;
};

export default App;
