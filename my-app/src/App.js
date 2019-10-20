import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {
  state = {
    usernames:[
      { username:"superAnkur" },
      { username:"superAnkurSahoo" },
      { username:"superSahoo" }
    ],
    nameCount:0,
    userInput:''
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

  nameChangeHandler = (event) => {
    let length = event.target.value.length;
    console.log('length is ',length);
    this.setState({
      userInput:event.target.value,
      nameCount:length
    })
  }

  deleteChar = (index) => {
    console.log('inside delete char');
    const users = this.state.userInput.split('');
    users.splice(index,1);
    const updatedUsers = users.join('');
    this.setState({
      userInput:updatedUsers
    })
  }
  render() {
    const charList = this.state.userInput.split('').map((ch,index)=>{
      return <Char eachChar={ch} key={index} click={(index)=>this.deleteChar(index)}/>
    })
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
        <input type='text' onChange={this.nameChangeHandler} value={this.state.userInput}/>
        <p>length of the text entered is {this.state.userInput}</p>
        <Validation userLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
  
}

export default App;
