import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/it.jpg'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
//import logo from '../../../../images/logo.png'
//import { useAuthState } from 'react-firebase-hooks/auth';
//import auth from '../../../../firebase.init';
//import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import CustomLink from '../../../CustomLink/CustomLink';

const Header = () => {
    return (
        <>
 
  
 <Navbar collapseOnSelect expand="lg" bg="info" variant="light" sticky="top">
  <Container>
  <Navbar.Brand as={Link} to="/">
    <img style={{height:'50px' , borderRadius:"20px"}} src={logo} alt="" />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ms-auto">
      <CustomLink as={Link} to="home#services">Services</CustomLink>
      <CustomLink as={Link} to="/about">About</CustomLink>
      <CustomLink as={Link} to="/blogs">Blogs</CustomLink>
      <CustomLink as={Link} to="/signin">SignIn</CustomLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    );
};

export default Header;