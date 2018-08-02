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
      isPlaying: false,
      recordDuration: 0,
      songName: "",
      allSongs: []
    };
    this.recordedSong = {
      name: this.state.songName,
      songKeys: []
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
    this.handlePlay = this.handlePlay.bind(this);
    this.handleTilePress = this.handleTilePress.bind(this);
    this.handleTileRelease = this.handleTileRelease.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getSeconds = this.getSeconds.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const songName = event.target.value;
    const name = target.name;
    this.setState({ [name]: songName });
  }

  handlePlay() {
    let urlArray = [];
    console.log(urlArray);
    this.urls = this.state.allSongs[0].songKeys.map(key => {
      return urlArray.push(
        `https://github.com/fk-interview/react-piano-task/raw/master/grand-piano-mp3-sounds/${key}.mp3`
      );
    });
    let audios = new Audio(
      urlArray.map(url => {
        return url;
      })
    );
    console.log(audios);
    audios.play();
    this.setState(state => {
      return { isPlaying: !state.isPlaying };
    });
  }

  handleRecord(event) {
    event.preventDefault();
    this.setState(state => {
      if (state.isRecording) {
        clearInterval(this.timer);
        if (
          this.state.allSongs.length < 3 &&
          this.recordedSong.songKeys.length > 0
        ) {
          this.state.allSongs.push(this.recordedSong);
          this.recordedSong = {
            name: this.state.songName,
            songKeys: []
          };
        }
        this.setState({ recordDuration: 0 });
      } else {
        let that = this;
        this.timer = setInterval(() => {
          that.setState({
            recordDuration: that.state.recordDuration + 1,
            songName: ""
          });
        }, 1000);
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

  getSeconds() {
    return ("0" + (this.state.recordDuration % 60)).slice(-2);
  }

  getMinutes() {
    return Math.floor(this.state.recordDuration / 60);
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

    console.log("ALL SONGS", this.state.allSongs);

    return (
      <div className="container">
        <div className="first-row">
          <div className="record-area">
            <Record
              getSeconds={this.getSeconds}
              getMinutes={this.getMinutes}
              isRecording={this.state.isRecording}
              handleRecord={this.handleRecord}
            />
          </div>
          <div className="song-area">
            <Songs
              handlePlay={this.handlePlay}
              isPlaying={this.state.isPlaying}
              songName={this.state.songName}
              handleInputChange={this.handleInputChange}
              songs={this.state.allSongs}
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
