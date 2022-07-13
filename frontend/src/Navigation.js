import React from 'react'

import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"

import {LinkContainer} from "react-router-bootstrap"
export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      
    <Container>
        <LinkContainer to="/">
            <Navbar.Brand >
            </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <LinkContainer to="/">
                <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" >
                
                <Nav.Link href="#link">Login</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/admin" >
                <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

