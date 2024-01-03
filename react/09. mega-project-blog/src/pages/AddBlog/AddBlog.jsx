import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

import Input from "../../components/form-component/Input"
import TinyMCE from '../../components/TinyMCE'

const AddBlog = () => {

    return (
        <Container>
            <div className='my-5'>
                <h1>Add New Blog</h1>
                <Form>
                    <Row className='my-5'>
                        <Col md={7}>
                            <Input
                                label="Title"
                            />

                            <TinyMCE />

                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default AddBlog