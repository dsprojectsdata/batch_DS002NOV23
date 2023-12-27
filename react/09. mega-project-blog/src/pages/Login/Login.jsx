import { Form, Button, Container } from 'react-bootstrap';
import React from 'react'
import Input from '../../components/form-component/Input';

export const Login = () => {



    return (
        <>
            <Container>
                <Form className='my-4'>

                    <Input
                        label="Email address"
                        type="email"
                        placeholder="Enter email"

                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                    />
                                        
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
