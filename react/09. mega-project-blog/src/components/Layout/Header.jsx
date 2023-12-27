import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {



    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link to="/" className='text-white'>Home</Nav.Link>
                        <Nav.Link to="/features" className='text-white'>Blog</Nav.Link>
                        <Nav.Link to="/pricing" className='text-white'>Login</Nav.Link>
                        <Nav.Link to="/pricing" className='text-white'>Signup</Nav.Link>
                        <Nav.Link to="/pricing" className='text-white'>Add Blog</Nav.Link>
                        <Nav.Link to="/pricing" className='text-white'>User Name</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header