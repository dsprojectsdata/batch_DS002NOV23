import React, {useEffect, useState} from 'react';

const UseEffectHook = () => {

    const [products, setProducts] = useState([]);
    const [noOfRecords, setNoOfRecords] = useState(2);

    const getProductData = () => {
        fetch(`https://hub.dummyapis.com/products?noofRecords=${noOfRecords}`)
        .then((data) => {
            return data.json();
        }).then((response) => {
            setProducts(response);
        })
    }

    // getProductData();

    useEffect(() => {
        getProductData();
    }, [noOfRecords]);

    return (
        <>
            <h1>Product Data</h1>
            <div>
                <select onChange={(event) => setNoOfRecords(event.target.value)}>
                    <option>Select number</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UseEffectHook;