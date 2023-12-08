import React, {useEffect, useState} from "react";

const List = ({ getItems }) => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        console.log("AM I runing");
        setItems(getItems());
    }, [getItems])

    return (
        <>
            {items.map((item, index) => {
                return <p style={{ margin: 0 }} key={index}>{item}</p>
            })}
        </>
    );
};

export default List;