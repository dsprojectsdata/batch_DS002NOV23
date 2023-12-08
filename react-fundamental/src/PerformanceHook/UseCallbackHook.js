import { useCallback, useState } from "react";
import List from "./List";
import ChildComp from "./ChildComp";

const UseCallbackHook = () => {

    const [number, setNumber] = useState(0);
    const [isDark, setIsDark] = useState(true);

    const theme = {
        color: isDark ? "#FFFFFF" : "#000000",
        backgroundColor: isDark ? "#000000" : "#FFFFFF",
    }

    // const getItems = () => {
    //     return [number, number + 1, number + 2];
    // }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    return (
        <>
            <input type="number" onChange={event => setNumber(Number(event.target.value))} />
            <button onClick={() => setIsDark(prevTheme => !prevTheme)}>Toggle Theme</button>

            <div style={theme}>
                {/* <List getItems={getItems} /> */}

                <ChildComp />
            </div>
        </>
    )
}

export default UseCallbackHook;