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
      playingId: 0,
      recordDuration: 0,
      songName: "",
      allSongs: []
    };
    this.recordedSong = {
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

  handlePlay(id) {
    if (!this.state.playingId) {
      let urlArray = [];
      const playingSong = this.state.allSongs.find(el => el.id === id);
      if (playingSong) {
        urlArray = playingSong.songKeys.map(key => {
          return `https://github.com/fk-interview/react-piano-task/raw/master/grand-piano-mp3-sounds/${key}.mp3`;
        });
      }
      this.audios = urlArray.map(url => {
        return new Audio(url);
      });
      this.audios.forEach((audio, index) => {
        setTimeout(() => {
          audio.play();
        }, index * 750);
        setTimeout(() => {
          audio.pause();
          this.setState({ playingId: 0 });
        }, this.audios.length * 750);
      });
      this.setState({ playingId: id });
    }
  }

  handleRecord(event) {
    event.preventDefault();
    if (this.state.isRecording) {
      clearInterval(this.timer);
      if (
        this.state.allSongs.length < 3 &&
        this.recordedSong.songKeys.length > 0
      ) {
        this.setState(
          {
            allSongs: this.state.allSongs.concat([
              {
                id: new Date().getTime(),
                songKeys: this.recordedSong.songKeys
              }
            ])
          },
          () => (this.recordedSong.songKeys = [])
        );
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
    this.setState({ isRecording: !this.state.isRecording });
  }

  handleTilePress(key) {
    this.setState({ currKey: key }, () => {
      this.url = `https://github.com/fk-interview/react-piano-task/raw/master/grand-piano-mp3-sounds/${
        this.state.currKey
      }.mp3`;
      this.audio = new Audio(this.url);
      this.audio.currentTime += 0.5;
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
              playingId={this.state.playingId}
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
