import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"
export const Header = () => {
  return (
    <Navbar bg="info" variant="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">PK-ECOM</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};