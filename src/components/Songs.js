import React, { Component } from "react";
import "../styles/Song.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlayCircle, faPauseCircle);

class Song extends Component {
  render() {
    return (
      <div className="song-container">
        <h2>All Recorded Songs</h2>
        {this.props.songs.map(song => {
          return (
            <div key={song.name + song.duration + song.songKeys[0]}>
              {/* <a className="play-btn">
                <FontAwesomeIcon
                  icon={this.props.isRecording ? "pause-circle" : "play-circle"}
                />
              </a> */}
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
              <p className="song-duration">{song.duration}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Song;
