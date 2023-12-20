import React, { useEffect, useState } from 'react'
import axios from "axios"

const Products = () => {

    const [count, isError, isLoading] = useGetProduct()

    // const [count, setCount] = useState()
    // const [isError, setIsError] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)

    // const getProducts = async () => {
    //     setIsLoading(true)
    //     try {
    //         setIsError(false)
    //         const response = await axios({
    //             method: "GET",
    //             url: "https://dummyjson.com/productsss"
    //         });
    //         setCount(response.data.products.length)
    //     } catch (error) {
    //         setIsError(true)
    //     } finally{
    //         setIsLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     getProducts()
    // }, [])

    return (
        <>
            {isError && <p style={{ color: "red" }}>Something went wrong</p>}
            {isLoading && <p>Loading...</p> || <h1>Total Count: {count}</h1>}
        </>
    )
}

export default Products


const useGetProduct = () => {
    const [count, setCount] = useState()
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const axiosInstance = axios.create({
        baseURL: "https://dummyjson.com/"
    })

    const getProducts = async () => {
        setIsLoading(true)
        try {
            setIsError(false)
            // const response = await axios({
            //     method: "GET",
            //     url: "https://dummyjson.com/products"
            // });
            const response = await axiosInstance.get("/products")
            setCount(response.data.products.length)
        } catch (error) {
            setIsError(true)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return [count, isError, isLoading];
}