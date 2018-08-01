import React, { Component } from 'react';
import "../styles/App.css";
import Piano from "./Piano";
import Record from "./Record";
import Song from "./Song";


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      recordedSong: {},
      isRecording: false,
    }
    this.handleRecord = this.handleRecord.bind(this);    
  }

  handleRecord(event) {
    event.preventDefault();
    this.setState(prevState => ({
      isRecording: !prevState.isRecording
    }))
  }

  render() {
    return (
      <div className="container">

        <div className="first-row">
          <div className="record-area">
            <Record isRecording={this.state.isRecording} handleRecord={this.handleRecord}/>
          </div>
          <div className="song-area">
            <Song />
          </div>
        </div>

        <div className="piano-area">
          <Piano />
        </div>
        
      </div>
    );
  }
}

export default App;