import React, { forwardRef, useId } from 'react'
import { Form } from 'react-bootstrap'

const Select = forwardRef(({ label, options = [], className = "", ...props }, ref) => {

    const selectId = useId();

    return (
        <Form.Group className={`mb-2 ${className}`} controlId={selectId}>
            {label && <Form.Label className='fw-bold' style={{ fontSize: '20px' }} >{label}</Form.Label>}
            <Form.Select ref={ref} {...props}>
                <option value="">{label ? label : "Select a option"}</option>
                {options && options.map((option) => <option value={option.value}>{option.title}</option>)}
            </Form.Select>
        </Form.Group>
    )
})

export default Select