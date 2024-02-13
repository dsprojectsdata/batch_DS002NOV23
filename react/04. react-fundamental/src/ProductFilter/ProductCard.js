import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({product}) => {
    // console.log(JSON.parse(product.images[0]));
    const productImage = JSON.parse(product.images[0])[0] || ""
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productImage} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">${product.price}</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard