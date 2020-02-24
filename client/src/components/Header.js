import React, { Component } from "react"

import { Nav, Navbar } from "react-bootstrap"

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/auth/google">Login With Google</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header