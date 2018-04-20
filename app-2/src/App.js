import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      data: ["what", "is", "up"]
    }
  }

  render() {

    const words = this.state.data.map((current, index) => {
      return(
        
          <h2 key={current + index}>{current}</h2>
        
      )
    })



    return (
      <div className="App">
      hello
        {words}
      </div>
    );
  }
}

export default App;

/////russell