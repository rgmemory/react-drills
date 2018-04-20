import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
  }

  updateText(value){
    this.setState({
      message: value
    })
  }



  render() {
    return (
      <div className="App">
      hi there
        <input type="text" onChange={(e) => {this.updateText(e.target.value)}}/>

        {this.state.message}
      </div>
    );
  }
}

export default App;
