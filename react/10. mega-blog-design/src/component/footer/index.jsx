import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <footer className="page-footer font-small blue pt-4 bg-primary text-white">
    <div className="container py-5">
        <div className="row justify-content-between">
            <div className="col-md-10 mt-md-0 mt-3">
                <h5 className="text-uppercase">LOGO</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>
  
            <hr className="clearfix w-100 d-md-none pb-0"/>
  
            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <Nav className='d-block text-white'>
                    <Nav.Link to="/" className='px-0 text-white'>Home</Nav.Link>
                    <Nav.Link to="/features" className='px-0 text-white'>Blog</Nav.Link>
                    <Nav.Link to="/pricing" className='px-0 text-white'>Contact US</Nav.Link>
                    </Nav>
            </div>
        </div>
    </div>
  
    <div className="footer-copyright text-center py-3 border-top">© 2020 Copyright: MDBootstrap.com </div>
  
  </footer>
    </>
  )
}

export default Footer