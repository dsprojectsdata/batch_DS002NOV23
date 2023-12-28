import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"

const Header = () => {



    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto" style={{ display: "flex", gap: 16 }}>
                        <NavLink style={{ textDecoration: "none" }} to="/" className='text-white'>Home</NavLink>
                        <NavLink style={{ textDecoration: "none" }} to="/features" className='text-white'>Blog</NavLink>
                        <NavLink style={{ textDecoration: "none" }} to="/pricing" className='text-white'>Login</NavLink>
                        <NavLink style={{ textDecoration: "none" }} to="/signup" className='text-white'>Signup</NavLink>
                        <NavLink style={{ textDecoration: "none" }} to="/pricing" className='text-white'>Add Blog</NavLink>
                        <NavLink style={{ textDecoration: "none" }} to="/pricing" className='text-white'>User Name</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header