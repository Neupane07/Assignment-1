import React from 'react'

import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Text to get overwritten</p>
        </div>
    );
};

export default UserOutput;