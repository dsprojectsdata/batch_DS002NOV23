import React, { useState, useRef, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import Input from "../../components/form-component/Input"
import TinyMCE from '../../components/TinyMCE'
import SubmitBtn from '../../components/form-component/SubmitBtn'
import Select from '../../components/form-component/Select'
import { ADD_BLOG_URL, GET_CATEGORY_URL, REQUIRED, STATUS_OPTIONS } from '../../constants'
import { useForm } from 'react-hook-form'
import instanceAxios from '../../services/base'
import ErrorTag from '../../components/form-component/ErrorTag'

const AddBlog = () => {

    const [categories, setCategories] = useState(null);
    const [isSubmitting, setSubmitting] = useState(false)

    const contentRef = useRef(null);

    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const getCategories = async () => {
        try {
            const response = await instanceAxios.get(GET_CATEGORY_URL)
            const cateArr = response.data.data.map((cate) => ({
                title: cate.name,
                value: cate.id
            }))
            setCategories(cateArr);
        } catch (error) {

        }
    }

    const handleAddBlog = async (data) => {
        console.log(data);
        setSubmitting(true)
        try {
            data["content"] = contentRef.current.getContent();
            data["image"] = data.image[0];
            const response = instanceAxios.post(ADD_BLOG_URL, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getCategories()
    }, []);

    return (
        <Container>
            <div className='my-5'>
                <h1>Add New Blog</h1>
                <Form onSubmit={handleSubmit(handleAddBlog)}>
                    <Row className='my-5'>
                        <Col md={7}>
                            <Input
                                label="Title"
                                {...register("title", {
                                    required: REQUIRED
                                })}
                            />
                            <ErrorTag error={errors.title} />

                            <Select
                                label="Select Category"
                                options={categories}
                                {...register("category_id", {
                                    required: REQUIRED
                                })}
                            />
                            <ErrorTag error={errors.category_id} />

                            <Input
                                label="Short Content"
                                {...register("short_content", {
                                    required: REQUIRED
                                })}
                            />
                            <ErrorTag error={errors.short_content} />

                            <TinyMCE label="Content" ref={contentRef} />

                            <SubmitBtn>Submit</SubmitBtn>
                        </Col>
                        <Col md={5}>
                            <Input
                                label="Image"
                                type="file"
                                {...register("image", {
                                    required: REQUIRED
                                })}
                            />
                            <ErrorTag error={errors.image} />

                            <Select
                                label="Select Status"
                                options={STATUS_OPTIONS}
                                {...register("status", {
                                    required: REQUIRED
                                })}
                            />
                            <ErrorTag error={errors.status} />

                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default AddBlog