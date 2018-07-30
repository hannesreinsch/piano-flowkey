import React, { Component } from 'react';
import "../styles/Record.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faPlayCircle )


class Record extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }




  render(){
    
    return(
     

        <div className="record-container">
          <h2 className="record-title">Record a new Song</h2>
          <a className="record-btn">
            <FontAwesomeIcon icon="play-circle" />
          </a>
          <p className="record-time">02:56</p>
        </div>
        
    )
  }
}







export default Record;
