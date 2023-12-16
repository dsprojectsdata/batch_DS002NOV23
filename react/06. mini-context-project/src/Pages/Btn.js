import React from 'react'
import useThemeContext from '../context/ThemeContext'

const Btn = () => {

    const { toggleTheme } = useThemeContext();

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}

export default Btn