import "./App.css";
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      number: 0
    }
    this.spin = this.spin.bind(this);
  }

  spin() {
    this.setState({
      number: (Math.random() * 1000) * 2
    })
  }

  render(){
  return (
    <div className="App">
      <button className="spin" onClick={this.spin}>Spin</button>
      <span className="arrow"></span>
      <div className="container" style={{transform: `rotate(${this.state.number}deg)`}}>
        <div className="one">
          <span>Adventure 1</span>
        </div>
        <div className="two">
          <span>Adventure 2</span>
        </div>
        <div className="three">
          <span>Adventure 3</span>
        </div>
        <div className="four">
          <span>Adventure 4</span>
        </div>
        <div className="five">
          <span>Adventure 5</span>
        </div>
        <div className="six">
          <span>Adventure 6</span>
        </div>
        <div className="seven">
          <span>Adventure 7</span>
        </div>
        <div className="eight">
          <span>Adventure 8</span>
        </div>
      </div>
    </div>
  );
  }
}

export default App;