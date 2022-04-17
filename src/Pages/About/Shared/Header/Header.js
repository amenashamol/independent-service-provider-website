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
 
  
 <Navbar collapseOnSelect expand="lg" bg="info" variant="light" sticky="top">
  <Container>
  <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ms-auto">
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    );
};

export default Header;