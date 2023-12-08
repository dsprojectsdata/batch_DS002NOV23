import { useEffect, useState } from "react";


const UseEffectHook2 = () => {

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    useEffect(() => {
        console.log("Number is incresing");
    }, [number]);

    return (
        <>
            <h1>Count1: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increment count1</button>
            

            <br />
            <br />
            <h1>Count2: {number2}</h1>

            <button onClick={() => setNumber2(number2 + 1)}>Increment count2</button>
        </>
    )
}

export default UseEffectHook2;