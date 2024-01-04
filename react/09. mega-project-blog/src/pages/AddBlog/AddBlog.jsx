import React, { useState, useRef } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import Input from "../../components/form-component/Input"
import TinyMCE from '../../components/TinyMCE'
import SubmitBtn from '../../components/form-component/SubmitBtn'
import Select from '../../components/form-component/Select'
import { STATUS_OPTIONS } from '../../constants'

const AddBlog = () => {

    const contentRef = useRef(null);

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

                            {/* <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select> */}

                            <Select
                                label="Select Category"

                            />

                            <TinyMCE label="Content" ref={contentRef} />

                            <SubmitBtn>Submit</SubmitBtn>

                        </Col>
                        <Col md={5}>
                            <Input
                                label="Image"
                                type="file"
                            />

                            <Select
                                label="Select Status"
                                options={STATUS_OPTIONS}
                            />

                            {/* <Form.Select aria-label="Default select example">
                                <option value="">Select Status</option>
                                <option value="draft">Draft</option>
                                <option value="active">Active</option>
                            </Form.Select> */}

                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default AddBlog