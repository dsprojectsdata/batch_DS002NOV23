import React from 'react'
import { Button } from 'react-bootstrap'

const BlogCardBtn = ({ title = "Details" }) => {
    return (
        <Button variant="primary rounded-0" className="px-4 py-2">
            {title}
        </Button>
    )
}

export default BlogCardBtn