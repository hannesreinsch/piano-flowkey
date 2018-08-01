import React, { Component } from "react";
import "../styles/Record.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faPlayCircle, faPauseCircle);

class Record extends Component {
  render() {
    return (
      <div className="record-container">
        <h2 className="record-title">Record a new Song</h2>

        <a onClick={this.props.handleRecord} className="record-btn">
          <FontAwesomeIcon
            icon={this.props.isRecording ? "pause-circle" : "play-circle"}
          />
        </a>

        <p className="record-time">{this.props.recordDuration}</p>
      </div>
    );
  }
}

export default Record;
