import React, { useEffect, useState } from 'react'
import { useSearchParams, useLoaderData } from "react-router-dom"

const Product = () => {

    // const [products, setProducts] = useState([]);

    // console.log("useLoaderData() >>", useLoaderData());

    const products = useLoaderData();

    // const [searchParam, setSearchParam] = useSearchParams();

    // const [pageNo, setPageNo] = useState(1);

    // console.log(searchParam.get("pageno"));

    // const setPageNo = (e) => {
    //     setSearchParam(searchParam => {
    //         searchParam.set("pageno", e.target.value)
    //         return searchParam
    //     })
    // }

    // const getProductData = async () => {
    //     const response = await fetch("https://dummyjson.com/products");
    //     const data = await response.json();
    //     setProducts(data.products);
    // }


    // useEffect(() => {
    //     getProductData();
    // }, [])

    return (
        <>
            <h1>All Products</h1>
            {/* <input type='number' value={searchParam.get("pageno")} onChange={setPageNo} /> */}

            <table border={1} style={{ marginLeft: 100 }}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => <tr>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                    </tr>)}
                    {/* {products.map(() => {
                        let name = "";
                        if(true){
                            name = "Nikhilesh"
                        }else{
                            name = "sharma"
                        }
                        return "Nikhilesh"
                    })} */}
                    {/* {products.map(() => ("Nikhilesh"))} */}
                    {/* <tr>
                        <td></td>
                        <td></td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default Product


const getProductData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
}

export { getProductData };