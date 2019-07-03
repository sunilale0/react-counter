import React, {Component} from 'react';

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }
  render(){
    console.log("this is line number 13", this.state.counter);
    return(
    <div className ="container">
      <div className="navbar">Counter.js</div>
      <div className="counter">
      <h1> Something to put </h1>
      <button type="button">Increment</button>
      <button type="button">Decrement</button>
      </div>
    </div>
    )
  }
}


export default Counter;