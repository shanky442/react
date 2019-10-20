import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

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
       show = (<div>
         {
           this.state.persons.map((person,index) => 
           { return <Person 
              click={() => this.personDeleteHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event)=>this.changedHandler(event, person.id)}/>
            })
         }
        </div>)
    }
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
        <button onClick={this.showNames}>Toggle show hide</button>
        {show}
      </div>
    );
  }
}

export default App;
