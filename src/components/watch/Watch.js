import React from 'react';

const Watch = (props) => {
    return (
        <div style={{border: '2px solid red', margin:'10px'}}>
            <h3>show the parantes time on Watch: {props.time}</h3>
        </div>
    );
};

export default Watch;