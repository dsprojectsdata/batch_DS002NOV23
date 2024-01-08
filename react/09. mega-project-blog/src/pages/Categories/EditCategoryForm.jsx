import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Input from '../../components/form-component/Input'
import ErrorTag from '../../components/form-component/ErrorTag'
import SubmitBtn from '../../components/form-component/SubmitBtn'
import { useForm } from 'react-hook-form'
import { REQUIRED } from '../../constants'
import { errorToast, successToast } from '../../components/ToastAlert'
import instanceAxios from '../../services/base'

const EditCategoryForm = ({ getCategories, currCate }) => {

    console.log("currCate >>", currCate)

    return (
        <Form className='mt-4'>
            <Input
                label="Update Title"
            />

            {/* <ErrorTag error={errors.name} /> */}
            <SubmitBtn>Update</SubmitBtn>
        </Form>
    )
}

export default EditCategoryForm