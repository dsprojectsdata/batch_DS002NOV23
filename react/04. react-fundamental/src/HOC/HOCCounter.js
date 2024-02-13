import React, { useState } from 'react'
import ClickIncrement from './ClickIncrement';

const HOCCounter = (OldComponent) => {
    const NewComponent = () => {

        const [count, setCount] = useState(0);

        return <OldComponent count={count} incrementCount={() => setCount(count + 10)} />
    }
    return NewComponent;
}

export default HOCCounter;