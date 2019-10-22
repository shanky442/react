import React, { Component } from 'react';

import './App.css';
import Radium from 'radium';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      { id:'a1',name : 'ankur', age : 28 },
      { id:'a2',name : 'sumit', age : 26 },
      { id:'a3',name : 'vik', age : 20 }
    ],
    showPersons : false
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

  showNames = () => {
    var status = this.state.showPersons;
    this.setState({
      showPersons:!status
    })
  }
  
  personDeleteHandler = (index) => {
    //let persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
    
  changedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id===id;
    });
    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons:persons
    })
  }
  render() {
    let show = null;
    let currStatus = this.state.showPersons;
    if(currStatus) {
       show = (
           <Persons persons={this.state.persons} clicked={this.personDeleteHandler} changed={this.changedHandler}/>
        )
    }
    return (
      <div className="App">
        <Cockpit switchNameHandler={this.switchNameHandler} showNames={this.showNames}/>
        {show}
      </div>
    );
  }
}

export default Radium(App);
