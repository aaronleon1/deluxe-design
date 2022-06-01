import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MainNav = () => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Deluxe Design</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav inline className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
