import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Navbarr() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand href="#home"><img src='./clogo.png' width={'180px'} height={'80px'}/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" style={{textDecoration:"none"}}><Nav.Link href="#features">Accueil</Nav.Link></Link>
          <Link to="apropos"style={{textDecoration:"none"}}><Nav.Link href="#pricing">Qui sommes nous </Nav.Link></Link>
            <NavDropdown title="Nos services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Création d'entreprise</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Comptabilité en ligne
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gestion de paie</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Link to="contact" style={{textDecoration:"none"}}><Nav.Link href="#deets" >Contactez nous</Nav.Link></Link>
          <Link to="login" style={{textDecoration:"none"}}><Button variant="warning"> Devenir notre client</Button></Link>            
            <Link to="login" style={{textDecoration:"none"}}> 
            <Nav.Link href="#deets">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path fill="black"  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr