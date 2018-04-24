import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Functional from './functional'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Functional text="yo"/>
      </div>
    );
  }
}

export default App;
