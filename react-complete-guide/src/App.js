import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name : 'ankur', age : 28 },
      { name : 'sumit', age : 26 },
      { name : 'vik', age : 20 }
    ]
  }

  switchNameHandler = () => {
    console.log('button was clicked');
    this.setState(
      {
        persons : [
          { name : 'ank', age : 28 },
          { name : 'sumita', age : 26 },
          { name : 'viki', age : 20 }
        ]
      }
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbies : chit chat</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies : chit chat</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies : chit chat</Person>
      </div>
    );
  }
}

export default App;
