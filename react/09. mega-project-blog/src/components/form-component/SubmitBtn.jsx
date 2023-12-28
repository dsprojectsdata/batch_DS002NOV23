import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

const SubmitBtn = ({ 
    children,
    isLoading = false, 
    // name = "Submit", 
    variant = "primary",
    className = "",
    ...props
}) => {

    return (
        <Button variant={variant} className={`px-5 mt-5 ${className}`} size="lg" type="submit" disabled={isLoading} {...props}>
            {isLoading && <Spinner size="sm" style={{ marginRight: 8 }} />}
            {children}
        </Button>
    )
}

export default SubmitBtn