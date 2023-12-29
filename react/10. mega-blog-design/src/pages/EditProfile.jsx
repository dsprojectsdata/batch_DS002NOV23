import React from 'react'
import { Form, Button } from 'react-bootstrap'

const EditProfile = () => {
  return (
    <>
     <section className='edit_profile'>
        <div className='container'>
            <div className='formbox' style={{width: '50%', margin: '0 auto'}}>
                <Form.Control type="file"  className='mb-3'/>
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
               
                <div className='text-center'>
                <Button variant="primary" className='px-5 mt-5' size="lg">Update</Button><br/>
                </div>
              
            </div>
        </div>
     </section>
    </>
  )
}

export default EditProfile
