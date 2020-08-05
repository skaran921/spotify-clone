import React, { useEffect } from "react";
import Login from "./auth/Login";
import { getAuthTokenFromSpotifyResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./player/Player";
import { useDataLayerValue } from "./context/DataLayer";
import { SET_USER_ACTION, SET_TOKEN_ACTION } from "./context/actions";
const spotify = new SpotifyWebApi();
const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();
  // runCode
  useEffect(() => {
    const hash = getAuthTokenFromSpotifyResponse();
    const _token = hash.access_token;
    window.location.hash = "";
    if (_token) {
      dispatch({
        type: SET_TOKEN_ACTION,
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => {
          dispatch({
            type: SET_USER_ACTION,
            user,
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);
  console.log(user);
  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;
