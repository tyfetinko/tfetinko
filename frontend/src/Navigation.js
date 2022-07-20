import React from 'react'

import {Navbar,Container,Nav} from "react-bootstrap"

import {LinkContainer} from "react-router-bootstrap"
export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      
    <Container>
        <LinkContainer to="/">
            <Navbar.Brand >
                Ty Fetinko
            </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <LinkContainer to="/">
                <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Skills" >
                <Nav.Link href="">Skills</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/Exp" >
                <Nav.Link>Experience</Nav.Link>
            </LinkContainer>
            
        </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

