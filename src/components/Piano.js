import React, { Component } from 'react';
import "../styles/Piano.css";
import Tile from "./Tile";


class Piano extends Component {
  constructor(props){
    super(props);
    this.state = {
      currKey: null,
    }
    this.handleTilePress = this.handleTilePress.bind(this);
    this.handleTileRelease = this.handleTileRelease.bind(this);
  }
  
  handleTilePress(key) {
    this.setState({currKey: key}, () => {
      this.url = `https://github.com/fk-interview/react-piano-task/raw/master/grand-piano-mp3-sounds/${this.state.currKey}.mp3`;
      this.audio = new Audio(this.url);
      this.audio.play()
  });
  }

  handleTileRelease() {
    this.setState({currKey: null})
    this.audio.pause()
  }
  
  render(){
    const keys = ['B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'];

    return(

      <div className="piano-container">
          {keys.map(key =>
            <Tile key={key} note={key} className={this.state.currKey === key ? "active-tile" : ""} onPress={() => this.handleTilePress(key)}  onRelease={this.handleTileRelease} />
          )}
      </div>

    )
  } 
}

export default Piano;