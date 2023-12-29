import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Forgetpassword = () => {
  return (
    <>
    <section className='login bg-dark py-5' id='login'>
        <div className='container'>
            <h1 className='fw-bold text-center text-white pb-5' style={{fontSize: '40px'}}>Forgot Password?</h1>
            <div className='formbox text-white' style={{width: '50%', margin: '0 auto'}}>
                <Form.Label htmlFor="inputPassword5" className='fw-bold mt-4' style={{fontSize: '20px'}}>Email</Form.Label>
                <Form.Control
                type="email"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                />
                <div className='text-center'>
                <Button variant="primary" className='px-5 mt-5' size="lg">Send</Button><br/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Forgetpassword