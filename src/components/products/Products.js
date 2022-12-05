import React, { useState } from 'react';
import Watch from '../watch/Watch';

const Products = () => {
    const [time, setTime] = useState(0);
    const manageTime = () =>{
        setTime(time+1);
    }
    return (
        <div style={{border: '5px solid green', margin:'30px', padding:'20px'}}>
            <h1>All the Products are here</h1>
            <h6>{time}</h6>
            <button onClick={manageTime}>Update Time</button>
            <Watch time={time}></Watch>
        </div>
    );
};

export default Products;