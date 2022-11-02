import React from 'react';
import { useState } from 'react';

const Counter22 = () =>  {
    const [number, setNumber] = useState(100)
    return (
        <>
        <h1>Countdown: {number} </h1>
        <button onClick={() => setNumber(number - 1)}>Subtract</button>
        <button onClick={() => setNumber(number + 1)}>Add</button>
        </>
    )
}

export default Counter22;