import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                    {/* <Link to="/">Home</Link> */}
                    {/* <NavLink to="/" className={({ isActive }) => {
                        return isActive ? "active-menu" : ""
                    }} style={({ isActive }) => { 
                        return isActive ? { color: "red" } : { color: "grey" }
                     }} >Home</NavLink> */}
                    <NavLink to="/">Home</NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink to="/about-us">About</NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink to="/contact">Contact</NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink to="/product">Product</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header

// NavLink

// Dynamic parameter/slug 

// a => Link, href => to