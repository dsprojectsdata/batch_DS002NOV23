import React, { useState } from 'react'
import HOCCounter from './HOCCounter'

const ClickIncrement = ({ count, incrementCount }) => {
    return (
        <>
            <p>The Count is: {count}</p>
            <button onClick={incrementCount}>CLick Me</button>
        </>
    )
}

export default HOCCounter(ClickIncrement)