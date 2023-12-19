import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCount = () => {

    const count = useSelector(state => state.counter.count);

    // console.log(data);

    return (
        <>
            <h1>Count: {count}</h1>
        </>
    )
}

export default DisplayCount