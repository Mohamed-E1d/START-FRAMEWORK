import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'; 
export default function CustomNavbar() {
  return (
    <>
 <Navbar expand="lg" className="bg-Nav py-4 ">
  <Container >
    <Navbar.Brand href="#home"className="fs-3 fw-bold"
          style={{ letterSpacing: '1px' }} >START FRAMEWORK</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
<Nav.Link as={Link} to="/about" className="mx-3 text-uppercase fw-bold">About</Nav.Link>
<Nav.Link as={Link} to="/portfolio" className="mx-3 text-uppercase fw-bold">Portfolio</Nav.Link>
<Nav.Link as={Link} to="/contact" className="mx-3 text-uppercase fw-bold">Contact</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</>
  );
}


