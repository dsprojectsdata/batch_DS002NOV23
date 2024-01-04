import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Input from '../../components/form-component/Input'
import SubmitBtn from '../../components/form-component/SubmitBtn'

const AddCategory = () => {
    return (
        <Container>
            <div className='my-5'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>Add New Category</h1>
                </div>
                <Row>
                    <Col md={6}>
                        <Form className='mt-4'>
                            <Input
                                label="Title"
                            />

                            <SubmitBtn>Add</SubmitBtn>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default AddCategory