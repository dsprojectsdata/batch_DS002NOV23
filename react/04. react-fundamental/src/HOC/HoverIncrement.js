import React, { useState } from 'react'
import HOCCounter from './HOCCounter'

const HoverIncrement = ({ count, incrementCount }) => {
    return (
        <>
            <p>The Count is: {count}</p>
            <button onMouseOver={incrementCount}>Hover Me</button>
        </>
    )
}

export default HOCCounter(HoverIncrement)