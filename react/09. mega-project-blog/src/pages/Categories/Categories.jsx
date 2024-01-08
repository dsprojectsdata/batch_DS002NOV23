import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { GET_CATEGORY_URL } from '../../constants'
import instanceAxios from '../../services/base'
import { errorToast, successToast } from '../../components/ToastAlert'
import AddCategoryForm from './AddCategoryForm'
import CategoriesTable from './CategoriesTable'
import EditCategoryForm from './EditCategoryForm'


const Categories = () => {

    const [isFetching, setIsFetching] = useState(false)
    const [categories, setCategories] = useState(null);

    const [isEdit, setIsEdit] = useState(false);
    const [currCategory, setCurrCategory] = useState(null)

    const handleEditClick = (currCategoryObj) => {
        setIsEdit(true)
        setCurrCategory(currCategoryObj)
    }

    useEffect(() => {
        getCategories();
    }, [])

    // Get Category API
    const getCategories = async () => {
        setIsFetching(true);
        try {
            const response = await instanceAxios.post(GET_CATEGORY_URL)
            // console.log("response >>", response);
            setCategories(response.data.data.categories);
        } catch (error) {

        } finally {
            setIsFetching(false);
        }
    }

    return (
        <>
            <Container>
                <div className='my-5'>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h1>Blog Categories</h1>
                    </div>
                    <Row>
                        <Col md={6}>
                            {isEdit ? <EditCategoryForm getCategories={getCategories} currCate={currCategory} /> : <AddCategoryForm getCategories={getCategories} />}
                        </Col>
                        <Col md={6}>
                            {/* {categories && <> */}
                            <CategoriesTable
                                isFetching={isFetching}
                                getCategories={getCategories}
                                categories={categories}
                                handleEditClick={handleEditClick}
                            />
                            {/* </>} */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Categories