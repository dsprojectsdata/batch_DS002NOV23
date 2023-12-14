import React, {memo, useId, useRef} from "react";

const ChildComp = () => {

    const id = useId();

    const inputRef = useRef();

    // console.log("Am I child component running");

    const changeRef = () => {
        inputRef.current.value = 1000;
        inputRef.current.style.color = "red";
        inputRef.current.focus();
    }

    return <> 
        <input ref={inputRef} type="text" />
        <button onClick={changeRef}>Click me</button>
    </>
}

export default ChildComp;

// get form value on submit
// Create task for perfomance hook (ME)
// High Order Component

// useContext -> Redux toolkit