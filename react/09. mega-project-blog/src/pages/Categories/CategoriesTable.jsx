import React from 'react'
import SiteLoader from '../../components/SiteLoader'
import { Button, Pagination, Table } from 'react-bootstrap'
import instanceAxios from '../../services/base'
import { successToast } from '../../components/ToastAlert'
import { DETETE_CATEGORY_URL } from '../../constants'
import SitePagination from '../../components/SitePagination'

const CategoriesTable = ({ isFetching, getCategories, categories, handleEditClick, DATA_PER_PAGE, currPage, totalCategory, handlePaginationCategory }) => {

    // Delete Category API
    const deleteCategory = async (id) => {
        try {
            const response = await instanceAxios.delete(`${DETETE_CATEGORY_URL}${id}`)
            getCategories();
            successToast(response.data.message)
        } catch (error) {

        }
    }

    return (
        <SiteLoader isLoading={isFetching}>
            <Table striped bordered hover className='mt-4 mb-4'>
                <thead>
                    <tr>
                        <th width="150">#</th>
                        <th>Title</th>
                        <th width="150">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories.map((category, index) => (
                        <tr key={index}>
                            <td>{((currPage - 1) * DATA_PER_PAGE) + (index + 1)}</td>
                            <td>{category.name}</td>
                            <td>
                                <div style={{ display: "flex", gap: 12 }}>
                                    <Button onClick={() => handleEditClick(category)}>Edit</Button>
                                    <Button variant='danger' onClick={() => deleteCategory(category.id)}>Delete</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <SitePagination
                currPage={currPage}
                dataPerPage={DATA_PER_PAGE}
                totalData={totalCategory}
                handlePagination={handlePaginationCategory}
            />
        </SiteLoader>
    )
}

export default CategoriesTable