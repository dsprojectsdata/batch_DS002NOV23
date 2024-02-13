import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Form, Row } from "react-bootstrap"
import axios from "axios"
import ProductCard from './ProductCard';

const ProductFilter = () => {

    const [products, setProducts] = useState([]);
    const [filterValues, setFilterValues] = useState({
        price_min: "",
        price_max: ""
    })

    const getProducts = async () => {
        try {
            // let urlQueryString = "?"
            // urlQueryString += filterValues.price_min !== "" ? `&price_min=${filterValues.price_min}` : "";
            // urlQueryString += filterValues.price_max !== "" ? `&price_max=${filterValues.price_max}` : "";
            const queryStringArr = [
                filterValues.price_min !== "" ? `price_min=${filterValues.price_min}` : "",
                filterValues.price_max !== "" ? `price_max=${filterValues.price_max}` : ""
            ];
            const queryString = queryStringArr.filter(query => query && query).join("&");
            console.log(queryString)
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products?${queryString}`)
            console.log("response >>", response);
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const handleFilterBtn = () => {
        getProducts();
    }

    return (
        <>
            <Container style={{ padding: "50px 0" }}>
                <div style={{ textAlign: "left" }}>
                    <Row>
                        <Col md={3}>
                            <p><strong>Min Value: </strong></p>
                            <Form.Range
                                min={100}
                                max={1000}
                                step={10}
                                onChange={(event) => {
                                    console.log(event.target.value)
                                    setFilterValues({
                                        ...filterValues,
                                        price_min: event.target.value
                                    })
                                }}
                            />
                        </Col>
                        <Col md={3}>
                            <p><strong>Max Value: </strong></p>
                            <Form.Range
                                min={100}
                                max={1000}
                                step={10}
                                onChange={(event) => {
                                    console.log(event.target.value)
                                    setFilterValues({
                                        ...filterValues,
                                        price_max: event.target.value
                                    })
                                }}
                            />
                        </Col>
                    </Row>
                    <Button onClick={handleFilterBtn}>Filter</Button>
                    <br />
                    <br />
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 30 }}>
                    {products.map((product) => <ProductCard product={product} />)}
                </div>
            </Container>
        </>
    )
}

export default ProductFilter