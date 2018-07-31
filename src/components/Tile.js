import React, { Component } from 'react';
import "../styles/Tile.css";


class Tile extends Component {

  render(){
    return(

        <div className={`tile ${this.props.className}`} onMouseDown={this.props.onPress} onMouseUp={this.props.onRelease}>
          <p className="tile-key">{this.props.note}</p> 
        </div>
        
    )
  }
}


export default Tile;