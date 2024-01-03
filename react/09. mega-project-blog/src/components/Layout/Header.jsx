import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import Logout from '../Logout'

const Header = () => {

    const userData = useSelector(state => state.auth.data);
    const authStatus = useSelector(state => state.auth.authStatus)

    console.log(authStatus);

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto" style={{ display: "flex", gap: 16 }}>
                        <NavLink style={{ textDecoration: "none" }} to="/" className='text-white'>Home</NavLink>
                        <NavLink style={{ textDecoration: "none" }} to="/blogs" className='text-white'>Blog</NavLink>
                        {!authStatus && <>
                            <NavLink style={{ textDecoration: "none" }} to="/login" className='text-white'>Login</NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/signup" className='text-white'>Signup</NavLink>
                        </>}
                        {authStatus && <>
                            <NavLink style={{ textDecoration: "none" }} to="/user/add-blog" className='text-white'>Add Blog</NavLink>
                            <NavLink style={{ textDecoration: "none" }} to="/profile" className='text-white'>{userData?.name}</NavLink>
                            <Logout />
                        </>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header