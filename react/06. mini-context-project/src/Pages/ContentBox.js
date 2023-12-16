import React from 'react'
import useThemeContext from '../context/ThemeContext';

const ContentBox = () => {

    const { themeName } = useThemeContext();

    const style = {
        divStyle: {
            backgroundColor: themeName === "dark" ? "black" : "#FFFFFF",
            width: 400,
            color: themeName === "dark" ? "#FFFFFF" : "black",
            margin: "auto",
            border: "1px solid red"
        }
    }

    return (
        <>
            <div style={style.divStyle}>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias tempora cum accusamus saepe facilis, dicta dignissimos nostrum suscipit aut tempore, officia magnam nihil veritatis quaerat molestias. Dolor asperiores rem nemo.
                </p>
            </div>
        </>
    )
}

export default ContentBox