import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Singup = () => {
  return (
    <>
    <section className='login bg-dark py-5' id='login'>
        <div className='container'>
            <h1 className='fw-bold text-center text-white pb-5' style={{fontSize: '40px'}}>Sing Up</h1>
            <div className='formbox text-white' style={{width: '50%', margin: '0 auto'}}>
                <Form.Label htmlFor="inputPassword5" className='fw-bold' style={{fontSize: '20px'}}>Full Name</Form.Label>
                <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                />

                <Form.Label htmlFor="inputPassword5" className='fw-bold mt-4' style={{fontSize: '20px'}}>Email</Form.Label>
                <Form.Control
                type="email"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                />

                <Form.Label htmlFor="inputPassword5" className='fw-bold mt-4' style={{fontSize: '20px'}}>Password</Form.Label>
                <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                />
                <div className='checkbox_remb mt-3'>
                <Form.Check aria-label="option 1" className='d-inline me-2' />
                <Form.Label htmlFor="inputPassword5" className='fw-bold' style={{fontSize: '20px', lineHeight: '0'}}>remberme</Form.Label>
                </div>
                <div className='text-center'>
                <Button variant="primary" className='px-5 mt-5' size="lg">Sing Up</Button><br/>
                <Button variant="outline-light" className='d-inline-block mt-3 px-5 py-2'>Sign in with Google</Button>
                </div>
                <div className='text-center mt-5'><p>You don't have an account yet? <a href='#' style={{color: 'white'}}>Sign in</a></p></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Singup