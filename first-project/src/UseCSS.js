// External CSS
import "./UseCSS.css";

const UseCSS = () => {

    const style = { color: "blue", backgroundColor: "green" }; // Internal CSS
    const color = "white"; 

    return (
        <div>
            {/* <h1 style={ style }> Use CSS</h1> */}
            <h1 style={ { color: color, backgroundColor: "green" } }> Use CSS</h1>
        </div>
    )
}

export default UseCSS;


/*

    Inline CSS

    style={ { key: value } }

    key -> only in camelCase

*/