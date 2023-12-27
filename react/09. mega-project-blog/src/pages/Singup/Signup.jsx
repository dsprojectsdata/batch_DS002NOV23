import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Input from '../../components/form-component/Input'
import { useForm } from "react-hook-form"
import { REQUIRED } from '../../constants'
import ErrorTag from '../../components/form-component/ErrorTag'
import instanceAxios from '../../services/base'

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerUser = async (data) => {
        console.log(data);

        const response = await instanceAxios.post("/signup", data);
        console.log("response >>", response);
    }

    // console.log(errors);

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
                                <Button variant="primary" className='px-5 mt-5' size="lg" type="submit">
                                    Sign Up
                                </Button>
                                <br />
                            </div>
                            <div className='text-center mt-5'>
                                <p>You don't have an account yet? <a href='#' style={{ color: 'white' }}>Sign in</a></p>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default Signup