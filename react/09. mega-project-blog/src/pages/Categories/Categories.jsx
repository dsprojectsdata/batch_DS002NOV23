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

    const [currPage, setCurrPage] = useState(1);
    const [totalCategory, setTotalCategory] = useState(0)

    const DATA_PER_PAGE = 5;

    const handleEditClick = (currCategoryObj) => {
        setIsEdit(true)
        setCurrCategory(currCategoryObj)
    }

    useEffect(() => {
        getCategories();
    }, [])

    const handlePaginationCategory = (pageNo) => {
        console.log(pageNo)
        getCategories(pageNo)
    }

    // Get Category API
    const getCategories = async (pageNo = 1) => {
        setIsFetching(true);
        try {
            const data = {
                curr_page: pageNo,
                data_per_page: DATA_PER_PAGE
            }
            const response = await instanceAxios.post(GET_CATEGORY_URL, data)
            // console.log("response >>", response);
            setCategories(response.data.data.categories);
            setTotalCategory(response.data.data.total);
            setCurrPage(pageNo)
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
                                DATA_PER_PAGE={DATA_PER_PAGE}
                                currPage={currPage}
                                totalCategory={totalCategory}
                                handlePaginationCategory={handlePaginationCategory}
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