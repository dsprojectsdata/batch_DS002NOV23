import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Input from '../../components/form-component/Input'
import { useForm } from "react-hook-form"
import { REQUIRED } from '../../constants'
import ErrorTag from '../../components/form-component/ErrorTag'
import instanceAxios from '../../services/base'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { login } from '../../redux/features/AuthSlice'
import SubmitBtn from '../../components/form-component/SubmitBtn'

const Signup = () => {

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch()

    const registerUser = async (data) => {
        setIsLoading(true);
        try {
            const response = await instanceAxios.post("/signup", data)
            localStorage.setItem("auth", JSON.stringify(response.data.data))
            dispatch(login(response.data.data))
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className='login bg-dark py-5' id='login'>
                <div className='container'>
                    <h1 className='fw-bold text-center text-white pb-5' style={{ fontSize: '40px' }}>Sign Up</h1>
                    <Form onSubmit={handleSubmit(registerUser)}>
                        <div className='formbox text-white' style={{ width: '50%', margin: '0 auto' }}>
                            <Input
                                label="Full Name"
                                {...register("name", {
                                    required: REQUIRED,
                                    minLength: {
                                        value: 3,
                                        message: "Minmun 3 char required"
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: "Maxmim 30 char required"
                                    }
                                })}
                            />
                            <ErrorTag error={errors.name} />

                            <Input
                                label="Email"
                                type="email"
                                className="mt-4"
                                {...register("email", {
                                    required: REQUIRED
                                })}
                            />
                            <ErrorTag error={errors.email} />

                            <Input
                                label="password"
                                type="password"
                                className="mt-4"
                                {...register("password", {
                                    required: REQUIRED,
                                    minLength: {
                                        value: 6,
                                        message: "Password should be of min 6 char"
                                    }
                                })}
                            />
                            <ErrorTag error={errors.password} />

                            <div className='text-center'>
                                <SubmitBtn isLoading={isLoading}>Sign Up</SubmitBtn>
                                <br />
                            </div>
                            <div className='text-center mt-5'>
                                <p>You don't have an account yet? <Link to="/login" style={{ color: 'white' }}>Sign in</Link></p>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default Signup