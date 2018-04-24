import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state={
      input: '',
      inputArray: []
    }

    this.collectUserInput = this.collectUserInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  collectUserInput(e){
    this.setState({
      input: e.target.value
    })
  }

  submit(){
    this.setState({
      inputArray: [...this.state.inputArray, this.state.input ],
      input: ''
    })
  }

  render() {

    let output = this.state.inputArray.map(current => {
      return(
        <div>
          {current}
        </div>
      )
    })
    return (
      <div className="App">
    
        <input value={this.state.input} type="text" onChange={this.collectUserInput}/>
        <button onClick={this.submit}>Submit </button>
        {/* {this.state.input} */}

        <Todo input={output}/>

        {/* {output} */}
      </div>
    );
  }
}

export default App;
