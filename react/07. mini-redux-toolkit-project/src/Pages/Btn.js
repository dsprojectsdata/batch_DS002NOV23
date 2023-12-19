import React from 'react'
import { useDispatch } from 'react-redux'

import { incrementNum, decrementNum } from "../redux/features/counterSlice"

const Btn = () => {

    const dispatch =  useDispatch();

    return (
        <>
            <button onClick={() => dispatch(incrementNum(45))}>Increment</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch(decrementNum())}>Decrement</button>
        </>
    )
}

export default Btn