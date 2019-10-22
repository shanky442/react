import React from 'react';
import logo from '../../assets/logo.svg';
const cockpit=(props) => {
    return (
    <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={props.switchNameHandler}>Switch Name</button>
        <button onClick={props.showNames}>Toggle show hide</button>
    </div>
    )
}

export default cockpit;