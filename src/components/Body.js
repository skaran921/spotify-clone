import React from "react";
import "../styles/body.css";
import Header from "./Header";
import { useDataLayerValue } from "../context/DataLayer";
import { PlayCircleFilledSharp, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [{ bollywood_playlist }, dispatch] = useDataLayerValue();
  // console.log("bollywood_playlist", bollywood_playlist.images);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img
          src={
            bollywood_playlist?.images ? bollywood_playlist?.images[0].url : ""
          }
          alt=""
        />
        <div className="body-info-Text">
          <strong>PLAYLIST</strong>
          <h2>{bollywood_playlist?.name}</h2>
          <p>{bollywood_playlist?.owner?.display_name}</p>
        </div>
      </div>

      <div className="body-icons">
        <PlayCircleFilledSharp className="body-shuffle-btn" />
        <Favorite fontSize="large" />
        <MoreHoriz />
      </div>
      <div className="body-songs">
        {bollywood_playlist.tracks
          ? bollywood_playlist?.tracks.items.map((track, index) => (
              <SongRow track={track.track} key={index} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Body;
