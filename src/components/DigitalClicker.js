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
    let newCount = this.state.count + 1 
    this.setState({count: newCount
    })
  }
  
  render() {
    return(
      <button onClick={this.handleClick}>Click</button>
      )
  }
  
}