import React, { useId } from 'react'
import { Form } from 'react-bootstrap'

// ForwardRef
// .env
// headers

// Formik
// Yup
// react-hook-form


const Input = ({ label, type = "text", className, ...props }) => {

    const inputId = useId();

    return (
        <Form.Group className={`mb-3 ${className}`} controlId={inputId}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control type={type} {...props} />
        </Form.Group>
    )
}

export default Input