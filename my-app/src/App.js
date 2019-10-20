import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    usernames:[
      { username:"superAnkur" },
      { username:"superAnkurSahoo" },
      { username:"superSahoo" }
    ]
  }

  usernameChangedHandler = (event) => {
    this.setState(
      {
        usernames:[
          { username:event.target.value},
          { username:event.target.value },
          { username:event.target.value }
        ]
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React now
          </a>
        </header>
        <UserInput change={this.usernameChangedHandler} 
          defaultName={this.state.usernames[0].username}/>
        <UserOutput userName={this.state.usernames[0].username}/>
        <UserOutput userName={this.state.usernames[1].username}/>
        <UserOutput userName={this.state.usernames[2].username}/>
      </div>
    );
  }
  
}

export default App;
