// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
      bitrate: 8,
      video: {
      resolution: '1080p'
      }
    }
  }
  
  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.addressInfo,
        city: 'New York City'
      }
    });
  }
  
  handleResClick = () => {
    
  }
  
  render() {
    return(
      <button className='bitrate' onClick={this.handleBitClick}>Bitrate</button>
      <button className='resolution' onClick={this.handleResClick}>Resolution</button>
      )
  }
  
}