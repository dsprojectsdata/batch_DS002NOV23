import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Input from '../../components/form-component/Input'
import ErrorTag from '../../components/form-component/ErrorTag'
import SubmitBtn from '../../components/form-component/SubmitBtn'
import { useForm } from 'react-hook-form'
import { ADD_CATEGORY_URL, REQUIRED } from '../../constants'
import { errorToast, successToast } from '../../components/ToastAlert'
import instanceAxios from '../../services/base'

const AddCategoryForm = ({ getCategories }) => {

    const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    // Add Category API
    const addCategory = async (data) => {
        setIsLoading(true);
        try {
            const response = await instanceAxios.post(ADD_CATEGORY_URL, data);
            reset()
            getCategories();
            successToast(response.data.message)
        } catch (error) {
            errorToast(error.response.data.message)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form className='mt-4' onSubmit={handleSubmit(addCategory)}>
            <Input
                label="Title"
                {...register("name", {
                    required: REQUIRED
                })}
            />

            <ErrorTag error={errors.name} />
            <SubmitBtn isLoading={isLoading}>Add</SubmitBtn>
        </Form>
    )
}

export default AddCategoryForm