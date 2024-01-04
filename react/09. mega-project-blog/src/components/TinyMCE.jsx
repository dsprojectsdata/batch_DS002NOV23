import React, { forwardRef, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Form } from 'react-bootstrap';

const TinyMCE = forwardRef(({ label,  ...props }, ref) => {

    return (
        <>
            {label && <Form.Label className='fw-bold' style={{ fontSize: '20px' }} >{label}</Form.Label>}
            <Editor
                onInit={(evt, editor) => ref.current = editor}
                init={{
                    height: 500,
                    menubar: false,
                }}
            />
        </>
    )
})

// const TinyMCE = 

export default TinyMCE