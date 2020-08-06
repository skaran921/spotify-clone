import React from "react";
import "../styles/footer.css";
import {
  SkipPrevious as SkipPreviousIcon,
  SkipNext as SkipNextIcon,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  PlayCircleOutline,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
          alt="album"
          className="footer-album-logo"
        />
        <div className="footer-song-info">
          <h4>No Song is playing</h4>
          <p>...</p>
        </div>
      </div>

      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />
        <PlayCircleOutline className="footer-icon" fontSize="large" />
        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
