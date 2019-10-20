import React from'react';
import './UserOutput.css'
const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{props.userName} soem random text</p>
            <p>I assume i will be overriden</p>
        </div>
    )
}

export default userOutput;