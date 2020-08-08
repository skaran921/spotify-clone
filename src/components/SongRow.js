import React from "react";
import "../styles/songRow.css";
const SongRow = ({ track }) => {
  console.log("track", track);
  return (
    <div className="song-row">
      <img
        src={track.album ? track.album.images[0].url : ""}
        alt=""
        className="song-row-album"
      />
      <div className="song-row-info">
        <h1>{track?.name}</h1>
        <p>
          {track.artist
            ? track.artist.map((artist) => artist.name).join(",")
            : ""}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
