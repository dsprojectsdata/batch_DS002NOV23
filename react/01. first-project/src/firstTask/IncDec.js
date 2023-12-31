import React, { useState } from "react";

const IncDec = () => {

    const [count, setCount] = useState(30); // State
    // let count = 40;

    // console.log("Am I rerendering", Math.random());

    const incNum = () => {
        // count = count + 1;
        // setCount(count + 1);
        setCount((previousValue) => previousValue + 1);
        console.log("Am I clicked >>", count);
    }

    const decNum = () => {
        setCount(count - 1);
        console.log("Am I clicked on dec");
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h3>Count : {count}</h3>
                <div>
                    <button onClick={incNum} >Increase ({count})</button>
                    <button onClick={decNum}>Decrese ({count})</button>
                </div>
                <p>{count}</p>
            </div>
        </>
    )
}

export default IncDec;