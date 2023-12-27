import React, { forwardRef, useId } from 'react'
import { Form } from 'react-bootstrap'

const Input = forwardRef(({ label, type = "text", className, ...props }, ref) => {

    const inputId = useId();

    return (
        <Form.Group className={`${className}`} controlId={inputId}>
            {label && <Form.Label className='fw-bold' style={{ fontSize: '20px' }} >{label}</Form.Label>}
            <Form.Control type={type} {...props} ref={ref} />
        </Form.Group>
    )
});

// const Input = ({ label, type = "text", className, ...props }) => {

//     const inputId = useId();

//     return (
//         <Form.Group className={`${className}`} controlId={inputId}>
//             {label && <Form.Label className='fw-bold' style={{ fontSize: '20px' }} >{label}</Form.Label>}
//             <Form.Control type={type} {...props} />
//         </Form.Group>
//     )
// }

export default Input