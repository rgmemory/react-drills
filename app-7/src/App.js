import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask'

class App extends Component {
  constructor(){
    super()

    this.state = {
      taskArray: [],
      task: ''
    }

    this.addTask = this.addTask.bind(this);
  }

  addTask(){
    
  }

  render() {
    return (
      <div className="App">
      App
        <NewTask />
      </div>
    );
  }
}

export default App;
