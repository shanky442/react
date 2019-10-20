import React from 'react';

const validation = (props) => {
    let msg = 'input is short';
    if(props.userLength>5) msg='input is long'
    return <div>
        <p>this is validation {props.userLength}</p>
        <p>{msg}</p>
    </div>
}

export default validation;