import React, { useState } from 'react'
import Input from '../../components/form-component/Input';
import SubmitBtn from '../../components/form-component/SubmitBtn';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LOGIN_URL, REQUIRED } from '../../constants';
import { Form } from 'react-bootstrap';
import ErrorTag from '../../components/form-component/ErrorTag';
import instanceAxios from '../../services/base';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/AuthSlice';

export const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm()

    const loginUser = async (data) => {
        console.log(data);
        setIsLoading(true)
        try {
            const response = await instanceAxios.post(LOGIN_URL, data)
            dispatch(login(response.data.data))
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <section className='login bg-dark py-5' id='login'>
                <div className='container'>
                    <h1 className='fw-bold text-center text-white pb-5' style={{ fontSize: '40px' }}>Login</h1>
                    <div className='formbox text-white' style={{ width: '50%', margin: '0 auto' }}>
                        <Form onSubmit={handleSubmit(loginUser)}>
                            <Input
                                label="Email"
                                {...register("email", {
                                    required: REQUIRED
                                })}
                            />
                            <ErrorTag error={errors.email} />

                            <Input
                                label="Password"
                                type="password"
                                {...register("password", {
                                    required: REQUIRED,
                                    minLength: {
                                        value: 6,
                                        message: "Min 6 char required"
                                    }
                                })}
                            />
                            <ErrorTag error={errors.password} />

                            <div className='checkbox_remb mt-3 text-end'>
                                <a href='#' style={{ color: 'white' }}>Forgot Password</a>
                            </div>

                            <div className='text-center'>
                                <SubmitBtn isLoading={isLoading}>
                                    Login
                                </SubmitBtn>
                            </div>
                        </Form>
                        <div className='text-center mt-5'>
                            <p>You don't have an account yet? <Link to='/singup' style={{ color: 'white' }}>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
