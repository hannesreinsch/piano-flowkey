import React, { Component } from 'react';
import "../styles/Piano.css";
import Tile from "./Tile"


class Piano extends Component {
  constructor(props){
    super(props);
    this.state = {
      tileClass: "tile",
    }
    this.handleTilePress = this.handleTilePress.bind(this);
    this.handleTileRelease = this.handleTileRelease.bind(this);
  }


  handleTilePress(key) {
    this.setState({tileClass: "tile active-tile"})
  }

  handleTileRelease() {
    this.setState({tileClass: "tile"})
  }


  render(){

    let keys = ['B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5'];
    
    return(
     

        <div className="piano-container">
          {keys.map(key =>
            <Tile key={key} note={key} className={this.state.tileClass} onPress={() => this.handleTilePress(this.props.note)}  onRelease={this.handleTileRelease.bind(this)} />
          )}
        </div>
        
    )
  }
}







export default Piano;
