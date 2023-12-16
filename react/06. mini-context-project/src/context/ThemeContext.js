import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    themeName: "light",
    toggleTheme: () => {}
});

const ThemeProvider = ({ children }) => {

    const [themeName, setTheme] = useState("dark");

    const toggleTheme = () => {
        const updateTheme = themeName === "dark" ? "light" : "dark";
        setTheme(updateTheme);
        // localStorage.setItem("theme", updateTheme)
        localStorage.setItem("theme", JSON.stringify([{id: 1}, {id: 2}]))
    }

    useEffect(() => {
        const themeName = localStorage.getItem("theme");
        console.log(JSON.parse(themeName))
        setTheme(themeName);
    }, [])

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;

export { ThemeProvider };