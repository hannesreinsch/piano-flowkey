import React, { Component } from 'react';
import "../styles/Song.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faPlayCircle )




class Song extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="song-container">
        <ul>
          <li>test song</li>
          <li>test song</li>
          <li>test song</li>
        </ul>
      </div>
    );
  }
}

export default Song;
