import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'

class App extends Component {

  constructor(){
    super()

    // this.state = {
    //   username: '',
    //   password: ''
    // }

    // this.alertData = this.alertData.bind(this);
  }

  // alertData(){
  //   alert(this.state.username, this.state.password);
  //   // console.log(username)
  // }


  render() {
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  }
}

export default App;
