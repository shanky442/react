import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border:'2px red solid'
    }
    return <input type='text' 
    onChange={props.change}
    value={props.defaultName}
    style={inputStyle}/>
}

export default userInput;