import React, { Component } from "react";
import "../styles/Song.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause);

class Song extends Component {
  render() {
    return (
      <div className="song-container">
        <h2 className="songs-heading">All Recorded Songs</h2>
        {this.props.songs.map((song, index) => {
          return (
            <div className="song" key={index + song.songKeys[0]}>
              <a onClick={this.props.handlePlay} className="play-btn">
                <FontAwesomeIcon
                  icon={this.props.isPlaying ? "pause" : "play"}
                />
              </a>
              <p className="song-name">
                <input
                  className="song-name"
                  name="songName"
                  type="text"
                  value={this.props.songName[song.index]}
                  onChange={this.props.handleInputChange}
                  placeholder="Change Title"
                />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Song;
