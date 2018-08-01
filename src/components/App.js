import React, { Component } from "react";
import "../styles/App.css";
import Piano from "./Piano";
import Record from "./Record";
import Songs from "./Songs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currKey: null,
      isRecording: false,
      recordDuration: 0,
      songName: ["", "", ""]
    };
    this.allSongs = [];
    this.recordedSong = {
      name: this.state.songName,
      songKeys: [],
      duration: 0
    };
    this.keys = [
      "B3",
      "C4",
      "D4",
      "E4",
      "F4",
      "G4",
      "A4",
      "B4",
      "C5",
      "D5",
      "E5",
      "F5",
      "G5"
    ];
    this.handleRecord = this.handleRecord.bind(this);
    this.handleTilePress = this.handleTilePress.bind(this);
    this.handleTileRelease = this.handleTileRelease.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const songName = event.target.value;
    const name = target.name;
    this.setState({
      [name]: songName
    });
  }

  handleRecord(event) {
    event.preventDefault();
    this.setState(state => {
      if (state.isRecording) {
        clearInterval(this.timer);
        this.recordedSong.duration = this.state.recordDuration;
        if (this.allSongs.length < 3 && this.recordedSong.songKeys.length > 0) {
          this.allSongs.push(this.recordedSong);
          this.recordedSong = {
            name: this.state.songName,
            songKeys: [],
            duration: 0
          };
        }
        this.setState({ recordDuration: 0 });
      } else {
        const startTime = Date.now() - this.state.recordDuration;
        this.timer = setInterval(() => {
          this.setState({
            recordDuration: Date.now() - startTime,
            songName: ""
          });
        });
      }
      return { isRecording: !state.isRecording };
    });
  }

  handleTilePress(key) {
    this.setState({ currKey: key }, () => {
      this.url = `https://github.com/fk-interview/react-piano-task/raw/master/grand-piano-mp3-sounds/${
        this.state.currKey
      }.mp3`;
      this.audio = new Audio(this.url);
      this.audio.play();
      if (this.state.isRecording) {
        this.recordedSong.songKeys.push(key);
      }
    });
  }

  handleTileRelease() {
    this.setState({ currKey: null });
    this.audio.pause();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const mappedKeys = this.keys.map(key => {
      return {
        note: key,
        active: this.state.currKey === key
      };
    });

    return (
      <div className="container">
        <div className="first-row">
          <div className="record-area">
            <Record
              recordDuration={this.state.recordDuration}
              isRecording={this.state.isRecording}
              handleRecord={this.handleRecord}
            />
          </div>
          <div className="song-area">
            <Songs
              songName={this.state.songName}
              handleInputChange={this.handleInputChange}
              songs={this.allSongs}
            />
          </div>
        </div>

        <div className="piano-area">
          <Piano
            keys={mappedKeys}
            handleTilePress={this.handleTilePress}
            handleTileRelease={this.handleTileRelease}
          />
        </div>
      </div>
    );
  }
}

export default App;
