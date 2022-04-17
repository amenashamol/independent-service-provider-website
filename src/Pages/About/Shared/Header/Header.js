import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
//import logo from '../../../../images/logo.png'
//import { useAuthState } from 'react-firebase-hooks/auth';
//import auth from '../../../../firebase.init';
//import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
 
  
 <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#blogs">Blogs</Nav.Link>
      <Nav.Link href="#signin">Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    );
};

export default Header;