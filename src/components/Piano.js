import React, { Component } from 'react';
import "../styles/Piano.css";
import Tile from "./Tile"

const keys = ['B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'];

class Piano extends Component {
  constructor(props){
    super(props);
    this.state = {
      currKey: null,
    }
    this.handleTilePress = this.handleTilePress.bind(this);
    this.handleTileRelease = this.handleTileRelease.bind(this);
  }

  handleTilePress(note) {
    this.setState({currKey: note})
  }

  handleTileRelease() {
    this.setState({currKey: null})
  }

  render(){
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