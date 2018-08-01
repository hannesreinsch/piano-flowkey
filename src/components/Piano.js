import React, { Component } from "react";
import "../styles/Piano.css";
import Tile from "./Tile";

class Piano extends Component {
  render() {
    return (
      <div className="piano-container">
        {this.props.keys.map(keyObject => (
          <Tile
            key={keyObject.note}
            note={keyObject.note}
            className={keyObject.active && "active-tile"}
            onPress={() => this.props.handleTilePress(keyObject.note)}
            onRelease={this.props.handleTileRelease}
          />
        ))}
      </div>
    );
  }
}

export default Piano;
