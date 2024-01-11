import React from 'react'
import { Pagination } from 'react-bootstrap'

const SitePagination = ({ currPage, dataPerPage, totalData, handlePagination }) => {

    if (totalData <= dataPerPage) {
        return <></>;
    }

    const noOfPages = Math.ceil(totalData / dataPerPage);

    return (
        <Pagination>
            <Pagination.Prev onClick={() => handlePagination(currPage - 1)} />
            {Array(noOfPages).fill("").map((_, index) => <Pagination.Item
                key={index}
                active={(index + 1) === currPage}
                onClick={() => handlePagination(index+1)}
            >
                {index + 1}
            </Pagination.Item>)}
            <Pagination.Next onClick={() => handlePagination(currPage + 1)} />

            {/* <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item> */}
        </Pagination>
    )
}

export default SitePagination