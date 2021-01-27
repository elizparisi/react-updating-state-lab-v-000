// Code DigitalClicker Component Here

import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  
  handleClick = () => {
    let timesClicked = this.state.count + 1 
    this.setState({count: timesClicked
    })
  }
  
  render() {
    return(
      <button onClick={this.handleClick}>Click</button>
      )
  }
  
}