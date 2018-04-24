import React, {Component} from 'react'

export default class Login extends Component{
    
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }        

        this.alertInfo = this.alertInfo.bind(this);
    }

    password(password){
        
        this.setState({
            password:password
        })
    }

    username(username){
        this.setState({
            username:username
        })
    }

    alertInfo(){
        alert(`The username is ${this.state.username} and the password is ${this.state.password}`)
    }

    render(){
        return(
            <div>
                yo
                <input type="text" onChange={e => {this.password(e.target.value)}}/>
                <input type="text" onChange={e => {this.username(e.target.value)}}/>
                <button onClick={this.alertInfo}>Submit </button>
            </div>
        )
    }
}