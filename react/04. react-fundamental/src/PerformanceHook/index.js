import { useEffect, useMemo, useState } from "react";
import { calculation } from "../utils";

const UseMemoHook = () => {

    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(true);

    // const getcalculation = calculation(count);
    const getcalculation = useMemo(() => calculation(count), [count]);

    const theme = useMemo(() => {
        return {
            color: isDark ? "#FFFFFF" : "#000000",
            backgroundColor: isDark ? "#000000" : "#FFFFFF",
        }
    }, [isDark]);

    useEffect(() => {
        console.log("Theme has been changed");
    }, [theme]);

    return (
        <>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button> <br />

                <button onClick={() => setIsDark(prevTheme => !prevTheme)}>Toggle Theme</button>
                
                <h2 style={theme}>{count}*5 = {getcalculation}</h2>
            </div>
        </>
    )
}

export default UseMemoHook;