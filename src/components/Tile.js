import React, { Component } from 'react';
import "../styles/Tile.css";



class Tile extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }




  render(){

    
    return(
     

        <div className={this.props.className}  onMouseDown={this.props.onPress} onMouseUp={this.props.onRelease}>
          <p className="tile-key">{this.props.note}</p> 
        </div>
        
    )
  }
}







export default Tile;
