import React, { Component } from 'react';
import "../styles/Record.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

library.add( faPlayCircle, faPauseCircle );


class Record extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
    }
    this.handleRecord = this.handleRecord.bind(this);
  }

  handleRecord(event) {
    event.preventDefault();
    this.setState({isRecording: true})
  }


  render(){
    
    return(
     

        <div className="record-container">
          <h2 className="record-title">Record a new Song</h2>
          {this.state.isRecording ? 
            <a href="#" onClick={this.handleRecord} className="record-btn">
              <FontAwesomeIcon icon="pause-circle" />
            </a> :
            <a href="#" onClick={this.handleRecord} className="record-btn">
              <FontAwesomeIcon icon="play-circle" />
            </a>
          }
          <p className="record-time">02:56</p>
        </div>
        
    )
  }
}







export default Record;
