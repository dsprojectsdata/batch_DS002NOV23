import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <Link to="/">Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/about-us">About</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="contact">Contact</Link>
                    {/* a => Link, href => to */}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header


// NavLink

// Dynamic parameter/slug 