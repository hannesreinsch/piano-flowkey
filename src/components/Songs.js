import React, { Component } from "react";
import "../styles/Song.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlayCircle);

class Song extends Component {
  render() {
    return (
      <div className="song-container">
        {this.props.songs.map(song => {
          return (
            <div>
              <p>{song.name}</p>
              <p>{song.duration}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Song;
