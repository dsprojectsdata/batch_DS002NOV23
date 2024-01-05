import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import blogs from '../../assets/images/blog-img.jpg'

const Blogs = () => {
    return (
        <section className='Blog py-5' id='Blog'>
            <Container>
                <h1 className='fw-bold text-center pb-4' style={{ fontSize: '50px' }}>All Blog</h1>
                <Row>
                    <Col lg={4}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={blogs} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={blogs} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={blogs} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={blogs} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={blogs} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={blogs} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <div className='text-center'><Button variant="primary" className='px-5 mt-5' size="lg">Load More</Button></div>
            </Container>
        </section>
    )
}

export default Blogs