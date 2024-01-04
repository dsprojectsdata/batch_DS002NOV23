import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Pagination, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Input from '../../components/form-component/Input'
import SubmitBtn from '../../components/form-component/SubmitBtn'
import { useForm } from 'react-hook-form'
import { ADD_CATEGORY_URL, GET_CATEGORY_URL, REQUIRED, DETETE_CATEGORY_URL } from '../../constants'
import ErrorTag from '../../components/form-component/ErrorTag'
import instanceAxios from '../../services/base'

const Categories = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState(null);

    const { handleSubmit, register, formState: { errors } } = useForm();

    const addCategory = async (data) => {
        setIsLoading(true);
        try {
            await instanceAxios.post(ADD_CATEGORY_URL, data);
            getCategories();
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    const getCategories = async () => {
        try {
            const response = await instanceAxios.get(GET_CATEGORY_URL)
            // console.log("response >>", response);
            setCategories(response.data.data);
        } catch (error) {

        }
    }

    const deleteCategory = async (id) => {
        try {
            const response = await instanceAxios.delete(`${DETETE_CATEGORY_URL}${id}`)
            getCategories();
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            <Container>
                <div className='my-5'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h1>Blog Categories</h1>
                    </div>
                    <Row>
                        <Col md={6}>
                            <Form className='mt-4' onSubmit={handleSubmit(addCategory)}>
                                <Input
                                    label="Title"
                                    {...register("name", {
                                        required: REQUIRED
                                    })}
                                />

                                <ErrorTag error={errors.name} />
                                <SubmitBtn isLoading={isLoading}>Add</SubmitBtn>
                            </Form>
                        </Col>
                        <Col md={6}>
                            {categories && <>
                                <Table striped bordered hover className='mt-4 mb-4'>
                                    <thead>
                                        <tr>
                                            <th width="150">#</th>
                                            <th>Title</th>
                                            <th width="150">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr>
                                        <td>1</td>
                                        <td>Jacob</td>
                                        <td>
                                            <div style={{ display: "flex", gap: 12 }}>
                                                <Link to="/">Edit</Link>
                                                <Link to="/">Delete</Link>
                                            </div>
                                        </td>
                                    </tr> */}
                                        {categories && categories.map((category, index) => (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{category.name}</td>
                                                <td>
                                                    <div style={{ display: "flex", gap: 12 }}>
                                                        <Button>Edit</Button>
                                                        <Button variant='danger' onClick={() => deleteCategory(category.id)}>Delete</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item>{4}</Pagination.Item>
                                    <Pagination.Item>{5}</Pagination.Item>
                                </Pagination>
                            </>}
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Categories