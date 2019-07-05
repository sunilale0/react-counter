import React, {Component} from 'react';
import './index.css';

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  increment =() =>{
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () =>{
    if(this.state.counter > 0){
    this.setState({
      
      counter: this.state.counter-1
    })
  }
  }
  render(){
    console.log("this is line number 13", this.state.counter);
    return(
    <div className ="container">
      <div className="navbar">Counter.JS</div>
      <div className="counter">
      <h1 > {this.state.counter} </h1>
      <button type="button" onClick= {this.increment} className="buttons">Increment</button>
      <button type="button" onClick = {this.decrement} className="buttons">Decrement</button>
      </div>
    </div>
    )
  }
}


export default Counter;