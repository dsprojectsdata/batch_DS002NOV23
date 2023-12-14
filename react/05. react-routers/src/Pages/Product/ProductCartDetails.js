import React from 'react'
import { useParams } from 'react-router-dom';

const ProductCartDetails = () => {

    console.log(useParams());

    const { productId, cartId } =  useParams();

    return (
        <>
            <h1>Product ID : {productId}</h1>
            <h1>Cart ID : {cartId}</h1>
        </>
    )
}

export default ProductCartDetails